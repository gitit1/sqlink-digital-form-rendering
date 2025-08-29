import type { DerivedSection, FormValues } from "../../types/form";

export function buildDefaultValues(sections: DerivedSection[]): FormValues {
  const d: FormValues = {};
  for (const sec of sections) for (const f of sec.fields) d[f.name] = "";
  return d;
}

export function keyFromLabel(
  sectionIdx: number,
  fieldIdx: number,
  label?: string
) {
  const base = label?.trim().toLowerCase().replace(/\s+/g, "_") || "field";
  return `${base}_${sectionIdx}_${fieldIdx}`;
}

export function withVal(
  msg: string | null | undefined,
  val: number | string
): string | undefined {
  if (!msg || !msg.trim()) return undefined;
  const pattern = /\{\{\s*value\s*\}\}/gi;
  return msg.replace(pattern, String(val)).trim() || undefined;
}
