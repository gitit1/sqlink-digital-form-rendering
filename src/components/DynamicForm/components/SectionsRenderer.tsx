import { Box, Typography } from "@mui/material";
import type { Control } from "react-hook-form";
import type { DerivedSection, FormValues } from "../../../types/form";
import FieldRenderer from "./FieldRenderer";
import { buildRules } from "../../../utils/DynamicForm/rules";

type Props = {
  sections: DerivedSection[];
  control: Control<FormValues>;
};

export default function SectionsRenderer({ sections, control }: Props) {
  return (
    <>
      {sections.map((sec, idx) => (
        <Box key={idx} sx={{ mb: 2 }}>
          <Typography variant="h5" align="center" sx={{ mb: 2 }}>
            {sec.title}
          </Typography>
          {sec.fields.map((f) => (
            <FieldRenderer
              key={f.name}
              field={f}
              control={control}
              rules={buildRules(f)}
            />
          ))}
        </Box>
      ))}
    </>
  );
}
