import {
  Alert,
  Button,
  Paper,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import type { IncomingSection } from "../types/schema";

type LoadingSchemaProps = {
  loading: boolean;
  error: string | null;
  schema: IncomingSection[] | null;
  refetch: () => void;
};

export default function LoadingSchema({
  loading,
  error,
  schema,
  refetch,
}: LoadingSchemaProps) {
  const hasSchema = schema != null;

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress size={40} />
      </Box>
    );
  }

  if (error) {
    return (
      <Paper variant="outlined">
        <Alert
          severity="error"
          sx={{ textAlign: "center" }}
          action={
            <Button color="inherit" size="small" onClick={refetch}>
              Retry
            </Button>
          }
        >
          {error}
        </Alert>
      </Paper>
    );
  }

  if (hasSchema) {
    return (
      <Paper variant="outlined">
        <Typography variant="h6" align="center">
          Schema loaded
        </Typography>
      </Paper>
    );
  }

  return null;
}
