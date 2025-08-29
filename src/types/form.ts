import type { IncomingField } from "./schema";

export type {
  IncomingField,
  IncomingSection,
  IncomingFieldType,
  OptionKV,
  RuleToggle,
  RuleNumber,
  RuleRegex,
} from "./schema";

export type DerivedField = IncomingField & { name: string };
export type DerivedSection = { title: string; fields: DerivedField[] };
export type FormValues = Record<string, string | number | boolean | null>;
