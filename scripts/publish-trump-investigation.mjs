import fs from 'fs';
import path from 'path';

const DATA_FILE = path.resolve('src/lib/data.ts');
const ADMIN_FILE = path.resolve('src/store/adminArticles.ts');

const AUTHOR_EN = {
  name: "Special Investigative Bureau, Greenline News",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
};

const AUTHOR_HI = {
  name: "विशेष खोजी ब्यूरो, ग्रीन लाइन न्यूज़",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
};

const article_en = {
  id: "trump-false-claims-30573-un-threats-investigation-en",
  title: "Fact vs. Trump: From 30,573 False Claims to 'Annihilate' Threats — A Documented Investigation",
  slug: "donald-trump-false-claims-fact-check-investigation-en",
  excerpt: "A forensic, data-backed audit of Donald Trump's 30,573 documented falsehoods, 2020 election litigation, tariff economics, territorial claims over Greenland, and rhetoric culminating in the September 2026 UN General Assembly address.",
  content: `<div class="article-lead-badge bg-slate-900 text-slate-100 border border-slate-700 px-5 py-3 rounded-xl font-semibold mb-8 shadow-sm flex items-center gap-3">
  <span class="text-xl">⚡</span>
  <span>GREENLINE NEWS SPECIAL INVESTIGATIVE DOSSIER | GLOBAL FACT-CHECK AUDIT</span>
</div>

<p class="text-xl font-serif leading-relaxed text-gray-800 mb-6 font-medium">
<strong>WASHINGTON / NEW YORK:</strong> In democratic statecraft, political exaggeration is hardly novel. Throughout history, leaders have embellished statistics and spun narratives. But when nonpartisan fact-checkers catalog <strong>30,573 false or misleading statements</strong> across a single four-year presidential tenure, and when subsequent political rhetoric escalates from territorial ambitions over Greenland to threats of complete "annihilation" delivered at the United Nations, the question transcends ordinary partisanship. The urgent democratic inquiry becomes: <em>In modern political discourse, are empirical facts, judicial findings, and institutional checks being subordinated to fear and belligerence?</em>
</p>

<p class="text-gray-700 leading-relaxed mb-6">
This report is not an ideological critique. It is a <strong>documented forensic audit</strong> grounded in sworn court filings, unsealed Department of Justice records, peer-reviewed economic studies by the Federal Reserve and NBER, and independent reporting by accredited global fact-checking institutions—including The Washington Post Fact Checker, the Associated Press (AP), FactCheck.org, Reuters, and PolitiFact.
</p>

<!-- SECTION 1 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-indigo-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">1. The 30,573 Claims Audit: Documented Pattern and Volume</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    Between January 20, 2017, and January 20, 2021, <em>The Washington Post's</em> Fact Checker maintained an audited database tracking every public utterance made by Donald Trump. The empirical ledger recorded <strong>30,573 false or misleading claims</strong>—an average of roughly <strong>21 per day</strong>, accelerating to more than 50 assertions daily during the final months of his first administration. Independent tallies conducted by the <em>Toronto Star</em> and <em>PolitiFact</em> mirrored this trajectory.
  </p>
  
  <pre class="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs md:text-sm font-mono overflow-x-auto my-4 leading-snug">
           The Washington Post Fact Checker 4-Year Statistical Trajectory
                                       │
         ┌─────────────────────────────┴─────────────────────────────┐
         ▼                                                           ▼
[Year 1 (2017): ~1,999 Claims]                              [Year 4 (2020): ~16,400+ Claims]
• Average: ~5.4 claims/day                                  • Average: ~45-50 claims/day
• Focus: Crowd size, economic records                       • Focus: COVID-19, mail-in ballots, trade
         │                                                           │
         └─────────────────────────────┬─────────────────────────────┘
                                       ▼
                  Total First-Term Cataloged Falsehoods:
                               30,573 CLAIMS
                  (Methodology: Public, auditable citations)
  </pre>

  <p class="text-gray-700 leading-relaxed mb-3">
    Seminal case studies that established this evidentiary pattern include:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>Inauguration Crowd Size (January 2017):</strong> Insisting his swearing-in witnessed the "largest audience ever," contradicted directly by National Park Service aerial photography and Washington Metro transit ridership metrics.</li>
    <li><strong>Hurricane Dorian & "Sharpiegate" (September 2019):</strong> Displaying an officially modified National Hurricane Center trajectory map in the Oval Office altered with a black marker to place Alabama in the storm's cone, prompting an internal NOAA scientific integrity probe.</li>
    <li><strong>Wind Turbines & Health (April 2019):</strong> Publicly asserting that acoustic emissions from wind turbines "cause cancer"—a claim rejected unanimously by oncological and medical researchers globally.</li>
  </ul>
  <p class="text-gray-700 leading-relaxed">
    Fact-checkers emphasized that political figures occasionally misstate details; however, the critical anomaly documented here was the <strong>deliberate repetition of debunked claims</strong> even after clear factual corrections were presented on the official record.
  </p>
</div>

<!-- SECTION 2 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-red-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">2. The 2020 Election: Debunked by Trump's Own Administration and Courts</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    Following the November 2020 election, assertions of systemic, outcome-altering electoral fraud were disseminated across social platforms, media appearances, and legal filings. What does the sworn, documented record reveal?
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>CISA Official Assessment (Nov 2020):</strong> The Cybersecurity and Infrastructure Security Agency—a division of the Department of Homeland Security—issued a joint statement with election partners declaring the 2020 election <em>"the most secure in American history."</em> Days later, Trump summarily terminated CISA Director Christopher Krebs.</li>
    <li><strong>Attorney General William Barr's Finding (Dec 2020):</strong> Trump's own Attorney General explicitly told the Associated Press: <em>"To date, we have not seen fraud on a scale that could have effected a different outcome in the election."</em></li>
    <li><strong>Over 60 Court Losses:</strong> Trump-aligned legal challenges in Arizona, Georgia, Michigan, Nevada, Pennsylvania, and Wisconsin were rejected in more than 60 lawsuits by state and federal judges—including multiple judges appointed by Trump himself—consistently cited a total absence of admissible evidence.</li>
    <li><strong>July 2026 Unsealed Evidence Review:</strong> Exhaustive reviews of unsealed Department of Justice working files and investigative materials reaffirmed that multi-state audits, machine forensic reviews, and hand recounts found zero evidence of coordinated fraud.</li>
  </ul>

  <div class="my-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
    <h3 class="font-bold text-amber-900 text-base mb-1">Judicial Verdicts vs. Opinion: Documented Legal Findings</h3>
    <p class="text-amber-800 text-sm leading-relaxed mb-2">
      In February 2024, New York State Supreme Court Justice Arthur Engoron found the Trump Organization and its executives liable for persistent civil fraud, ruling that financial statements systematically inflated asset valuations by billions of dollars to secure favorable loans—imposing a <strong>$454+ million penalty</strong>. In May 2024, a New York jury unanimously convicted Trump on <strong>34 felony counts</strong> of falsifying business records. These constitute binding judicial judgments, not subjective media commentary.
    </p>
  </div>
</div>

<!-- SECTION 3 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-amber-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">3. The Mathematics of Tariffs: "China Pays" vs. Economic Reality</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    A perennial centerpiece of Trump's economic platform is the assertion: <strong>"Foreign nations and China pay the tariffs."</strong> Comprehensive econometric analysis across academic and governmental institutions universally disproves this premise:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>New York Federal Reserve & NBER Empirical Evidence:</strong> Multi-year peer-reviewed studies examining the 2018–2019 tariff rounds, as well as sweeping 2025 import levies, established that the tariff tax incidence falls almost <strong>100% on U.S. importing firms and domestic consumers</strong>. Foreign exporters do not write checks to the U.S. Department of the Treasury.</li>
    <li><strong>Household Burden:</strong> According to the Peterson Institute for International Economics (PIIE) and the Tax Foundation, sweeping across-the-board tariffs act as an indirect consumption tax, reducing median American household purchasing power by $1,200 to $2,600 annually.</li>
    <li><strong>Conflating Trade Deficits with Subsidies:</strong> Trump routinely characterises bilateral trade deficits—such as claims regarding Canada or Mexico—as "subsidies" paid by the United States. In trade economics, a merchandise trade deficit simply reflects voluntary cross-border consumer purchases of goods over services, not a sovereign payout from public coffers.</li>
  </ul>
</div>

<!-- SECTION 4 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-teal-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">4. Territorial Ambitions: Greenland and the Panama Canal</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    Territorial and strategic claims have occupied a significant portion of foreign policy speeches:
  </p>
  
  <div class="space-y-4 mb-4">
    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-2xs">
      <h3 class="font-bold text-gray-900 text-base mb-1">Greenland Sovereignty & The September 2026 Security Pact</h3>
      <p class="text-gray-700 text-sm leading-relaxed mb-2">
        After proposing to "purchase" Greenland in 2019 (dismissed as "absurd" by Danish Prime Minister Mette Frederiksen), rhetoric intensified in 2025 with Trump declining to rule out military or economic pressure to acquire the strategic Arctic territory. In response, Greenland's Prime Minister Múte Egede stated unambiguously: <em>"We are not for sale and we do not want to be Americans,"</em> backed by polls showing ~85% public opposition.
      </p>
      <p class="text-gray-700 text-sm leading-relaxed">
        <strong>The Documented Resolution:</strong> On September 22, 2026, the United States, Denmark, and Greenland formally signed a trilateral security agreement in New York. The treaty authorized expanded U.S. defense activities at <strong>Pituffik Space Base</strong> and new installations at <strong>Narsarsuaq and Mestersvig</strong>, while legally blocking foreign adversary investments. Crucially, the pact reaffirmed the <strong>sovereign territorial integrity of Denmark</strong> and recognized Greenland's right to democratic self-determination, dismantling unilateral takeover rhetoric.
      </p>
    </div>

    <div class="p-4 bg-white border border-gray-200 rounded-lg shadow-2xs">
      <h3 class="font-bold text-gray-900 text-base mb-1">Panama Canal: 38,000 Deaths Claim vs. Historical Record</h3>
      <p class="text-gray-700 text-sm leading-relaxed mb-2">
        Trump repeatedly claimed that <strong>38,000 Americans died</strong> building the Panama Canal and alleged that China "now controls and operates" the waterway.
      </p>
      <p class="text-gray-700 text-sm leading-relaxed">
        <strong>The Historical Record:</strong> Official records and historical archives document that approximately <strong>5,600 workers died</strong> during the American construction phase (1904–1914), of whom the vast majority were Afro-Caribbean laborers; American citizen fatalities numbered fewer than 400. While the earlier French effort under Ferdinand de Lesseps lost roughly 20,000 lives, Trump's 38,000 American death figure is historically unfounded. Furthermore, the canal is operated strictly by the sovereign <strong>Panama Canal Authority (ACP)</strong>, and the President of Panama publicly refuted assertions of Chinese management.
      </p>
    </div>
  </div>
</div>

<!-- SECTION 5 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-rose-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">5. The Rhetoric of Conflict: The September 2026 UN General Assembly Speech</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    On <strong>September 22, 2026</strong>, President Trump addressed the 81st United Nations General Assembly in New York. The 30-minute address drew unprecedented international scrutiny for its apocalyptic rhetoric and multiple verified factual discrepancies:
  </p>

  <div class="my-4 p-5 bg-rose-50 border border-rose-200 rounded-xl">
    <p class="text-xs uppercase tracking-wider font-bold text-rose-700 mb-1">Official Speech Transcript Excerpt (September 22, 2026)</p>
    <blockquote class="italic text-gray-800 text-base leading-relaxed pl-3 border-l-2 border-rose-400">
      "I have a big decision to make. Will a deal be made with Iran that lets them rebuild, and create a far greater country than it ever was before? Or do I annihilate the Islamic Republic and do it quickly, never giving them a chance to kill and destroy people and countries again? Do I drive them into hell with no chance of survival and no hope of future greatness or generations?"
    </blockquote>
  </div>

  <p class="text-gray-700 leading-relaxed mb-3">
    An immediate forensic fact-check published by the <strong>Associated Press (AP)</strong> and global defense analysts audited multiple key claims from the speech:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>Munitions Stockpiles:</strong> Trump claimed, <em>"We have more munitions than we could ever possibly even think of using, and we're building them at levels that we have never done before."</em> AP and military defense audits contradicted this, documenting "beyond critical" shortages in advanced missile interceptors—most notably PAC-3 munitions for Patriot air defense batteries—exhausted by sustained Middle Eastern operations.</li>
    <li><strong>Artificial Intelligence as a "Hoax":</strong> Trump brushed aside risks surrounding artificial intelligence, branding critics as purveyors of partisan hoaxes. Fact-checkers noted that cautionary warnings were formally submitted to Congress by leading technology developers themselves, including the CEOs of OpenAI and Anthropic.</li>
    <li><strong>Oil Reserves & Energy Metrics:</strong> Comparisons between Venezuelan and U.S. reserves and production metrics contradicted verified Department of Energy and EIA statistical benchmarks.</li>
  </ul>
</div>

<!-- SECTION 6 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">6. "I Ended 8 Wars" — Assessing the Mediation Claims</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    Trump has asserted that during his tenure he single-handedly resolved or prevented "eight foreign wars." Diplomatic records and international fact-checkers contextualize these assertions:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>Border Skirmishes vs. Wars:</strong> Several cited incidents constituted localized skirmishes, cross-border exchanges, or extensions of pre-existing ceasefires negotiated by regional partners.</li>
    <li><strong>The India-Pakistan Case Study (May 2025):</strong> While Trump claimed credit for averting war between India and Pakistan, the Ministry of External Affairs in New Delhi firmly clarified that the Line of Control ceasefire reaffirmation was achieved strictly via <strong>bilateral Director General of Military Operations (DGMO)</strong> mechanisms, explicitly denying any role for U.S. mediation.</li>
  </ul>
</div>

<!-- SECTION 7: COMPARISON TABLE -->
<div class="my-10 p-6 bg-slate-50 border border-gray-300 rounded-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-4">7. The Master Fact-Check Audit Matrix</h2>
  <div class="overflow-x-auto my-4">
    <table class="w-full text-left border border-gray-300 rounded-lg text-sm bg-white">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="p-3 w-1/4">Claim by Donald Trump</th>
          <th class="p-3 w-1/2">Documented Empirical Record</th>
          <th class="p-3 w-1/4">Fact-Check Verdict</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 text-gray-700">
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"Foreign nations & China pay billions in tariffs"</td>
          <td class="p-3">NY Fed and NBER studies confirm tariff incidence is absorbed by domestic U.S. importers and consumers via elevated retail pricing.</td>
          <td class="p-3 text-red-600 font-bold">FALSE</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"38,000 Americans died building the Panama Canal"</td>
          <td class="p-3">U.S. construction phase (1904–14) casualties totaled ~5,600, mostly Afro-Caribbean laborers; American citizens numbered &lt;400.</td>
          <td class="p-3 text-red-600 font-bold">FALSE</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"Systemic fraud decided the 2020 election"</td>
          <td class="p-3">60+ court dismissals; CISA designated it the "most secure in history"; AG Barr stated DOJ found no outcome-altering fraud.</td>
          <td class="p-3 text-red-600 font-bold">UNSUPPORTED / DEBUNKED</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"We have more munitions than we could ever think of using" (UN 2026)</td>
          <td class="p-3">AP fact-check and military procurement reports document "beyond critical" shortages in Patriot PAC-3 interceptors due to Iran conflict.</td>
          <td class="p-3 text-red-600 font-bold">CONTRADICTED BY MILITARY DATA</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"Single-handedly ended 8 international wars"</td>
          <td class="p-3">Includes short-lived skirmishes and bilateral ceasefires; sovereign states like India publicly denied U.S. mediation.</td>
          <td class="p-3 text-amber-600 font-bold">EXAGGERATED / DISPUTED</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"Threatened to 'annihilate' Iran at UN General Assembly"</td>
          <td class="p-3">Official audio, video, and verified transcript confirm exact quote delivered to world leaders on September 22, 2026.</td>
          <td class="p-3 text-emerald-700 font-bold">VERIFIED DOCUMENTED QUOTE</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- SECTION 8 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-gray-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">8. Official Administration Perspective & Right of Reply</h2>
  <p class="text-gray-700 leading-relaxed mb-3">
    Journalistic standards require documenting the official stance of the Trump administration and campaign surrogates:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>Rejection of Legacy Fact-Checkers:</strong> The administration routinely dismisses media fact-checking organizations as partisan advocacy groups engaged in biased selective editing.</li>
    <li><strong>Tariff Rationale:</strong> White House spokespersons argue that tariffs provide critical strategic leverage in trade negotiations, encourage domestic re-shoring of critical manufacturing, and collect billions in gross customs revenues regardless of who absorbs the final price.</li>
    <li><strong>Rhetorical Deterrence:</strong> Surrogates defend aggressive public statements—such as the threat to "annihilate" Iran—as tactical deterrence within a "Peace Through Strength" doctrine designed to force adversaries to negotiate rather than wage protracted conventional warfare.</li>
  </ul>
</div>

<!-- SECTION 9: CONCLUSION -->
<div class="my-12 p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl shadow-xl">
  <h3 class="text-2xl font-bold mb-4 font-serif text-emerald-300">Editorial Conclusion: The Integrity of Empirical Facts</h3>
  <p class="leading-relaxed text-slate-200 mb-4 text-base md:text-lg">
    Characterizing any political leader is often colored by partisan ideology. But recording whether assertions match documented reality is the fundamental duty of independent journalism. When fact-checkers catalog 30,573 false claims, when sworn judicial proceedings confirm civil fraud, when economic data disproves trade math, and when aggressive rhetoric challenges international norms, citizens must maintain rigorous discernment.
  </p>
  <p class="leading-relaxed text-slate-200 text-base md:text-lg">
    Every media consumer must consistently ask three foundational questions: <strong>What is the primary source? How was the statistic calculated? Has the claim been independently verified by nonpartisan institutions?</strong>
  </p>
</div>

<hr class="my-8 border-gray-200" />
<h3 class="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQ)</h3>
<div class="space-y-4 mb-6">
  <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <p class="font-bold text-gray-900">Q1. How many false claims were documented during Donald Trump's presidency?</p>
    <p class="text-gray-700 text-sm mt-1">The Washington Post Fact Checker documented 30,573 false or misleading statements across his four-year term (2017–2021), averaging roughly 21 claims per day with an accelerated frequency in late 2020.</p>
  </div>
  <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <p class="font-bold text-gray-900">Q2. Did government agencies or courts find evidence of decisive fraud in the 2020 election?</p>
    <p class="text-gray-700 text-sm mt-1">No. The Cybersecurity and Infrastructure Security Agency (CISA) declared it the most secure election in American history, Attorney General William Barr affirmed the DOJ found no outcome-altering fraud, and more than 60 lawsuits were dismissed across state and federal courts.</p>
  </div>
  <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <p class="font-bold text-gray-900">Q3. Who actually pays the financial burden of U.S. tariffs?</p>
    <p class="text-gray-700 text-sm mt-1">Peer-reviewed studies by the New York Federal Reserve and the National Bureau of Economic Research (NBER) show that tariffs are paid by U.S. importing companies and passed on to American consumers in the form of higher prices.</p>
  </div>
</div>
<p class="text-xs text-gray-500 pt-3 border-t"><strong>SEO Keywords:</strong> Donald Trump fact check, Trump 30573 claims, Trump false claims database, Trump UN speech 2026, Trump Iran threat, Trump tariffs fact check, Greenland security pact, Panama canal fact check.</p>`,
  categoryId: "c2", // International
  imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1200",
  author: AUTHOR_EN,
  date: "2026-09-26T04:15:00Z",
  readTime: "12 min read",
  featured: false,
  trending: true
};

const article_hi = {
  id: "trump-false-claims-30573-un-threats-investigation-hi",
  title: "Fact बनाम Trump: 30,573 झूठे दावों से UN Speech तक — पूरी जांच",
  slug: "donald-trump-false-claims-fact-check-investigation",
  excerpt: "AP, FactCheck.org और Washington Post के आंकड़ों के साथ Donald Trump के 30,573 false और misleading दावों, 2020 चुनाव अदालती फैसलों, tariffs के अर्थशास्त्र और UN भाषण की पूरी fact-check जांच।",
  content: `<div class="article-lead-badge bg-slate-900 text-slate-100 border border-slate-700 px-5 py-3 rounded-xl font-semibold mb-8 shadow-sm flex items-center gap-3">
  <span class="text-xl">⚡</span>
  <span>ग्रीन लाइन न्यूज़ विशेष अंतर्राष्ट्रीय खोजी ब्यूरो | वैश्विक फैक्ट-चेक महा-अन्वेषण</span>
</div>

<p class="text-xl font-serif leading-relaxed text-gray-800 mb-6 font-medium">
<strong>वाशिंगटन / न्यूयॉर्क:</strong> राजनीति में अतिशयोक्ति नई चीज़ नहीं है। हर दौर में नेता आंकड़े फुलाते रहे हैं। लेकिन जब एक अमेरिकी राष्ट्रपति के चार वर्ष के सार्वजनिक बयानों में fact-checkers <strong>30,573 झूठे या भ्रामक दावे</strong> गिनते हैं, और उनकी भाषा Greenland से Iran तक धमकियों तक पहुँचती है — तो सवाल सिर्फ़ 'कितना सच बोला' नहीं रहता। सवाल यह बन जाता है: <strong>क्या इस राजनीति में Fact, Fear और Threat से हार रहा है?</strong>
</p>

<p class="text-gray-700 leading-relaxed mb-6">
यह रिपोर्ट किसी की राय नहीं है। यह अदालती रिकॉर्ड, सरकारी आंकड़ों, फेडरल रिजर्व/NBER के अर्थशास्त्रीय शोध और स्वतंत्र fact-checking संस्थाओं — The Washington Post, Associated Press (AP), FactCheck.org, Reuters और PolitiFact — की रिपोर्टिंग पर आधारित एक <strong>documented audit</strong> है।
</p>

<!-- SECTION 1 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-indigo-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">1. 30,573 दावों का रिकॉर्ड: संख्या से शुरुआत</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    Washington Post के 'Fact Checker' ने Trump के पहले कार्यकाल (जनवरी 2017–जनवरी 2021) में उनके हर सार्वजनिक दावे का डेटाबेस बनाया। नतीजा: <strong>30,573 false या misleading claims</strong> — औसतन लगभग <strong>21 दावे प्रति दिन</strong>, और अंतिम वर्ष में यह रफ़्तार 45-50 दावे प्रतिदिन तक पहुँच गई। Toronto Star और PolitiFact ने भी अपनी स्वतंत्र tally में इसी अभूतपूर्व संख्या की पुष्टि की।
  </p>

  <pre class="bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs md:text-sm font-mono overflow-x-auto my-4 leading-snug">
               Washington Post फैक्ट-चेकर: 4 वर्षों का लेखा-जोखा
                                       │
         ┌─────────────────────────────┴─────────────────────────────┐
         ▼                                                           ▼
[वर्ष 1 (2017): ~1,999 दावे]                                [वर्ष 4 (2020): ~16,400+ दावे]
• औसत: ~5.4 दावे प्रतिदिन                                   • औसत: ~45-50 दावे प्रतिदिन
• मुख्य मुद्दे: भीड़ का आकार, आर्थिक आंकड़े                 • मुख्य मुद्दे: कोविड-19, चुनाव, टैरिफ
         │                                                           │
         └─────────────────────────────┬─────────────────────────────┘
                                       ▼
                     कुल दर्ज झूठे या भ्रामक दावे:
                              30,573 CLAIMS
  </pre>

  <p class="text-gray-700 leading-relaxed mb-3">
    कुछ यादगार व निर्णायक उदाहरण:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>शपथ ग्रहण की भीड़ (2017):</strong> 'इतिहास की सबसे बड़ी भीड़' का दावा — नेशनल पार्क सर्विस की तस्वीरों और वाशिंगटन मेट्रो राइडरशिप आंकड़ों ने साफ़ उलटा दिखाया।</li>
    <li><strong>तूफान डोरियन व Sharpiegate (2019):</strong> ट्रंप ने अलबामा को तूफान के रास्ते में दिखाया और ओवल ऑफिस में ब्लैक मार्कर (Sharpie) से बदला हुआ आधिकारिक नक्शा पेश किया।</li>
    <li><strong>पवन चक्कियां और कैंसर (2019):</strong> दावा किया कि 'विंडमिल की आवाज से कैंसर होता है' — जिसे पूरी दुनिया के कैंसर रोग विशेषज्ञों ने सर्वसम्मति से खारिज किया।</li>
  </ul>
</div>

<!-- SECTION 2 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-red-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">2. 2020 चुनाव: अपनी ही सरकार और अदालतों द्वारा खारिज</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    2020 हार के बाद व्यापक चुनावी धांधली का दावा दोहराया गया। Documented रिकॉर्ड क्या साबित करता है:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>साइबर सुरक्षा एजेंसी CISA (नवंबर 2020):</strong> आधिकारिक बयान में कहा कि यह 'अमेरिकी इतिहास का सबसे सुरक्षित चुनाव' था। कुछ ही दिन बाद ट्रंप ने इसके निदेशक क्रिस्टोफर क्रेब्स को बर्खास्त कर दिया।</li>
    <li><strong>अटॉर्नी जनरल विलियम बार (दिसंबर 2020):</strong> ट्रंप के ही अटॉर्नी जनरल ने AP को बताया कि न्याय विभाग (DOJ) को ऐसा कोई फर्जीवाड़ा नहीं मिला जो चुनाव परिणाम बदल सके।</li>
    <li><strong>60 से अधिक अदालती हार:</strong> ट्रंप समर्थकों व वकीलों द्वारा विभिन्न राज्यों में दायर 60 से अधिक मुकदमे खारिज हुए — कई मामलों में ट्रंप द्वारा नियुक्त जजों ने भी 'सबूतों का घोर अभाव' पाया।</li>
  </ul>
  <div class="my-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
    <h3 class="font-bold text-amber-900 text-base mb-1">अदालती फैसले: धोखाधड़ी और आपराधिक दोषसिद्धि</h3>
    <p class="text-amber-800 text-sm leading-relaxed mb-2">
      फरवरी 2024 में न्यूयॉर्क की अदालत ने पाया कि ट्रंप ऑर्गनाइजेशन ने वर्षों तक संपत्ति के मूल्यों को कृत्रिम रूप से बढ़ाकर बैंकों से ऋण लिया — <strong>सिविल फ्रॉड साबित</strong>, $454 मिलियन से अधिक का जुर्माना। मई 2024 में हश-मनी मामले में <strong>34 संगीन मामलों (Felony Counts)</strong> में सर्वसम्मत दोषसिद्धि हुई। ये कानूनी रूप से दर्ज अदालती फैसले हैं।
    </p>
  </div>
</div>

<!-- SECTION 3 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-amber-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">3. Tariff का गणित: 'चीन पैसा देगा' बनाम अर्थशास्त्र</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    ट्रंप का लगातार दावा: <strong>"China and foreign nations pay the tariffs."</strong> अर्थशास्त्र और ज़मीनी आंकड़े ठीक उलटा साबित करते हैं:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>न्यूयॉर्क फेड और NBER का शोध:</strong> अध्ययनों में पाया गया कि आयात शुल्क (Tariff) की वास्तविक लागत पूरी तरह <strong>अमेरिकी आयातकों और उपभोक्ताओं</strong> द्वारा वहन की जाती है, क्योंकि विदेशी निर्यातक अमेरिकी खजाने को सीधे पैसे नहीं देते।</li>
    <li><strong>घरेलू उपभोक्ताओं पर बोझ:</strong> पीआईआईई (PIIE) और टैक्स फाउंडेशन के अनुसार, व्यापक टैरिफ अमेरिकी परिवारों पर सालाना $1,200 से $2,600 का अतिरिक्त अप्रत्यक्ष कर बोझ डालते हैं।</li>
    <li><strong>व्यापार घाटे की गलत व्याख्या:</strong> व्यापार घाटे को 'दूसरे देश की सब्सिडी' बताना अर्थशास्त्र के मूल सिद्धांतों के विपरीत है; यह केवल उपभोक्ताओं द्वारा सेवाओं की तुलना में वस्तुओं की खरीद का अंतर है।</li>
  </ul>
</div>

<!-- SECTION 4 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-teal-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">4. भू-भाग संबंधी दावे: ग्रीनलैंड व पनामा नहर</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    <strong>ग्रीनलैंड और सितंबर 2026 सुरक्षा समझौता:</strong> 2019 में ग्रीनलैंड को 'खरीदने' की पेशकश के बाद 2025 में सैन्य विकल्प खारिज न करने की बयानबाजी हुई। ग्रीनलैंड के प्रधानमंत्री ने स्पष्ट कहा: <em>"हम अमेरिकी नहीं बनना चाहते।"</em> इसके बाद <strong>22 सितंबर 2026</strong> को अमेरिका, डेनमार्क और ग्रीनलैंड ने न्यूयॉर्क में त्रिपक्षीय सुरक्षा समझौते पर हस्ताक्षर किए, जिसने पिटुफिक बेस पर अमेरिकी रक्षा सुविधाओं का विस्तार किया लेकिन <strong>डेनमार्क की संप्रभुता व ग्रीनलैंड के आत्मनिर्णय के अधिकार</strong> की स्पष्ट पुष्टि कर एकतरफा कब्जे के दावों को शांत किया।
  </p>
  <p class="text-gray-700 leading-relaxed mb-4">
    <strong>पनामा नहर और 38,000 मौतों का दावा:</strong> ट्रंप का दावा कि नहर निर्माण में 38,000 अमेरिकी मरे और चीन इसे चलाता है। आधिकारिक ऐतिहासिक रिकॉर्ड: अमेरिकी चरण (1904–14) में कुल <strong>~5,600 मौतें</strong> हुईं, जिनमें अधिकांश कैरेबियाई मजदूर थे (अमेरिकी नागरिक 400 से कम थे)। नहर का संचालन पूर्णतः पनामा कनाल अथॉरिटी करती है।
  </p>
</div>

<!-- SECTION 5 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-rose-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">5. भय की भाषा: 22 सितंबर 2026 का UN भाषण और ईरान को धमकी</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    22 सितंबर 2026 को संयुक्त राष्ट्र महासभा के 81वें सत्र में ट्रंप ने ईरान को लेकर अत्यंत आक्रामक भाषण दिया:
  </p>
  <div class="my-4 p-5 bg-rose-50 border border-rose-200 rounded-xl">
    <p class="text-xs uppercase tracking-wider font-bold text-rose-700 mb-1">आधिकारिक भाषण अंश (22 सितंबर 2026, UN)</p>
    <blockquote class="italic text-gray-800 text-base leading-relaxed pl-3 border-l-2 border-rose-400">
      "मेरे सामने एक बड़ा फैसला है: क्या ईरान के साथ ऐसा समझौता किया जाए जो उन्हें फिर से खड़े होने दे, या फिर मैं इस्लामिक रिपब्लिक को पूरी तरह 'अनाइहिलेट' (मिटा) दूँ और ऐसा तुरंत करूँ ताकि वे दोबारा किसी देश को नुकसान न पहुँचा सकें? क्या मैं उन्हें ऐसी तबाही में धकेल दूँ जहाँ से उनके बचने की कोई उम्मीद न रहे?"
    </blockquote>
  </div>
  <p class="text-gray-700 leading-relaxed mb-3">
    एसोसिएटेड प्रेस (AP) के फैक्ट-चेक के अनुसार:
  </p>
  <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-800">
    <li><strong>हथियारों के भंडार का दावा:</strong> ट्रंप का दावा कि "हमारे पास इतने हथियार हैं जितने कभी इस्तेमाल भी नहीं हो सकते," सैन्य विश्लेषकों द्वारा खारिज हुआ; पैट्रियट मिसाइल इंटरसेप्टर्स की भारी किल्लत दर्ज की गई।</li>
    <li><strong>एआई (AI) चेतावनियों को 'धोखा' बताना:</strong> ट्रंप ने एआई खतरों को राजनीतिक धोखा बताया, जबकि प्रमुख टेक कंपनियों (OpenAI, Anthropic) के प्रमुखों ने खुद अमेरिकी संसद में इसके गंभीर खतरों की गवाही दी है।</li>
  </ul>
</div>

<!-- SECTION 6 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-blue-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">6. "मैंने 8 युद्ध खत्म किए" — दावा बनाम कूटनीतिक वास्तविकता</h2>
  <p class="text-gray-700 leading-relaxed mb-4">
    ट्रंप का दावा कि उन्होंने 8 बड़े युद्ध रुकवाए। कूटनीतिक अभिलेख बताते हैं कि इनमें से कई स्थानीय सीमा झड़पें या पूर्व-निर्धारित सीजफायर थे। मई 2025 में भारत-पाकिस्तान नियंत्रण रेखा (LoC) पर तनाव कम होने का श्रेय ट्रंप द्वारा लेने पर, भारत सरकार के विदेश मंत्रालय ने आधिकारिक तौर पर स्पष्ट किया कि यह दोनों देशों के <strong>DGMO स्तर की द्विपक्षीय वार्ता</strong> का परिणाम था और इसमें किसी तीसरे पक्ष (अमेरिका) की कोई भूमिका नहीं थी।
  </p>
</div>

<!-- SECTION 7: MATRIX TABLE -->
<div class="my-10 p-6 bg-slate-50 border border-gray-300 rounded-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-4">7. फैक्ट-चेक मास्टर ऑडिट टेबल</h2>
  <div class="overflow-x-auto my-4">
    <table class="w-full text-left border border-gray-300 rounded-lg text-sm bg-white">
      <thead class="bg-slate-900 text-white">
        <tr>
          <th class="p-3 w-1/4">डोनाल्ड ट्रंप का दावा</th>
          <th class="p-3 w-1/2">उपलब्ध व प्रमाणित तथ्य</th>
          <th class="p-3 w-1/4">फैक्ट-चेक निष्कर्ष</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 text-gray-700">
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"चीन और दूसरे देश टैरिफ का भुगतान करते हैं"</td>
          <td class="p-3">NY Fed और NBER: टैरिफ का 100% बोझ अमेरिकी आयातकों और उपभोक्ताओं पर कीमतों के रूप में पड़ता है।</td>
          <td class="p-3 text-red-600 font-bold">FALSE (झूठा)</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"पनामा नहर बनाते समय 38,000 अमेरिकी मरे"</td>
          <td class="p-3">अमेरिकी निर्माण दौर में कुल ~5,600 मौतें हुईं (अधिकांश कैरेबियाई मजदूर); अमेरिकी नागरिक 400 से कम थे।</td>
          <td class="p-3 text-red-600 font-bold">FALSE (गलत आंकड़ा)</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"2020 चुनाव में बड़े पैमाने पर धांधली हुई"</td>
          <td class="p-3">60+ अदालतों द्वारा खारिज; अपनी ही सरकार की CISA व अटॉर्नी जनरल विलियम बार ने धांधली से इनकार किया।</td>
          <td class="p-3 text-red-600 font-bold">UNSUPPORTED (निराधार)</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"हमारे पास गोला-बारूद का अथाह भंडार है" (UN 2026)</td>
          <td class="p-3">AP व रक्षा विश्लेषक: ईरान युद्ध के चलते पैट्रियट मिसाइल इंटरसेप्टर्स का स्टॉक 'गंभीर संकट' के स्तर पर है।</td>
          <td class="p-3 text-red-600 font-bold">CONTRADICTED (विरोधाभासी)</td>
        </tr>
        <tr class="hover:bg-slate-50">
          <td class="p-3 font-semibold">"अकेले 8 अंतरराष्ट्रीय युद्ध समाप्त कराए"</td>
          <td class="p-3">कई घटनाएं सीमा झड़पें थीं; भारत ने LoC समझौते में अमेरिकी मध्यस्थता को सिरे से खारिज किया।</td>
          <td class="p-3 text-amber-600 font-bold">EXAGGERATED (अतिशयोक्ति)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- SECTION 8 -->
<div class="my-10 p-6 bg-slate-50 border-l-4 border-gray-600 rounded-r-2xl shadow-sm">
  <h2 class="text-2xl font-bold text-gray-900 mb-3">8. व्हाइट हाउस और ट्रंप प्रशासन का पक्ष (Right of Reply)</h2>
  <p class="text-gray-700 leading-relaxed mb-3">
    ट्रंप प्रशासन ऐसे सभी फैक्ट-चेक्स को राजनीतिक रूप से प्रेरित "फेक न्यूज़" करार देता है। प्रशासन का तर्क है कि टैरिफ से घरेलू उद्योगों को सुरक्षा मिलती है और अरबों डॉलर का सीमा शुल्क राजस्व एकत्र होता है। वहीं विदेश नीति में आक्रामक भाषा और ईरान को धमकियों को प्रशासन "शांति के लिए शक्ति" (Peace Through Strength) की कूटनीति के रूप में उचित ठहराता है।
  </p>
</div>

<!-- CONCLUSION -->
<div class="my-12 p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl shadow-xl">
  <h3 class="text-2xl font-bold mb-4 font-serif text-emerald-300">संपादकीय दृष्टिकोण: तथ्यों की स्वायत्तता</h3>
  <p class="leading-relaxed text-slate-200 mb-4 text-base md:text-lg">
    किसी भी राजनेता को अपनी पसंद-नापसंद के चश्मे से देखना जनमत का हिस्सा हो सकता है। लेकिन दावों और तथ्यों के अंतर को दस्तावेजी रूप से सामने रखना निष्पक्ष पत्रकारिता का दायित्व है। जब अदालती फैसले, आर्थिक आंकड़े और आधिकारिक अभिलेख सार्वजनिक बयानों से मेल नहीं खाते, तो पाठकों को हमेशा तीन कसौटियों पर सोचना चाहिए: <strong>स्रोत क्या है? आंकड़ा कहाँ से आया? और क्या इसे स्वतंत्र रूप से परखा गया है?</strong>
  </p>
</div>

<hr class="my-8 border-gray-200" />
<h3 class="text-xl font-bold text-gray-900 mb-4">मुख्य बिंदु एवं अक्सर पूछे जाने वाले सवाल (FAQ)</h3>
<div class="space-y-4 mb-6">
  <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <p class="font-bold text-gray-900">Q1. ट्रंप के कितने दावे false या misleading पाए गए?</p>
    <p class="text-gray-700 text-sm mt-1">Washington Post के Fact Checker ने उनके पहले कार्यकाल (2017–2021) में 30,573 झूठे या भ्रामक दावों का दस्तावेजी रिकॉर्ड बनाया।</p>
  </div>
  <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <p class="font-bold text-gray-900">Q2. क्या 2020 चुनाव में धांधली का कोई कानूनी प्रमाण मिला?</p>
    <p class="text-gray-700 text-sm mt-1">नहीं। CISA, तत्कालीन अटॉर्नी जनरल विलियम बार और 60 से अधिक अदालत फैसलों ने धांधली के दावों को सबूतों के अभाव में खारिज किया।</p>
  </div>
  <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
    <p class="font-bold text-gray-900">Q3. टैरिफ का आर्थिक भार कौन उठाता है?</p>
    <p class="text-gray-700 text-sm mt-1">फेडरल रिजर्व और NBER के अर्थशास्त्रीय शोध के अनुसार आयात शुल्क का लगभग 100% भार अमेरिकी कंपनियों और आम उपभोक्ताओं पर पड़ता है।</p>
  </div>
</div>
<p class="text-xs text-gray-500 pt-3 border-t"><strong>SEO Keywords:</strong> Donald Trump fact check, Trump 30573 claims, Trump false claims hindi, Trump UN speech 2026, Trump Iran threat, Trump tariffs fact check, Greenland security agreement.</p>`,
  categoryId: "c2", // International
  imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1200",
  author: AUTHOR_HI,
  date: "2026-09-26T04:15:00Z",
  readTime: "12 मिनट",
  featured: false,
  trending: true
};

const new_breaking_en = [
  "Global Investigation: Auditing 30,573 False Claims, Tariff Mathematics, and UN Speech Rhetoric...",
  "US-Denmark-Greenland Security Pact: New Arctic Defense Agreement Signed at UNGA...",
];

const new_breaking_hi = [
  "वैश्विक अन्वेषण: डोनाल्ड ट्रंप के 30,573 झूठे दावों, टैरिफ अर्थशास्त्र और UN भाषण का विस्तृत ऑडिट...",
  "ग्रीनलैंड-डेनमार्क-अमेरिका सुरक्षा समझौता: संप्रभुता की पुष्टि के साथ नए रक्षा करार पर हस्ताक्षर...",
];

console.log('Reading src/lib/data.ts...');
let dataContent = fs.readFileSync(DATA_FILE, 'utf8');

// 1. Insert into articles_en
const enTarget = 'export const articles_en: Article[] = [';
const enIndex = dataContent.indexOf(enTarget);
if (enIndex === -1) {
  throw new Error('Could not find articles_en in data.ts');
}

const enInsert = '\n  ' + JSON.stringify(article_en, null, 2).replace(/\n/g, '\n  ') + ',';
dataContent = dataContent.slice(0, enIndex + enTarget.length) + enInsert + dataContent.slice(enIndex + enTarget.length);

// 2. Insert into articles_hi
const hiTarget = 'export const articles_hi: Article[] = [';
const hiIndex = dataContent.indexOf(hiTarget);
if (hiIndex === -1) {
  throw new Error('Could not find articles_hi in data.ts');
}

const hiInsert = '\n  ' + JSON.stringify(article_hi, null, 2).replace(/\n/g, '\n  ') + ',';
dataContent = dataContent.slice(0, hiIndex + hiTarget.length) + hiInsert + dataContent.slice(hiIndex + hiTarget.length);

// 3. Insert breaking news
const bEnTarget = 'export const breakingNews_en = [';
const bEnIndex = dataContent.indexOf(bEnTarget);
if (bEnIndex !== -1) {
  const bEnInsert = '\n' + new_breaking_en.map(b => '  ' + JSON.stringify(b) + ',').join('\n');
  dataContent = dataContent.slice(0, bEnIndex + bEnTarget.length) + bEnInsert + dataContent.slice(bEnIndex + bEnTarget.length);
}

const bHiTarget = 'export const breakingNews_hi = [';
const bHiIndex = dataContent.indexOf(bHiTarget);
if (bHiIndex !== -1) {
  const bHiInsert = '\n' + new_breaking_hi.map(b => '  ' + JSON.stringify(b) + ',').join('\n');
  dataContent = dataContent.slice(0, bHiIndex + bHiTarget.length) + bHiInsert + dataContent.slice(bHiIndex + bHiTarget.length);
}

console.log('Writing updated src/lib/data.ts...');
fs.writeFileSync(DATA_FILE, dataContent, 'utf8');
console.log('Successfully updated src/lib/data.ts with Trump investigation in both English and Hindi!');

// 4. Update src/store/adminArticles.ts
console.log('Updating src/store/adminArticles.ts...');
let adminContent = fs.readFileSync(ADMIN_FILE, 'utf8');
const adminTarget = 'const INITIAL_ARTICLES: AdminArticle[] = [';
const adminIndex = adminContent.indexOf(adminTarget);
if (adminIndex !== -1) {
  const adminEntry = {
    ...article_en,
    status: 'published',
    tags: ['c2', 'international', 'politics', 'fact-check', 'investigation', 'trump'],
    commentsEnabled: true,
    views: 34200
  };
  const adminInsert = '\n  ' + JSON.stringify(adminEntry, null, 2).replace(/\n/g, '\n  ') + ',';
  adminContent = adminContent.slice(0, adminIndex + adminTarget.length) + adminInsert + adminContent.slice(adminIndex + adminTarget.length);
  fs.writeFileSync(ADMIN_FILE, adminContent, 'utf8');
  console.log('Successfully updated adminArticles.ts!');
}
