import type { StackbitConfig } from "@stackbit/types";
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new GitContentSource({
      rootDir: "content",      // répertoire éditable
      contentDirs: ["."],      // scanne tout sous /content
      models: "*"              // laisse Netlify détecter les modèles
    })
  ],
  siteMap: () => ([
    { model: "PageLayout", urlPath: "/" },
    { model: "PageLayout", urlPath: "/{slug}" },
    { model: "PostLayout", urlPath: "/blog/{slug}" }
  ])
}) satisfies StackbitConfig;
