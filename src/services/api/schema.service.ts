import axios from "axios";
import type { IncomingSection } from "../../types/schema";

const SCHEMA_URL = import.meta.env.VITE_SCHEMA_URL as string | undefined;

export async function getSchema(): Promise<IncomingSection[]> {
  if (!SCHEMA_URL) {
    throw new Error(
      "Missing VITE_SCHEMA_URL. Create .env.local/production and restart."
    );
  }

  const res = await axios.get(SCHEMA_URL, {
    headers: { Accept: "application/json" },
  });
  const data = res?.data;

  if (!Array.isArray(data)) {
    throw new Error("Unexpected schema format: expected an array.");
  }

  return data as IncomingSection[];
}
