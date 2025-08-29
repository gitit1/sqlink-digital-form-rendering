import type { RegisterOptions } from "react-hook-form";
import type { FormValues, DerivedField } from "../../types/form";
import { withVal } from "./helpers";

export function buildRules(
  f: DerivedField
): RegisterOptions<FormValues, string> {
  const rules: RegisterOptions<FormValues, string> = {};

  if (f.rules?.required?.value) {
    rules.required = f.rules.required.error_message || "This field is required";
  }

  if (f.type === "input" || f.type === "textarea") {
    // strictly follow schema: min/max as string lengths, and regex
    if (typeof f.rules?.min?.value === "number") {
      rules.minLength = {
        value: f.rules.min.value,
        message:
          withVal(f.rules.min.error_message, f.rules.min.value) ||
          `Min ${f.rules.min.value} characters`,
      };
    }
    if (typeof f.rules?.max?.value === "number") {
      rules.maxLength = {
        value: f.rules.max.value,
        message:
          withVal(f.rules.max.error_message, f.rules.max.value) ||
          `Max ${f.rules.max.value} characters`,
      };
    }
    if (f.rules?.regex?.value) {
      rules.pattern = {
        value: new RegExp(f.rules.regex.value),
        message: f.rules.regex.error_message || "Invalid format",
      };
    }
  } else if (f.type === "input_number") {
    // numbers: min/max numeric; regex if provided
    rules.setValueAs = (v: unknown) =>
      v === "" || v === null || typeof v === "undefined"
        ? undefined
        : Number(v);

    if (typeof f.rules?.min?.value === "number") {
      rules.min = {
        value: f.rules.min.value,
        message:
          withVal(f.rules.min.error_message, f.rules.min.value) ||
          `Min ${f.rules.min.value}`,
      };
    }
    if (typeof f.rules?.max?.value === "number") {
      rules.max = {
        value: f.rules.max.value,
        message:
          withVal(f.rules.max.error_message, f.rules.max.value) ||
          `Max ${f.rules.max.value}`,
      };
    }
    if (f.rules?.regex?.value) {
      rules.pattern = {
        value: new RegExp(f.rules.regex.value),
        message: f.rules.regex.error_message || "Invalid number format",
      };
    }
  }

  return rules;
}
