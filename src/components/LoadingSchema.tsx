import { Alert, Button, Paper, Typography } from "@mui/material";
import { useSchema } from "../hooks/useSchema";

export default function LoadingSchema() {
  const { schema, loading, error, refetch } = useSchema();
  const hasSchema = schema != null;

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      {loading && (
        <Typography variant="body1" color="text.secondary">
          Loading schema…
        </Typography>
      )}

      {!loading && error && (
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={refetch}>
              Retry
            </Button>
          }
        >
          {error}
        </Alert>
      )}

      {!loading && !error && hasSchema && (
        <Typography variant="h6">Schema loaded</Typography>
      )}
    </Paper>
  );
}
