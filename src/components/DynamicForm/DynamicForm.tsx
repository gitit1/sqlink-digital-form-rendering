import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Paper, Stack, Tooltip } from "@mui/material";
import type { FormValues } from "../../types/form";

import { buildDefaultValues } from "../../utils/DynamicForm/helpers";
import { useDerivedSections } from "../../hooks/DynamicForm/useDerivedSections";
import SectionsRenderer from "./components/SectionsRenderer";
import SubmissionDialog from "./components/SubmissionDialog";
import { useSchema } from "../../hooks/useSchema";
import LoadingSchema from "../LoadingSchema";

export default function DynamicForm() {
  const { schema, loading, error, refetch } = useSchema();

  const sections = useDerivedSections(schema ?? []);
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
      {loading && (
        <Box sx={{ mb: 2, maxWidth: 860, mx: "auto" }}>
          <LoadingSchema
            loading={loading}
            error={error}
            schema={schema}
            refetch={refetch}
          />
        </Box>
      )}
      {!loading && schema && (
        <Paper variant="outlined" sx={{ maxWidth: 860, mx: "auto" }}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={3}>
              <SectionsRenderer sections={sections} control={control} />

              <Box
                sx={{
                  position: { sm: "static", md: "sticky" },
                  bottom: 0,
                  zIndex: 1,
                  bgcolor: "background.paper",
                  pt: 1,
                  borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
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
                      sx={{ mt: 1 }}
                    >
                      Submit
                    </Button>
                  </span>
                </Tooltip>
              </Box>
            </Stack>
          </Box>
        </Paper>
      )}

      <SubmissionDialog
        open={open}
        data={submitted}
        title="Submitted Data"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
