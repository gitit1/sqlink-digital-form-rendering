import { useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import type { FormProps, FormValues } from "../../types/form";

import { buildDefaultValues } from "../../utils/DynamicForm/helpers";
import { useDerivedSections } from "../../hooks/DynamicForm/useDerivedSections";
import SectionsRenderer from "./components/SectionsRenderer";

export default function FormFromSections({ schema }: FormProps) {
  const sections = useDerivedSections(schema);
  const defaultValues = buildDefaultValues(sections);

  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues,
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-alert
    alert("Submitted:\n" + JSON.stringify(data, null, 2));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <SectionsRenderer sections={sections} control={control} />

      <Button
        variant="contained"
        type="submit"
        disabled={!formState.isValid}
        sx={{ mt: 2 }}
      >
        Submit
      </Button>

      {!formState.isValid && (
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mt: 1 }}
        >
          Fill all fields according to the rules to enable submit.
        </Typography>
      )}
    </Box>
  );
}
