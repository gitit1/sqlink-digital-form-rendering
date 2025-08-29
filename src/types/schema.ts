export type RuleToggle = {
  value: boolean;
  error_message?: string | null;
} | null;
export type RuleNumber = {
  value: number;
  error_message?: string | null;
} | null;
export type RuleRegex = { value: string; error_message?: string | null } | null;

export type OptionKV = { key: string; value: string };

export type IncomingFieldType =
  | "input"
  | "select"
  | "input_number"
  | "textarea";

export type IncomingField = {
  type: IncomingFieldType;
  label: string;
  options?: OptionKV[];
  rules?: {
    required?: RuleToggle;
    min?: RuleNumber;
    max?: RuleNumber;
    regex?: RuleRegex;
  };
};

export type IncomingSection = {
  title?: string;
  fields: IncomingField[];
};
