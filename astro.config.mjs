import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const normalizeBase = (value = "/") => {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "/";
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
};

const base = normalizeBase(process.env.BASE_PATH ?? "/");
const site = process.env.SITE_URL ?? "http://localhost:4321";
const { LABSITE_URL } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "LABSITE_URL",
);
const labsiteUrl = LABSITE_URL?.trim();
const allowedHosts = labsiteUrl
  ? [
      new URL(labsiteUrl.includes("://") ? labsiteUrl : `https://${labsiteUrl}`)
        .hostname,
    ]
  : [];

export default defineConfig({
  output: "static",
  site,
  base,
  vite: {
    server: { allowedHosts },
  },
});
