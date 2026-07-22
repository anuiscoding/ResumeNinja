# Hooks Layer

The Hooks layer contains custom React hooks that encapsulate reusable stateful logic and business logic.

Instead of duplicating code across multiple components, custom hooks provide a clean and reusable interface for interacting with application features.

## Responsibilities

- Read shared state from React Context.
- Encapsulate feature-specific business logic.
- Coordinate communication between the UI, Context, and Services layers.
- Expose simple functions and state for components to consume.
- Reduce code duplication across multiple components.

## This layer should not

- Render any UI.
- Contain JSX.
- Directly define application routes.
- Store global state (use Context for shared state).
- Contain backend implementation.

## Example

For authentication:

```
Login Page
      │
      ▼
useAuth()
      │
      ├── Reads AuthContext
      ├── Calls auth.api.js
      ├── Updates AuthContext
      └── Returns state and helper functions
```

Components simply consume the hook:

```jsx
const {
    user,
    loading,
    handleLogin,
    handleLogout
} = useAuth();
```

The component does not need to know:

- Where the authentication state is stored.
- How API requests are made.
- How the Context is updated.

The hook abstracts these implementation details behind a simple interface.

## Architecture Flow

```
UI Component
      │
      ▼
Custom Hook
(useAuth)
      │
      ├────────────► Services Layer
      │                  │
      │                  ▼
      │             Backend API
      │
      ▼
Context Layer
(AuthContext)
      │
      ▼
Shared Application State
```