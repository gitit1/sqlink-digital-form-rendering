import { useMemo } from "react";
import { keyFromLabel } from "../../utils/DynamicForm/helpers";
import type { IncomingSection } from "../../types/schema";
import type { DerivedField, DerivedSection } from "../../types/form";

export function useDerivedSections(
  schema: IncomingSection[]
): DerivedSection[] {
  return useMemo(() => {
    return schema.map((sec, sIdx) => {
      const title = sec.title?.trim() ? sec.title! : `Section ${sIdx + 1}`;
      const fields: DerivedField[] = (
        Array.isArray(sec.fields) ? sec.fields : []
      ).map((f, fIdx) => ({ ...f, name: keyFromLabel(sIdx, fIdx, f.label) }));
      return { title, fields };
    });
  }, [schema]);
}
