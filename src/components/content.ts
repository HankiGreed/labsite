export type EntryLike = {
  data?: Record<string, unknown>;
  slug?: string;
  id?: string;
};

export function valueOf(entry: EntryLike, ...keys: string[]): unknown {
  for (const key of keys) {
    const value = entry.data?.[key];
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return undefined;
}

export function asText(value: unknown, fallback = ""): string {
  if (typeof value === "string" || typeof value === "number")
    return String(value);
  if (Array.isArray(value))
    return value
      .filter(Boolean)
      .map((item) => asText(item))
      .join(", ");
  return fallback;
}

export function imageSrc(value: unknown): string | undefined {
  if (typeof value === "string") return withBase(value);
  if (
    value &&
    typeof value === "object" &&
    "src" in value &&
    typeof value.src === "string"
  ) {
    return withBase(value.src);
  }
  return undefined;
}

export function imageAlt(value: unknown, fallback: string): string {
  if (
    value &&
    typeof value === "object" &&
    "alt" in value &&
    typeof value.alt === "string" &&
    value.alt.trim()
  ) {
    return value.alt;
  }
  return fallback;
}

export function withBase(path = "/"): string {
  if (/^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
}

export function isExternal(path: string): boolean {
  return /^(?:https?:|mailto:|tel:)/i.test(path);
}
