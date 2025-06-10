# Sermon Companion Frontend

This repository contains a lightweight prototype of the **Sermon Companion** application built with Ionic-style web components.

## Features

- **Sermon Length Selection** – Choose the desired sermon length in minutes.
- **AI Generated Outlines** – Submit a theme or scripture reference to receive an outline from the backend API.
- **Scripture Integration** – Outlines can include Bible verses from your preferred translation.
- **Customization** – Edit generated content in a simple text editor page and save it.
- **Community Sharing** – Placeholder page for viewing sermons shared by other users.
- **Local Saving** – Edited sermons are stored in your browser's local storage.

The project does not include a full Angular build system due to environment limitations, but demonstrates the structure and key screens of the proposed app.

## Development

This prototype relies on web components and minimal tooling.

```bash
npm start     # placeholder start script
npm test      # placeholder test script
```

A backend server should expose a `/api/generate` endpoint that accepts a JSON body with `theme` and `length` fields and returns an outline string.
This repository contains the frontend portion of the **Sermon Companion** application built with Ionic and Angular. The goal is to help preachers, Bible teachers, and lay believers quickly generate sermon outlines using OpenAI while allowing full customization and offline access.

## Features

- Generate sermon outlines from a topic or scripture reference
- Choose preferred Bible translations
- Edit content in a rich-text editor and add personal notes
- Optional voice commands for hands-free creation
- Save sermons for offline use and share them with church groups
- Suggested closing prayers to include or modify

## Development

The project is in early stages. To get started:

1. Ensure you have Node.js (v18+) and the Ionic CLI installed.
2. Clone the repository and run `npm install`.
3. Use `ionic serve` during development.
4. Refer to **TODO.md** for upcoming tasks aimed at making the app production ready.

