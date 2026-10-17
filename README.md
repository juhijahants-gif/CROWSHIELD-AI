# CrowdShield AI

CrowdShield AI is a React + Vite demonstration frontend for pedestrian crowd monitoring in Melbourne, Victoria. **All counts, forecasts, alerts, sensors, and dataset statuses are sample/demo data** until connected to verified sources.

## Requirements
- Node.js LTS (includes npm)
- Visual Studio Code (recommended)

## Run on Windows
1. Install Node.js LTS from https://nodejs.org/ and restart VS Code/PowerShell.
2. Extract `crowdshield-ai.zip`.
3. Open the extracted `crowdshield-ai` folder in VS Code.
4. In VS Code choose **Terminal → New Terminal**. Check that the terminal is inside the folder containing `package.json`.
5. Run `npm install`.
6. Run `npm run dev`.
7. Open the local URL printed by Vite (usually http://localhost:5173).
8. Sign in using a demo account below.
9. Press `Ctrl+C` in the terminal to stop the server.

If PowerShell blocks `npm`, try `npm.cmd install` and `npm.cmd run dev`. If port 5173 is busy, Vite will print another port. If dependencies fail, check internet access and your Node.js installation.

## Demo accounts
Use any of these emails and the shared demo-only password `CrowdDemo123!`:
- `admin@crowdshield.demo` — Administrator
- `operator@crowdshield.demo` — Operator
- `viewer@crowdshield.demo` — Viewer

The demo password is not a real credential. The demo service compares the entered password in memory and stores only a non-secret user/session marker in `sessionStorage`; it does not store the password. This is **not production security** and must not be used for real accounts or sensitive information. Demo sessions end when the browser tab session ends.

## Features
- Login, registration, forgot/reset-password demonstration screens
- Auth context, protected routes, role-based route and action guards
- Responsive navigation and profile/logout menu
- Overview, Monitoring, Predictions, Alerts, Sensors, Analytics, Data Sources, Settings, Users
- Search/filter, role-aware alert actions, sensor demo management, CSV preview and export
- Central API client, mock data, shared risk classification

## Backend integration
Set `VITE_API_BASE_URL` in `.env` to your API base URL. The service layer attempts backend endpoints when configured; use a server that implements `/auth/login`, `/auth/logout`, `/auth/me`, `/auth/register`, `/auth/forgot-password`, and `/auth/reset-password`. Adapt response shapes in `src/services/authService.js` to match your API. Prefer secure HTTP-only cookies, server-side password hashing, CSRF protection where applicable, rate limiting, and server-enforced authorization. Never put API secrets in Vite variables: client variables are public in the built bundle.

Frontend role checks are for demo UX only. The backend must enforce all permissions independently. The demo reset form never sends email and explicitly says no email service is connected. No trained/validated prediction model, live sensor feed, emergency dispatch, or real dataset integration is included. n8n is optional and not required to run this frontend.
