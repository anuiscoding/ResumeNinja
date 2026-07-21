# Services Layer

The Services layer is responsible for all communication between the frontend and the backend API.

Responsibilities:
- Send HTTP requests to the backend using Axios or Fetch.
- Receive and return API responses.
- Keep API endpoint logic in one place.
- Reuse API functions across multiple components.

This layer should not:
- Render UI.
- Manage component state.
- Contain presentation logic.

Example flow:

React Component
      ↓
Service (auth.api.js)
      ↓
Backend API
      ↓
Response
      ↓
React Component