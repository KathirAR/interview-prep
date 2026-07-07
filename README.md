# Playwright Automation Framework

A reusable UI and API automation framework built using **Playwright** and **TypeScript**.

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Dotenv
- Cross-env

---

# Features

## UI Automation

- Page Object Model (POM)
- Base Page implementation
- Environment-based execution (QA, Staging and Production)
- Login with valid credentials
- Login with invalid credentials
- HTML Report
- Screenshot, Video and Trace on failure

## API Automation

- Reusable API Client
- GET Request
- POST Request
- DELETE Request
- Response validation

---

# Project Structure

```text
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

# Prerequisites

Before running the framework, install the following:

- Node.js (v18 or above)
- Git
- Visual Studio Code (Optional)

---

# Installation

Clone the repository

```bash
git clone https://github.com/KathirAR/interview-prep.git
```

Navigate to the project folder

```bash
cd interview-prep/playwright-framework
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Environment Configuration

Create a `.env.local` file in the project root.

Example:

```env
QA_BASE_URL=https://opensource-demo.orangehrmlive.com
QA_USERNAME=Admin
QA_PASSWORD=admin123

STAGING_BASE_URL=https://staging-url.com
STAGING_USERNAME=staging_user
STAGING_PASSWORD=staging_password

PROD_BASE_URL=https://prod-url.com
PROD_USERNAME=prod_user
PROD_PASSWORD=prod_password

API_BASE_URL=https://jsonplaceholder.typicode.com
```

---

# Running UI Tests

Run UI tests in QA

```bash
npm run test:ui:qa
```

Run UI tests in Staging

```bash
npm run test:ui:staging
```

Run UI tests in Production

```bash
npm run test:ui:prod
```

---

# Running API Tests

Run API tests in QA

```bash
npm run test:api:qa
```

---

# View HTML Report

```bash
npm run report
```

---

# UI Test Scenarios

- Login with valid credentials
- Login with invalid credentials

---

# API Test Scenarios

| Test Case | HTTP Method | Endpoint |
|-----------|-------------|----------|
| Get User Details | GET | /users/1 |
| Create New Post | POST | /posts |
| Delete Post | DELETE | /posts/1 |

---

# Reporting

The framework generates:

- HTML Report
- Screenshot on failure
- Video on failure
- Trace on failure

---

# CI/CD

GitHub Actions is configured to:

- Checkout the repository
- Install project dependencies
- Install Playwright browsers
- Execute UI tests
- Execute API tests
- Publish Playwright HTML Report

The workflow is triggered automatically on every Push and Pull Request.

---

# Author

**Kathiresan AR**

Senior Quality Engineer

Playwright | TypeScript | UI & API Automation