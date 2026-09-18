# Contributing to Todoslist

Thank you for contributing! 🎉 Todoslist welcomes code, UI/UX, testing, documentation, and bug-fix contributions.

## 1. Pick an Issue

- Check existing issues first.
- Choose an issue appropriate to your experience.
- If assignment is required, comment on the issue and wait for maintainer confirmation.
- Avoid duplicating another contributor's work.

## 2. Setup

```bash
git clone <your-fork-url>
cd Todoslist
npm install
```

## 3. Create a Branch

Do not work directly on `main`.

Examples:

```text
feat/task-priority
feat/reminder-system
fix/timer-reset
ui/dashboard
docs/readme
test/task-crud
```

## 4. Make Changes

Keep changes focused on the assigned issue.

Before opening a PR, run:

```bash
npm run build
```

Also run available linting/tests.

## 5. Commit Convention

Use clear commits:

```text
feat: add task priority
fix: prevent timer reset on refresh
docs: improve contributing guide
ui: improve task card
test: add task CRUD tests
refactor: simplify reminder service
```

## 6. Pull Request

Push your branch:

```bash
git push origin your-branch-name
```

Open a PR against `main` and use the PR template.

Include:
- What changed
- Why it changed
- Related issue
- Testing performed
- Screenshots for UI changes

## 7. Code Guidelines

- Keep components focused and reusable.
- Use meaningful names.
- Avoid unnecessary dependencies.
- Keep reusable logic in hooks/services/utils where appropriate.
- Never commit secrets, API keys, `.env` files, or `node_modules`.
- Consider responsive design and accessibility.
- Avoid unrelated changes.

## 8. UI Contributions

Keep the existing design language consistent, test responsive layouts, check keyboard accessibility where relevant, and include screenshots for visual changes.

## 9. Questions

For uncertain or architectural changes, discuss the approach in the issue before starting a large implementation.

Thank you for helping build Todoslist! 🚀
