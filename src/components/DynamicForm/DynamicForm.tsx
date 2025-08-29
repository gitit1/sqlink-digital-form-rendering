// src/components/DynamicForm/index.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Typography, Tooltip } from "@mui/material";
import type { FormProps, FormValues } from "../../types/form";

import { buildDefaultValues } from "../../utils/DynamicForm/helpers";
import { useDerivedSections } from "../../hooks/DynamicForm/useDerivedSections";
import SectionsRenderer from "./components/SectionsRenderer";
import SubmissionDialog from "./components/SubmissionDialog"; // NEW

export default function DynamicForm({ schema }: FormProps) {
  const sections = useDerivedSections(schema);
  const defaultValues = buildDefaultValues(sections);

  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues,
    mode: "onChange",
    criteriaMode: "all",
  });

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const onSubmit = (data: FormValues) => {
    setSubmitted(data);
    setOpen(true);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <SectionsRenderer sections={sections} control={control} />

        <Tooltip
          title="Fill all fields according to the rules to enable submit."
          placement="top"
          arrow
          disableHoverListener={formState.isValid}
          disableFocusListener={formState.isValid}
          disableTouchListener={formState.isValid}
          enterTouchDelay={0}
        >
          <span style={{ display: "inline-block" }}>
            <Button
              variant="contained"
              type="submit"
              disabled={!formState.isValid}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </span>
        </Tooltip>
      </Box>

      <SubmissionDialog
        open={open}
        data={submitted}
        title="Submitted Data"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
