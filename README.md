# SQLink Digital – Form Rendering (Vite + React + TS + MUI + RHF + AJV)

This is a home assignment for SQLink Digital.

A responsive form-rendering app that fetches a **JSON Schema** from an endpoint, renders fields dynamically, validates **only** per-schema rules in real time, and displays submitted data when the form is valid.

---

## Tech Stack

- **Build:** Vite + React + TypeScript
- **UI:** Material UI (MUI)
- **Forms:** React Hook Form (RHF)
- **Validation:** AJV + `@hookform/resolvers/ajv` (+ `ajv-formats` if needed)
- **HTTP:** Axios

---

## High-Level Design (HLD)

### Flow

1. **Fetch schema** from backend endpoint.
2. **Normalize schema** (optional; ensure consistent field shape).
3. **Build field list** from schema (name, type, UI hints, validation rules).
4. **Render** MUI inputs dynamically (TextField, Select, Checkbox, Date, etc.).
5. **Validate** using RHF + AJV **against the JSON Schema** (no extra custom rules).
6. **Show inline errors** in real time (`onChange` / `onBlur`).
7. **Submit** enabled only when the form is valid.
8. **Display submitted JSON** in a MUI Dialog/section.

### Why RHF + AJV?

- Direct validation against **JSON Schema** (no mapping to Yup/Zod).
- Great performance for dynamic forms.
- Full control over layout/UX with MUI components.

### UI/UX & Design

- **MUI Theme:** primary/secondary palette, typography scale, component density.
- Clean, responsive layout; accessible labels and error messages.
- Submit button disabled until the form is valid.

> This is the beginning; with each step we will add more **LLD** details.

---

## Getting Started

```bash
# install
npm install

# dev
npm run dev

# build
npm run build
```

Environment:

- Node 18+
- Add your schema URL to `.env.local` (example):
  ```
  VITE_SCHEMA_URL=https://your-schema-endpoint.example.com/schema
  ```

---

## Spec Compliance Checklist

- [ ] Fetch schema from the provided endpoint.
- [ ] Dynamically render fields from the schema only.
- [ ] Real-time validation per schema rules (required, min/max, pattern/regex, format, enum).
- [ ] Error messages appear next to fields.
- [ ] Submit disabled until all inputs are valid.
- [ ] Submission shows data clearly (Dialog or a dedicated section).
- [ ] No custom field types or extra validations beyond the schema.
- [ ] Clean, intuitive, responsive UI.

---

## Roadmap

- [✅] **Step 1:** UI/theme setup and base layout.
- [✅] **Step 2:** Schema fetch (`axios`), `useSchema` hook, loading/error states.
- [✅] **Step 3:** RHF + wiring; minimal dynamic field renderer.
- [ ] **Step 4:** Submission dialog and disabled-until-valid behavior.
- [ ] **Step 5:** Polish (responsive grid, consistent helper/error text, edge cases).
- [ ] **Step 6:** README updates & cleanup.

---
