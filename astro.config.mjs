import { defineConfig } from "astro/config";

const normalizeBase = (value = "/") => {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "/";
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
};

const base = normalizeBase(process.env.BASE_PATH ?? "/");
const site = process.env.SITE_URL ?? "http://localhost:4321";

export default defineConfig({
  output: "static",
  site,
  base,
});
