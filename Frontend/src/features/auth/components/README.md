# UI Layer

The UI Layer contains reusable React components responsible for displaying information and handling user interactions.

Responsibilities:
- Render the application's user interface.
- Receive data through props.
- Trigger actions using callbacks or service functions.
- Manage local UI state when necessary (e.g., form inputs, modals).

This layer should not:
- Make direct API requests (use the Services layer).
- Contain business logic.
- Handle backend communication.

Example flow:

User
   ↓
UI Component
   ↓
Service Layer
   ↓
Backend API
   ↓
Response
   ↓
UI Update