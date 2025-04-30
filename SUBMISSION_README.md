# Touring Band Ticket Form

This project implements a simple ticket-purchasing form based on provided JSON data for a fictional band. It allows users to view concert info, select ticket quantities, input basic personal and card data, and simulate form submission via `console.log()` — all in alignment with the provided exercise instructions.

---

## ⚖️ Implementation Notes & Tradeoffs

This take-home was treated as a chance to demonstrate clean component architecture, safe state handling, and testing discipline — not to overengineer the stack for reusability or scale. Below are a few of the tradeoffs made in favor of speed, clarity, or exercise scope:

### No Form Library (e.g., React Hook Form)

The form logic was simple enough that a full abstraction layer wasn't justified. Controlled inputs were implemented manually for clarity.

**Tradeoff:** In a larger or more dynamic form, I'd use a library to handle state, validation, and error messaging consistently.

---

### Minimal Validation Logic

I included checks for input presence and basic format (length-based), but no field-specific parsing.

**Tradeoff:** In production, I’d validate fields and delegate to a PCI-compliant provider like Stripe Elements.

---

### No Global Theming or Component Library

The UI was styled using scoped CSS for simplicity and visual clarity, avoiding overinvestment in reusable design primitives.

**Tradeoff:** A real product would centralize tokens, spacing, colors, and typography for consistency and accessibility across teams. I'd normally use Tailwind, CSS vars, or a design system built with Storybook and powered by accessibility-compliant components.

---

## Testing

- Unit + interaction coverage via Jest and RTL

```bash
npm run test:coverage
```

### My Approach

I reviewed the JSON schema and wireframe, then scoped a structure that focused on correctness, clarity, and accessibility. I built the core functionality first, then layered in tests, styles, and minor validation.

#File Structure

```
src/
├── App.tsx
├── app/
│ ├── BandForm.tsx
│ └── components/
│ ├── BandInfo/
│ ├── EventInfo/
│ └── TicketsForm/
├── band-json/ # Provided concert data
└── types.ts # Shared type definitions
```

### Getting Started

```bash
npm install
npm start
```
