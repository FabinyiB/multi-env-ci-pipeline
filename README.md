# Multi-Environment CI Pipeline with Cypress & GitHub Actions

This repository demonstrates a multi-environment Continuous Integration (CI) pipeline using Cypress and GitHub Actions.

The workflow simulates a realistic QA automation setup where smoke tests validate pull requests quickly, while regression tests run automatically against a separate integration environment on a schedule.

---

## Project Goal

The purpose of this project is to showcase how automated tests can be executed across multiple environments with different scopes depending on the trigger type:

* Pull requests → fast smoke validation (DEV environment)
* Push to main → regression validation (INT environment)
* Nightly scheduled execution → regression validation (INT environment)
* Manual workflow execution → selectable environment and scope


---

## Pipeline Overview

The GitHub Actions workflow supports four execution modes:

| Trigger          | Environment      | Test Scope                |
| ---------------- | ---------------- | ------------------------- |
| Pull Request     | DEV              | Smoke                     |
| Push to main     | INT              | Regression                |
| Nightly schedule | INT              | Regression                |
| Manual run       | DEV / INT / BOTH | Smoke / Regression / BOTH |


---

## Multi-Environment Configuration

Environment-specific Cypress configurations are stored here:

```
cypress/configs/dev.config.ts
cypress/configs/int.config.ts
```

These configuration files allow the same test suite to run against different environments without modifying test code.

Example usage:

```
npm run test:dev:smoke
npm run test:int:regression
```

---

## Manual Workflow Execution

The pipeline can also be triggered manually from GitHub Actions:

```
Run workflow → Select environment → Select test scope
```

Supported environment options:

* dev
* int
* both

Supported scope options:

* smoke
* regression
* both

This enables flexible test execution depending on validation needs.

---

## Scheduled Regression Testing

A nightly workflow executes regression tests automatically against the INT environment:

```
02:00 UTC every day
```

This simulates a production-style regression validation pipeline commonly used in enterprise environments.

---

## Tech Stack

* Cypress
* GitHub Actions
* Node.js
* JavaScript

---

## Related Project

This repository focuses on CI validation strategy only.

A companion project demonstrating Docker image publishing and automated cloud deployment is available here:

https://github.com/FabinyiB/cypress-ci-cd-docker-render-demo

Together these repositories demonstrate both validation (CI) and deployment (CD) pipeline design.
