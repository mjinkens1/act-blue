# Touring Band Ticket Form

This project implements a simple ticket-purchasing form based on provided JSON data for a fictional band. It allows users to view concert info, select ticket quantities, input basic personal and card data, and simulate form submission via `console.log()` — all in alignment with the provided exercise instructions.

---

## ✅ Core Features

- Rendered concert info: band name, image, date, and location
- Dynamic ticket quantity selection across ticket types
- Running total calculated in cents and formatted as USD
- Controlled input handling for personal and credit card data
- Basic validation to enable the "Get Tickets" button
- Submission output logged to console
- Fully covered by component-level unit and interaction tests

---

## 📦 Tech Stack

- React + TypeScript
- Jest + React Testing Library
- Input masking: `@react-input/mask`
- CSS Modules for scoped styles

---

## ⚖️ Implementation Notes & Tradeoffs

This take-home was treated as a chance to demonstrate clean component architecture, safe state handling, and testing discipline — not to overengineer the stack for reusability or scale. Below are a few of the tradeoffs made in favor of speed, clarity, or exercise scope:

### ❌ No Form Library (e.g., React Hook Form)

**Why:** The form logic was simple enough that a full abstraction layer wasn't justified. Controlled inputs were implemented manually for clarity.

**Tradeoff:** In a larger or more dynamic form, I'd use a library to handle state, validation, and error messaging consistently.

---

### ❌ Minimal Validation Logic

**Why:** The prompt clarified this was not a production-ready flow and emphasized only light validation. I included checks for input presence and basic format (length-based), but no field-specific parsing.

**Tradeoff:** In production, I’d validate fields and delegate to a PCI-compliant provider like Stripe Elements.

---

### ❌ No Global Theming or Component Library

**Why:** The UI was styled using scoped CSS for simplicity and visual clarity, avoiding overinvestment in reusable design primitives.

**Tradeoff:** A real product would centralize tokens, spacing, colors, and typography for consistency and accessibility across teams. I'd normally use Tailwind, CSS vars, or a design system built with Storybook and powered by accessibility-focused components.

---

### ❌ No Performance Optimizations or Lazy Loading

**Why:** The app is small and static. Performance tuning (e.g., memoization, code splitting) wasn't necessary.

**Tradeoff:** For real-world production use, I’d track interaction performance (e.g., with Web Vitals), reduce bundle size, and ensure minimal re-renders on state updates.

---

## 🔍 Testing

- 100% unit + interaction coverage via Jest and RTL
- Each component has its own test file covering:
  - Render logic
  - Input interaction
  - Prop behavior
  - Callback invocation

```bash
npm run test:coverage
```

Coverage includes:

100% statements

100% branches

100% functions

100% lines

🧠 My Approach
I reviewed the JSON schema and wireframe, then scoped a structure that focused on correctness, clarity, and accessibility. I built the core functionality first, then layered in tests, styles, and minor validation.

Although the prompt suggested spending ~2 hours, I chose to invest additional time to ensure the result was something I’d be comfortable maintaining or handing off in a real-world environment. I’m equally comfortable working under tighter constraints and can move quickly when speed and iteration are prioritized over polish.

📁 File Structure
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

🚀 Getting Started

```bash
npm install
npm start
```
