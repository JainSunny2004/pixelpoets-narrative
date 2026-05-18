// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// VERCEL=1 is automatically set in Vercel's build environment. When present we
// switch the TanStack Start adapter to the Vercel preset and disable the
// Cloudflare Workers plugin. Local dev and the Lovable sandbox preview keep
// the default Cloudflare-based build.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  tanstackStart: isVercel
    ? { target: "vercel" }
    : { server: { entry: "server" } },
});
