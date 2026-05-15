import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getInsight, insights } from "@/lib/site-data";

export const Route = createFileRoute("/insights_/$slug")({
  loader: ({ params }) => {
    const post = getInsight(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Article — PixelPoets" }] };
    return {
      meta: [
        { title: `${p.title} — PixelPoets` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
        { property: "og:image", content: `https://picsum.photos/seed/${p.imageSeed}/1200/630` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          datePublished: p.date,
          author: { "@type": "Organization", name: "PixelPoets Team" },
          image: `https://picsum.photos/seed/${p.imageSeed}/1200/630`,
        }),
      }],
    };
  },
  component: InsightDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="font-display text-5xl">Article not found</h1>
        <Link to="/insights" className="inline-flex items-center gap-2 mt-6 text-accent">All insights <ArrowRight size={16} /></Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <p>{error.message}</p>
    </div>
  ),
});

function InsightDetail() {
  const { post } = Route.useLoaderData();
  const related = insights.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <article className="pt-32">
        <header className="mx-auto max-w-3xl px-6">
          <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-faint">
            <Link to="/insights" className="hover:text-accent">Insights</Link>
            <ChevronRight size={12} />
            <span>{post.category}</span>
          </nav>
          <Reveal>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.02] mt-8">{post.title}</h1>
            <div className="flex items-center gap-3 mt-8 text-sm text-muted-foreground">
              <span>By PixelPoets Team</span><span className="text-faint">·</span>
              <span>{post.date}</span><span className="text-faint">·</span>
              <span>{post.readTime}</span>
            </div>
          </Reveal>
        </header>

        <div className="mx-auto max-w-5xl px-6 mt-12">
          <div className="aspect-[16/9] overflow-hidden bg-surface">
            <img
              src={`https://picsum.photos/seed/${post.imageSeed}/1400/780`}
              alt={post.title}
              loading="lazy"
              width={1400}
              height={780}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 mt-16 pb-20">
          <p className="font-display italic text-2xl text-foreground/85 leading-snug border-l-2 border-accent pl-6">
            {post.excerpt}
          </p>
          <div className="mt-12 space-y-7 text-foreground/85 text-lg leading-[1.75]">
            {post.body.map((para: string, i: number) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </article>

      <section className="bg-surface border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-8">Keep Reading</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} to="/insights/$slug" params={{ slug: p.slug }} className="group block">
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={`https://picsum.photos/seed/${p.imageSeed}/600/450`}
                    alt={p.title}
                    loading="lazy"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="font-display text-xl mt-4 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-xs text-faint mt-2 uppercase tracking-[0.18em]">{p.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
