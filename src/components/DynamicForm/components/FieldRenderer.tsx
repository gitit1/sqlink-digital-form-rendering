import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";
import type { TextFieldProps } from "@mui/material/TextField";
import type { DerivedField, FormValues } from "../../../types/form";

type Props = {
  field: DerivedField;
  control: Control<FormValues>;
  rules: RegisterOptions<FormValues, string>;
};

export default function FieldRenderer({ field: f, control, rules }: Props) {
  const isSelect = f.type === "select";
  const isNumber = f.type === "input_number";
  const isTextarea = f.type === "textarea";
  // spec-aligned: keep "input" as plain text (no extra email type)

  return (
    <Controller
      name={f.name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => {
        const tfProps: TextFieldProps = {
          label: f.label || f.name,
          value: field.value ?? "",
          onChange: field.onChange,
          onBlur: field.onBlur,
          fullWidth: true,
          margin: "normal",
          error: !!fieldState.error,
          helperText: fieldState.error?.message,
          select: isSelect,
          type: isNumber ? "number" : "text",
          multiline: isTextarea,
          minRows: isTextarea ? 4 : undefined,
          slotProps: isNumber ? { input: { inputMode: "numeric" } } : undefined,
        };

        return (
          <TextField {...tfProps}>
            {isSelect &&
              (f.options ?? []).map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.key}
                </MenuItem>
              ))}
          </TextField>
        );
      }}
    />
  );
}
