# Project Instructions

This is the LICUADO application - a React/Vite frontend application.

## Key Files

- `src/`: Frontend source code
- `src/api/licuadoClient.js`: API client for communicating with the LICUADO backend
- `src/lib/AuthContext.jsx`: Authentication context and logic
- `src/lib/app-params.js`: App configuration from environment variables
- `vite.config.js`: Vite build configuration

## Environment Variables

Configure these in `.env.local`:

- `VITE_LICUADO_APP_ID`: Application identifier
- `VITE_LICUADO_APP_BASE_URL`: Backend API base URL

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
