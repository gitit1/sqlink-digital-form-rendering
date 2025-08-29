import { Container, Box, Typography } from "@mui/material";
import DynamicForm from "./components/DynamicForm/DynamicForm";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1" align="center" component="h1" gutterBottom>
          SQLink Digital Form Rendering
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          This app renders a form from a JSON schema. Validation is per schema
          rules.
        </Typography>
        <DynamicForm />
      </Box>
    </Container>
  );
}
