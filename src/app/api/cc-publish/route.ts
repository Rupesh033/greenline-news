import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

const SECRET = process.env.CC_SECRET || "";

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

  // Ping handshake from Command Center
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
      .replace(/[^a-z0-9\u0900-\u097f]+/g, "-")
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
    const dataDir = path.join(process.cwd(), "src", "data");
    const filePath = path.join(dataDir, "dynamic-articles.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let articles: any[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, "utf8");
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) articles = parsed;
      } catch (e) {
        console.warn("[CC-Publish] dynamic-articles.json read error", e);
      }
    }

    const existingIndex = articles.findIndex((a: any) => a.slug === slug);
    if (existingIndex >= 0) {
      articles[existingIndex] = { ...articles[existingIndex], ...newArticle, id: articles[existingIndex].id };
    } else {
      articles.unshift(newArticle);
    }

    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2), "utf8");

    // Revalidate paths for instant Next.js update
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
