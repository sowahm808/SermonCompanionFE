# Sermon Companion Frontend

This repository contains a lightweight prototype of the **Sermon Companion** application built with Ionic-style web components.

## Features

- **Sermon Length Selection** – Choose the desired sermon length in minutes.
- **AI Generated Outlines** – Submit a theme or scripture reference to receive an outline from the backend API.
- **Scripture Integration** – Outlines can include Bible verses from your preferred translation.
- **Customization** – Edit generated content in a simple text editor page and save it.
- **Community Sharing** – Placeholder page for viewing sermons shared by other users.

The project does not include a full Angular build system due to environment limitations, but demonstrates the structure and key screens of the proposed app.

## Development

This prototype relies on web components and minimal tooling.

```bash
npm start     # placeholder start script
npm test      # placeholder test script
```

A backend server should expose a `/api/generate` endpoint that accepts a JSON body with `theme` and `length` fields and returns an outline string.
