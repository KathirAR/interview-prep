# Playwright Automation Framework

A simple UI and API automation framework built using Playwright and TypeScript.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Dotenv
- Cross-env

---

## Features

### UI Automation

- Page Object Model (POM)
- Environment-based execution (QA, Staging, Prod)
- Login with valid credentials
- Login with invalid credentials
- HTML Report
- Screenshot, Video and Trace on failure

### API Automation

- Reusable API Client
- GET Request
- POST Request
- DELETE Request
- Response validation

---

## Project Structure

```
playwright-framework
│
├── pages
├── tests
│   ├── ui
│   └── api
├── utils
├── test-data
├── .github/workflows
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Environment Configuration

Environment values are stored in `.env.local`.

Example:

```env
QA_BASE_URL=https://opensource-demo.orangehrmlive.com
QA_USERNAME=Admin
QA_PASSWORD=admin123

API_BASE_URL=https://jsonplaceholder.typicode.com
```

---

## Running Tests

### UI Tests

```bash
npm run test:ui:qa
npm run test:ui:staging
npm run test:ui:prod
```

### API Tests

```bash
npm run test:api:qa
```

---

## Test Scenarios

### UI

- Login with valid credentials
- Login with invalid credentials

### API

- Get User Details
- Create New User
- Delete User

---

## Reporting

Generate the HTML report using:

```bash
npm run report
```

The framework captures:

- HTML Report
- Screenshot on failure
- Video on failure
- Trace on failure

---

## CI/CD

GitHub Actions is configured to:

- Install dependencies
- Run Playwright tests
- Upload HTML report

The workflow runs automatically on every push to the repository.

---

## Author

**Kathiresan AR**

Senior Quality Engineer | Playwright | TypeScript