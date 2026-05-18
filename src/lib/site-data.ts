export type ServiceSlug = "ai-ads" | "virtual-tours" | "reels-shorts" | "corporate-documentaries";

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  tagline: string;
  description: string;
  deliverables: string[];
  differentiators: { title: string; body: string }[];
  heroVideo: string;
  heroPoster: string;
}

export const services: Service[] = [
  {
    slug: "ai-ads",
    name: "AI Ads",
    short: "Hyper-personalized creative, engineered to convert.",
    tagline: "Next-generation advertising powered by AI — hyper-personalized, conversion-focused, visually stunning.",
    description:
      "We blend AI-driven creative with sharp performance thinking. From concept to variant, every frame is engineered to earn attention and move metrics — without losing the soul of the story.",
    deliverables: [
      "AI-generated video ads for Meta, YouTube, and programmatic",
      "Dynamic ad creatives tailored to audience segments",
      "Performance-optimised visuals with platform-native pacing",
      "A/B test variant systems built at scale",
    ],
    differentiators: [
      { title: "Story over spectacle", body: "AI is a brush, not the painter. Every ad starts with a narrative beat." },
      { title: "Built for the funnel", body: "Hooks, holds, and CTAs designed against your conversion data." },
      { title: "Variants at scale", body: "Dozens of cuts from one shoot — no compromise on craft." },
    ],
  },
  {
    slug: "virtual-tours",
    name: "Virtual Tours",
    short: "Immersive 360° experiences worth stepping into.",
    tagline: "Immersive 360° experiences that let your audience step inside your world.",
    description:
      "We capture spaces with the eye of a cinematographer and the precision of a spatial engineer. Hospitality suites, campuses, properties, retail — rendered as living, navigable rooms on the open web.",
    deliverables: [
      "360° property, campus, and hospitality tours",
      "Interactive hotspots with rich media overlays",
      "Web-embeddable experiences — no plugin required",
      "VR-ready output for Quest, Vision, and beyond",
    ],
    differentiators: [
      { title: "Cinematic capture", body: "Lit, composed, and graded like a film — not a real-estate listing." },
      { title: "Frictionless on the web", body: "Loads in a tab. Works on a phone. Looks premium everywhere." },
      { title: "Narrative wayfinding", body: "Guided arcs that lead visitors through a story, not just a floor plan." },
    ],
  },
  {
    slug: "reels-shorts",
    name: "Reels & Shorts",
    short: "Short-form with a narrative spine.",
    tagline: "Short-form doesn't mean low-impact. We build narrative arcs into every reel.",
    description:
      "We treat a fifteen-second reel like a fifteen-minute film — beats, tension, payoff. The result is short-form content that doesn't just stop the thumb, it stays in the mind.",
    deliverables: [
      "Instagram and YouTube Reels with narrative pacing",
      "Episodic series for sustained brand memory",
      "Food, travel, and lifestyle storytelling packages",
      "Thumb-stop hooks engineered around platform behaviour",
    ],
    differentiators: [
      { title: "Frame one matters", body: "Hooks crafted by editors who studied feature openings." },
      { title: "Series, not singles", body: "Episodic worlds that compound attention across weeks." },
      { title: "Sound-first cuts", body: "We treat audio as a co-lead, not a layer." },
    ],
  },
  {
    slug: "corporate-documentaries",
    name: "Corporate Documentaries",
    short: "Long-form films that capture a company's truth.",
    tagline: "Long-form films that capture a company's truth, founders, and culture.",
    description:
      "We make documentaries about the institutions building the future — and the people inside them. Founders, factories, classrooms, kitchens. The result is a film your team will quote back to you for years.",
    deliverables: [
      "Founder and origin documentaries",
      "Culture and team films for hiring and retention",
      "Institutional showcases for campuses and hospitality",
      "Premium production with full post-production craft",
    ],
    differentiators: [
      { title: "Earned interviews", body: "We sit long enough that the real story finds its way in." },
      { title: "Editorial restraint", body: "No b-roll filler. Every cut earns its place in the arc." },
      { title: "Built to live forever", body: "Films designed for keynotes, recruiting, and the next decade of you." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export interface WorkItem {
  id: string;
  client: string;
  title: string;
  category: ServiceSlug;
  categoryLabel: string;
  result: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  imageSeed: string;
}

export const work: WorkItem[] = [
  { id: "w1", client: "Aurelia Hotels", title: "A Suite You Can Step Into", category: "virtual-tours", categoryLabel: "Virtual Tours", result: "+38% direct bookings in 60 days", challenge: "A boutique chain whose suites felt better than any photo could prove.", approach: "Cinematic 360° capture with golden-hour lighting and narrated wayfinding.", deliverables: ["8 suite tours", "Lobby + spa walkthroughs", "Web embed for booking funnel"], imageSeed: "cinema" },
  { id: "w2", client: "Halcyon Foods", title: "Founders, Without the Pitch", category: "corporate-documentaries", categoryLabel: "Documentary", result: "Used at every investor meeting since", challenge: "A founder story that kept sounding like a deck.", approach: "Three-day shoot, one long interview, zero scripted lines.", deliverables: ["12-min documentary", "90-sec sizzle", "Five social cutdowns"], imageSeed: "story" },
  { id: "w3", client: "Northbeam EV", title: "The Algorithm Wears a Cape", category: "ai-ads", categoryLabel: "AI Ads", result: "2.4× CTR vs. previous quarter", challenge: "Six audience segments, four geographies, one launch week.", approach: "AI-assisted creative system with 40 cinematic variants from a single brand film.", deliverables: ["Master film", "40 variant ads", "Live A/B framework"], imageSeed: "film" },
  { id: "w4", client: "Saanjh Café", title: "A Recipe in Six Cuts", category: "reels-shorts", categoryLabel: "Reels", result: "1.2M organic views in week one", challenge: "A neighbourhood café that wanted to feel inevitable on the feed.", approach: "Episodic six-part reel arc shot in a single afternoon.", deliverables: ["6 reels", "Behind-the-pass shorts", "Sound design suite"], imageSeed: "brand" },
  { id: "w5", client: "Meridian School", title: "A Campus in Four Movements", category: "virtual-tours", categoryLabel: "Virtual Tours", result: "Used in every admissions tour", challenge: "Parents who couldn't visit, choosing between five schools.", approach: "Immersive 360° tour with student-narrated wayfinding hotspots.", deliverables: ["Full campus tour", "Embedded admissions site", "VR build for open day"], imageSeed: "studio" },
  { id: "w6", client: "Kavi Studios", title: "An Origin Worth Sitting With", category: "corporate-documentaries", categoryLabel: "Documentary", result: "Anchor film of their 10-year keynote", challenge: "Ten years of work, one half-hour to honour it.", approach: "Archive-led edit with newly shot interviews across three cities.", deliverables: ["28-min documentary", "Trailer", "Five chapter cutdowns"], imageSeed: "creative" },
  { id: "w7", client: "Lume Skincare", title: "Six Hooks, One Bottle", category: "ai-ads", categoryLabel: "AI Ads", result: "ROAS lifted from 1.8 to 4.1", challenge: "A SKU launch with no time for a full campaign.", approach: "AI variant engine producing six narrative-led ads per week.", deliverables: ["Always-on creative engine", "Weekly variant drops", "Performance dashboard"], imageSeed: "production" },
  { id: "w8", client: "Tide & Pine Travel", title: "A Coast in Fifteen Seconds", category: "reels-shorts", categoryLabel: "Reels", result: "Booked out the season in three weeks", challenge: "Selling a remote stay to people scrolling on a Tuesday.", approach: "Sound-first reel series with cinematic colour and earned moments.", deliverables: ["10 reels", "Trailer cut", "Soundtrack licence package"], imageSeed: "visual" },
];

export interface Insight {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  imageSeed: string;
  body: string[];
}

export const insights: Insight[] = [
  {
    slug: "brand-film-not-just-an-ad",
    title: "Why Your Brand Needs a Film, Not Just an Ad",
    category: "Brand Films",
    date: "Mar 14, 2026",
    readTime: "6 min read",
    excerpt: "Ads interrupt. Films are remembered. Here's the case for treating your next launch like a feature.",
    imageSeed: "cinema",
    body: [
      "There is a difference between an audience that watches and an audience that quotes you back. Ads — even great ones — live in the first category. Films live in the second.",
      "A brand film is not a longer ad. It is a different artefact entirely: one that earns the right to be remembered by behaving like a story rather than a sales document.",
      "The companies treating film as a foundational asset aren't doing it because they like the genre. They're doing it because the math works: a well-made brand film gets watched, reshared, and re-cut into ads, sales decks, hiring pages, and keynote opens for years.",
      "If you're commissioning a film this year, the question isn't 'how long should it be?' — it's 'what truth about us is worth twelve minutes of someone's life?' Start there, and the rest follows.",
    ],
  },
  {
    slug: "founder-story-without-the-pitch",
    title: "The Art of the Founder Story: Telling It Without Sounding Like a Pitch",
    category: "Documentaries",
    date: "Feb 22, 2026",
    readTime: "7 min read",
    excerpt: "Founder films fail in the same three ways. Here's how to sit long enough that the real story shows up.",
    imageSeed: "story",
    body: [
      "Most founder films fail in the first ten seconds, when the founder reaches for the version of the story they've told a hundred times in pitch meetings.",
      "The job of the documentary is to wait. Wait through the polished version, the rehearsed version, the version that ends with a metric. Somewhere on the other side of all of that is the version that actually moved them to start the company.",
      "We've found three rules help: shoot longer than feels comfortable, ask questions that don't have a metric in them, and never let the founder see the question list.",
      "When it works, the film stops being about the company and starts being about a person who happened to build one. That's the version people remember.",
    ],
  },
  {
    slug: "ai-in-advertising-2026",
    title: "AI in Advertising: What It Means for Brands in 2026",
    category: "AI Ads",
    date: "Feb 03, 2026",
    readTime: "5 min read",
    excerpt: "The hype has cooled. The work has started. A practical look at where AI fits in a real creative pipeline.",
    imageSeed: "film",
    body: [
      "The era of AI as a novelty in advertising is over. The era of AI as infrastructure has begun — quietly, and inside the workflows of teams who stopped tweeting about it.",
      "The brands using AI well in 2026 are not using it to replace creative judgement. They're using it to extend it: more variants from one shoot, faster iteration on hooks, more granular personalisation across audiences.",
      "The risk isn't that AI makes ads worse. It's that it makes them faster — and faster, applied to a bad idea, just gets you to the wrong place sooner.",
      "Our rule of thumb: a human writes the story. AI helps it reach more people in more shapes. Reverse that order and the soul drops out.",
    ],
  },
  {
    slug: "virtual-tours-hospitality",
    title: "Virtual Tours Are the New Open House",
    category: "Virtual Tours",
    date: "Jan 18, 2026",
    readTime: "5 min read",
    excerpt: "A practical guide for hospitality and real-estate brands betting on immersive experiences.",
    imageSeed: "studio",
    body: [
      "The brochure photo has done its job for thirty years. It is, finally, no longer enough.",
      "Hospitality buyers — guests, parents, investors — increasingly expect to walk a space before they commit to it. Virtual tours, done with a cinematographer's eye, give them that without asking them to fly in.",
      "The mistake is to treat the tour as a documentation exercise. The opportunity is to treat it as a film: lit, composed, paced, and narrated in a way that earns trust.",
      "The properties getting this right aren't selling rooms. They're selling the feeling of being inside one — and they're doing it before the guest has paid a rupee.",
    ],
  },
  {
    slug: "five-mistakes-brand-films",
    title: "Five Mistakes Brands Make When Commissioning a Brand Film",
    category: "Brand Films",
    date: "Jan 02, 2026",
    readTime: "6 min read",
    excerpt: "After a hundred films, the same five missteps show up. Here's how to avoid them on your next one.",
    imageSeed: "production",
    body: [
      "After enough projects, patterns emerge. The mistakes that derail a brand film are almost never about the camera or the colour grade — they're about decisions made before anyone picked up a lens.",
      "The first is briefing the film by deliverable instead of by belief. 'We need a two-minute video' is not a brief. 'We want our customers to feel that we are the safest pair of hands in our category' is.",
      "The second is too many cooks in the cut. The third is fearing silence. The fourth is over-narration. The fifth — the most expensive one — is shooting without knowing what you'd defend in the final cut.",
      "Get those five right and the rest of the film mostly takes care of itself.",
    ],
  },
  {
    slug: "reel-to-real",
    title: "From Reel to Real: How Episodic Content Builds Brand Trust",
    category: "Reels",
    date: "Dec 12, 2025",
    readTime: "4 min read",
    excerpt: "One reel is a moment. A series is a relationship. Why episodic short-form is the most under-used asset in the playbook.",
    imageSeed: "visual",
    body: [
      "A single reel is a coin toss. A series is a habit. The difference between the two is what separates brands that occasionally trend from brands that compound attention.",
      "Episodic short-form works because it gives the viewer a reason to come back — a character, a question, a recipe, a place — that doesn't exhaust itself in fifteen seconds.",
      "It also lets the brand show up the way real people do: with continuity, taste, and a point of view that develops over time.",
      "If you're treating reels as one-off promos, you're leaving the most valuable thing about the format on the table.",
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Our Work" },
  { to: "/insights", label: "Insights & Blog" },
] as const;
