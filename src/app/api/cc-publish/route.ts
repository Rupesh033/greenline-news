import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

const SECRET = process.env.CC_SECRET || "cc_greenline_sec_2026";
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL || "https://positive-foxhound-71953.upstash.io";
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN || "gQAAAAAAARkRAAIncDIyZGE2ZDZmZGI5YTY0YWQ5YWI4YTRiY2E5NTVhMGI1MXAyNzE5NTM";
const KV_KEY = "greenline:articles";

async function kvGetArticles(): Promise<any[]> {
  try {
    const res = await fetch(`${UPSTASH_URL}/get/${KV_KEY}`, {
      headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
      cache: "no-store",
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (!data || !data.result) return [];
    const parsed = typeof data.result === "string" ? JSON.parse(data.result) : data.result;
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.warn("[CC-Publish] Upstash get error:", err);
    return [];
  }
}

async function kvSaveArticles(articles: any[]): Promise<boolean> {
  try {
    const res = await fetch(`${UPSTASH_URL}/set/${KV_KEY}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${UPSTASH_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articles),
    });
    return res.ok;
  } catch (err) {
    console.warn("[CC-Publish] Upstash set error:", err);
    return false;
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "Greenline News CC Webhook",
    status: "active",
    note: "Send POST with header x-cc-secret",
    hasSecretConfigured: Boolean(SECRET),
  });
}

export async function POST(req: NextRequest) {
  const headerSecret = req.headers.get("x-cc-secret");
  if (!SECRET || headerSecret !== SECRET) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ ok: false, error: "Bad JSON" }, { status: 400 });
  }

  if (body.ping) {
    return NextResponse.json({ pong: true, ok: true, note: "CC connected" });
  }

  const {
    title,
    slug: rawSlug,
    contentHtml,
    contentMarkdown,
    metaTitle,
    metaDescription,
    tags,
    thumbnailBase64,
    imageUrl,
    image,
    author,
    publishedAt,
    categoryId,
  } = body;

  const postTitle = (title || metaTitle || "Untitled News").trim();
  const slug = (
    rawSlug ||
    postTitle
      .toLowerCase()
      .replace(/[^a-z0-9ऀ-ॿ]+/g, "-")
      .replace(/^-+|-+$/g, "") ||
    `news-${Date.now()}`
  ).trim();

  let content = contentHtml || "";
  if (!content && contentMarkdown) {
    content = contentMarkdown
      .split(/\n\s*\n/)
      .map((p: string) => `<p>${p.trim()}</p>`)
      .join("\n");
  }

  const excerpt = metaDescription || postTitle;
  const authorName = (typeof author === "string" ? author : author?.name) || "Greenline News Desk";
  const postImage = imageUrl || image || thumbnailBase64 || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=1200";

  const newArticle = {
    id: `cc_${Date.now()}`,
    title: postTitle,
    slug,
    excerpt,
    content,
    categoryId: categoryId || "c1",
    imageUrl: postImage,
    author: {
      name: authorName,
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
    },
    date: publishedAt || new Date().toISOString(),
    readTime: "4 min read",
    featured: true,
    trending: true,
  };

  try {
    let articles = await kvGetArticles();

    if (articles.length === 0) {
      try {
        const filePath = path.join(process.cwd(), "src", "data", "dynamic-articles.json");
        if (fs.existsSync(filePath)) {
          const raw = fs.readFileSync(filePath, "utf8");
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) articles = parsed;
        }
      } catch {}
    }

    const existingIndex = articles.findIndex((a: any) => a.slug === slug);
    if (existingIndex >= 0) {
      articles[existingIndex] = { ...articles[existingIndex], ...newArticle, id: articles[existingIndex].id };
    } else {
      articles.unshift(newArticle);
    }

    await kvSaveArticles(articles);

    try {
      const dataDir = path.join(process.cwd(), "src", "data");
      if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
      fs.writeFileSync(path.join(dataDir, "dynamic-articles.json"), JSON.stringify(articles, null, 2), "utf8");
    } catch {}

    try {
      revalidatePath("/");
      revalidatePath("/hi");
      revalidatePath("/en");
      revalidatePath(`/hi/article/${slug}`);
      revalidatePath(`/en/article/${slug}`);
      revalidatePath(`/article/${slug}`);
    } catch (revErr) {
      console.warn("[CC-Publish] Revalidate warning:", revErr);
    }

    return NextResponse.json({ ok: true, url: `/hi/article/${slug}` });
  } catch (error: any) {
    console.error("[CC-Publish] Error saving article in greenline news:", error);
    return NextResponse.json({ ok: false, error: error.message || "Failed to save article" }, { status: 500 });
  }
}
