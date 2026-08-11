# DevPilot Testbed

A small JavaScript project used to test automated issue-to-PR coding agents. It is an intentionally compact, in-memory Task Manager utility library.

## Project overview

The library provides small helpers for strings, arrays, and dates, plus services for managing users and their tasks. It uses CommonJS modules, Node.js, and Jest; it has no database, frontend, or external API.

## Directory structure

```
devpilot-testbed/
├── src/
│   ├── utils/          # String, array, and date helpers
│   ├── services/       # In-memory user and task services
│   ├── validators/     # User validation
│   └── index.js        # Public module entry point
├── tests/              # Jest test suites
├── package.json
└── .gitignore
```

## Setup

```bash
npm install
```

## Run tests

```bash
npm test
```

For watch mode during development:

```bash
npm run test:watch
```

## Modules

- `src/utils/stringUtils.js` exports capitalization, reversal, truncation, and palindrome helpers.
- `src/utils/arrayUtils.js` exports uniqueness, numeric aggregation, and array chunking helpers.
- `src/utils/dateUtils.js` exports simple weekend, elapsed-day, and date-formatting helpers.
- `src/validators/userValidator.js` checks that a user provides the required fields.
- `src/services/userService.js` creates, retrieves, lists, and deletes in-memory users.
- `src/services/taskService.js` creates, retrieves, lists, completes, and deletes in-memory tasks.
- `src/index.js` exports the main utilities, services, and validator from one place.

Service data lasts only for the lifetime of the Node.js process. The services also expose reset helpers for test isolation and local experimentation.
