import { Container, Box, Typography } from "@mui/material";
import LoadingSchema from "./components/LoadingSchema";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          SQLink Digital Form Rendering
        </Typography>
        <Typography variant="body2">
          This app renders a form from a JSON schema. Validation is per schema
          rules.
        </Typography>

        <LoadingSchema />
      </Box>
    </Container>
  );
}
