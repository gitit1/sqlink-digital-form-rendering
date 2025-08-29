// src/services/api/schema.service.ts
import axios from "axios";

export type ApiSchema = unknown;

const SCHEMA_URL = import.meta.env.VITE_SCHEMA_URL as string | undefined;

export async function getSchema(): Promise<ApiSchema> {
  if (!SCHEMA_URL) {
    throw new Error(
      "Missing VITE_SCHEMA_URL. Create .env with VITE_SCHEMA_URL=... and restart dev server."
    );
  }

  try {
    const res = await axios.get(SCHEMA_URL, {
      headers: { Accept: "application/json" },
    });

    if (!res || typeof res.data === "undefined" || res.data === null) {
      throw new Error("Empty schema response.");
    }

    return res.data as ApiSchema;
  } catch (err: any) {
    const message =
      err?.response?.data?.message ?? err?.message ?? "Failed to fetch schema.";
    throw new Error(message);
  }
}
