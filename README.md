# Mid Night Carneval

Frontend-only demo for a student project that lists pubs and upcoming events, with a client-side "join" flow using a password-protected organizer action.

## Features
- Event list with date, time, cost per person and pub.
- Filter by pub and search events.
- Client-side password protected "Organizer / Join Event" action.
- Join events as "Club Team" (localStorage demo).

## How to run
1. Create a GitHub repository named `MidNight-Carneval`.
2. Add `index.html` (this file) to the repo.
3. Enable GitHub Pages in repository settings (branch: main, folder: `/root`).
4. Open `https://<your-username>.github.io/MidNight-Carneval/`

## Demo password
Default demo password: `Carn3valPass2025!` (edit in `index.html` variable `PROJECT_PASSWORD`)

## Notes
- This is a client-side prototype. For real multi-user persistence and secure auth, add a server (Node/Express + Mongo or Firebase).
