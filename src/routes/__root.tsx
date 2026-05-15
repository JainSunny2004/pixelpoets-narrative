import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Off-frame</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for isn't in this reel.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-foreground">Something cut off</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message || "Please try again."}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-sm bg-accent px-5 py-3 text-sm font-medium text-accent-foreground hover:bg-accent-hover"
          >
            Try again
          </button>
          <a href="/" className="rounded-sm border border-border px-5 py-3 text-sm hover:bg-surface-2">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PixelPoets Productions — Cinematic Brand Storytelling" },
      { name: "description", content: "A creative agency for visual storytelling — brand films, AI ads, virtual tours, and corporate documentaries." },
      { name: "author", content: "PixelPoets Productions" },
      { property: "og:title", content: "PixelPoets Productions" },
      { property: "og:description", content: "Every Brand Has a Story. We Make the World Feel It." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PixelPoets Productions" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0e0d0b" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://api.fontshare.com" },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=boska@400,500,700,400i&f[]=satoshi@300,400,500,700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "PixelPoets Productions",
          url: "/",
          email: "hello@pixelpoets.in",
          telephone: "+91-9211969156",
          sameAs: [
            "https://instagram.com/pixelpoetsproductions",
            "https://youtube.com/@pixelpoetsproductions",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="pt-0">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
