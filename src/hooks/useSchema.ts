import { useCallback, useEffect, useState } from "react";
import { getSchema } from "../services/api/schema.service";
import type { IncomingSection } from "../types/schema";

export function useSchema() {
  const [schema, setSchema] = useState<IncomingSection[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getSchema();
      setSchema(data);
    } catch (e: any) {
      setError(e?.message ?? "Failed to fetch schema");
      setSchema(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { schema, loading, error, refetch };
}
