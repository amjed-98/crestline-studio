export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function toneClassName(tone: "olive" | "rust" | "amber" | "stone") {
  switch (tone) {
    case "olive":
      return "bg-olive/20 text-olive";
    case "rust":
      return "bg-rust/20 text-rust";
    case "amber":
      return "bg-accent/18 text-accent-deep";
    default:
      return "bg-stone-soft text-ink";
  }
}
