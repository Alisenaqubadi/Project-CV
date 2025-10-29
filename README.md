# Project-CV

A small React + Vite application for creating and exporting CVs (curricula vitae / résumés).

This repository is a compact starter built with Vite + React. It includes a simple UI to enter CV data, preview it, and export a printable PDF. The project follows a lightweight, zero-config approach so you can focus on features and styling.

## Features

- Fill in multiple CV sections (personal info, education, experience, skills, etc.)
- Live preview of the generated CV
- Export to PDF
- Minimal, responsive CSS and a tidy component structure

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run the development server (with HMR)

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

## Scripts

- `dev` - start Vite dev server
- `build` - create a production build
- `preview` - locally preview the production build
- `test` - run unit tests (Jest)
- `lint` - run ESLint

(See `package.json` for the exact commands configured in this repository.)

## Project structure (important files)

- `index.html` — app entry HTML
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — main app component
- `src/cvs-forms.js` — form state & helpers for CV sections
- `src/pdfGenerator.js` — PDF export logic
- `src/assets/` — images and static assets
- `public/` — static public files

## Testing & Linting

This project uses Jest for tests and ESLint for linting.

- Run tests:

```bash
npm test
```

- Run linter:

```bash
npm run lint
```

## Notes and tips

- The app is intentionally minimal so you can style and extend it for your needs.
- If you add images or custom fonts, put them in `src/assets` or `public/` and reference them from components.

## Contributing

Contributions are welcome. Open an issue or submit a pull request for fixes, features, or improvements.

When contributing, please:

1. Fork the repository and create a feature branch
2. Keep changes focused and add tests for new behavior
3. Run `npm test` and `npm run lint` before submitting a PR

---

If you'd like, I can also:

- add a short CONTRIBUTING.md and LICENSE
- add a small example screenshot to `README.md` (requires adding the image to `src/assets`)
- wire up a GitHub Actions workflow for tests and linting

Tell me which of these you'd like next.
