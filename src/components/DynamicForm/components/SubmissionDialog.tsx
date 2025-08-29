import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { useMemo } from "react";

type Props = {
  open: boolean;
  data: unknown;
  title?: string;
  onClose: () => void;
};

export default function SubmissionDialog({
  open,
  data,
  title = "Submitted Data",
  onClose,
}: Props) {
  const pretty = useMemo(() => JSON.stringify(data ?? {}, null, 2), [data]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pretty);
    } catch {
      /* ignore */
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <Box
          component="pre"
          sx={{
            m: 0,
            fontSize: 12,
            lineHeight: 1.5,
            bgcolor: "grey.100",
            p: 1.5,
            borderRadius: 1,
            maxHeight: 360,
            overflow: "auto",
          }}
        >
          {pretty}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={copy}>Copy JSON</Button>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
