# Multi-environment CI Pipeline

A sample project demonstrating a multi-environment Cypress pipeline with GitHub Actions.

## Features

- DEV / INT environment selection
- Manual and scheduled GitHub Actions triggers
- PR smoke tests and main regression tests
- Regression filtering by `@regression` tag
- Simple Hello World app with background color toggle

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npm start
   ```

3. Run DEV smoke tests:
   ```bash
   npm run test:dev:smoke
   ```

4. Run INT regression tests:
   ```bash
   npm run test:int:regression
   ```
