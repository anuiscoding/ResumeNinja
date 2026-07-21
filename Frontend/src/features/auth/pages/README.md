# Pages Layer

The Pages layer represents complete application screens.

Responsibilities:
- Compose multiple UI components.
- Manage page-level state.
- Call service functions to retrieve or submit data.
- Control the overall layout of a page.

Pages should:
- Coordinate the application's flow.
- Pass data to child components.

Pages should not:
- Contain reusable UI components.
- Implement backend communication directly (use the Services layer).