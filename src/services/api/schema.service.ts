import axios from "axios";
import type { IncomingSection } from "../../types/schema";

function isFormArray(x: unknown): x is IncomingSection[] {
  return (
    Array.isArray(x) && x.every((sec) => Array.isArray((sec as any)?.fields))
  );
}

const SCHEMA_URL = import.meta.env.VITE_SCHEMA_URL as string | undefined;

export async function getSchema(): Promise<IncomingSection[]> {
  if (!SCHEMA_URL) {
    throw new Error(
      "Missing VITE_SCHEMA_URL. Create .env.local with VITE_SCHEMA_URL=... and restart dev server."
    );
  }

  try {
    const res = await axios.get(SCHEMA_URL, {
      headers: { Accept: "application/json" },
    });
    const data = res?.data;

    if (!isFormArray(data)) {
      throw new Error(
        "Unexpected schema format: expected an array of sections with fields[]"
      );
    }

    return data;
  } catch (err: any) {
    const message =
      err?.response?.data?.message ?? err?.message ?? "Failed to fetch schema.";
    throw new Error(message);
  }
}
