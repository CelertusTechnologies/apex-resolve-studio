import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const tanstackStartDefaults = {
  importProtection: {
    behavior: "error" as const,
    client: {
      files: ["**/server/**"],
      specifiers: ["server-only"],
    },
  },
};

export default defineConfig(({ command }) =>
  mergeConfig(
    {
      ...(command === "serve"
        ? { logLevel: "error" as const, clearScreen: false }
        : {}),

      resolve: {
        alias: { "@": `${process.cwd()}/src` },
        dedupe: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "react/jsx-dev-runtime",
          "@tanstack/react-query",
          "@tanstack/query-core",
        ],
      },

      plugins: [
        tailwindcss(),
        tsconfigPaths({ projects: ["./tsconfig.json"] }),

        ...(command === "build"
          ? [
              cloudflare({
                viteEnvironment: { name: "ssr" },
              }),
            ]
          : []),

        tanstackStart(
          mergeConfig(tanstackStartDefaults, {
            server: { entry: "server" },
          }),
        ),

        react(),
      ],

      server: {
        host: "0.0.0.0",
        port: 4173,
      },

      preview: {
        host: "0.0.0.0",
        port: 4173,
        strictPort: true,
        allowedHosts: ["apex.celertus.com"],
      },
    },

    {},
  ),
);
