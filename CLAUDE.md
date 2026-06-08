# SpecKit — Specification-Driven Development

This project uses **SpecKit** for structured feature development. Every feature follows the SDD cycle: specify → plan → tasks → implement.

## Detecting Intent from Natural Language

You MUST infer which SpecKit step to execute from the user's natural language. When a message matches one of the patterns below, read the corresponding skill file and execute its instructions in full — without asking the user to retype a command.

| User says something like… | Execute |
|---------------------------|---------|
| "quero criar uma feature de X", "adicionar X", "nova feature X", "I want to build X" | `speckit-specify` with X as the description |
| "esclarecer dúvidas", "clarificar spec", "tenho dúvidas sobre a spec" | `speckit-clarify` |
| "planejar a implementação", "criar o plano técnico", "plan this" | `speckit-plan` |
| "quebrar em tarefas", "gerar tasks", "criar tasks.md", "break into tasks" | `speckit-tasks` |
| "implementar", "executar as tarefas", "build it", "código agora" | `speckit-implement` |
| "criar checklist de X", "checklist para X" | `speckit-checklist` with X as the domain |
| "analisar consistência", "analyze the project" | `speckit-analyze` |
| "definir a constituição", "princípios do projeto" | `speckit-constitution` |
| "criar branch", "nova branch para a feature" | `speckit-git-feature` |
| "commitar", "fazer commit" | `speckit-git-commit` |
| "validar git", "checar estado do git" | `speckit-git-validate` |
| "configurar remote", "push para o remoto" | `speckit-git-remote` |
| "inicializar git", "init repositório" | `speckit-git-initialize` |
| "sincronizar issues", "tasks para issues do github" | `speckit-taskstoissues` |

When ambiguous, state which step you're about to execute and proceed — do not wait for confirmation unless the user explicitly asks.

## Command Reference

When the user types `/speckit-<command> [arguments]`, that also triggers the same skill file.

| Command | Skill file | Purpose |
|---------|-----------|---------|
| `/speckit-specify <description>` | [.claude/skills/speckit-specify/SKILL.md](.claude/skills/speckit-specify/SKILL.md) | Create feature specification |
| `/speckit-clarify` | [.claude/skills/speckit-clarify/SKILL.md](.claude/skills/speckit-clarify/SKILL.md) | Clarify open spec questions |
| `/speckit-plan` | [.claude/skills/speckit-plan/SKILL.md](.claude/skills/speckit-plan/SKILL.md) | Create technical implementation plan |
| `/speckit-tasks` | [.claude/skills/speckit-tasks/SKILL.md](.claude/skills/speckit-tasks/SKILL.md) | Break plan into ordered tasks.md |
| `/speckit-implement` | [.claude/skills/speckit-implement/SKILL.md](.claude/skills/speckit-implement/SKILL.md) | Execute tasks and build the feature |
| `/speckit-checklist` | [.claude/skills/speckit-checklist/SKILL.md](.claude/skills/speckit-checklist/SKILL.md) | Generate domain-specific checklists |
| `/speckit-analyze` | [.claude/skills/speckit-analyze/SKILL.md](.claude/skills/speckit-analyze/SKILL.md) | Analyze codebase for consistency |
| `/speckit-constitution` | [.claude/skills/speckit-constitution/SKILL.md](.claude/skills/speckit-constitution/SKILL.md) | Define/update project principles |
| `/speckit-git-feature` | [.claude/skills/speckit-git-feature/SKILL.md](.claude/skills/speckit-git-feature/SKILL.md) | Create feature branch |
| `/speckit-git-commit` | [.claude/skills/speckit-git-commit/SKILL.md](.claude/skills/speckit-git-commit/SKILL.md) | Commit current changes |
| `/speckit-git-validate` | [.claude/skills/speckit-git-validate/SKILL.md](.claude/skills/speckit-git-validate/SKILL.md) | Validate git state |
| `/speckit-git-remote` | [.claude/skills/speckit-git-remote/SKILL.md](.claude/skills/speckit-git-remote/SKILL.md) | Configure remote and push |
| `/speckit-git-initialize` | [.claude/skills/speckit-git-initialize/SKILL.md](.claude/skills/speckit-git-initialize/SKILL.md) | Initialize git repository |
| `/speckit-taskstoissues` | [.claude/skills/speckit-taskstoissues/SKILL.md](.claude/skills/speckit-taskstoissues/SKILL.md) | Sync tasks.md to GitHub Issues |
| `/speckit-agent-context-update` | [.claude/skills/speckit-agent-context-update/SKILL.md](.claude/skills/speckit-agent-context-update/SKILL.md) | Refresh agent context file |

## SDD Workflow

```
/speckit-specify <feature description>
        ↓
/speckit-clarify          ← optional, if spec has open questions
        ↓
/speckit-plan
        ↓
/speckit-tasks
        ↓
/speckit-implement
```

The full automated workflow runs as `/speckit` (specify → plan → tasks → implement with review gates).

## Key Locations

| Path | Content |
|------|---------|
| `specs/` | Feature directories (e.g., `specs/001-new-article/`) |
| `specs/<NNN>-<name>/spec.md` | Feature specification |
| `specs/<NNN>-<name>/plan.md` | Technical implementation plan |
| `specs/<NNN>-<name>/tasks.md` | Ordered task list |
| `specs/<NNN>-<name>/research.md` | Technical decisions |
| `specs/<NNN>-<name>/data-model.md` | Entity definitions |
| `specs/<NNN>-<name>/contracts/` | Interface contracts |
| `specs/<NNN>-<name>/checklists/` | Quality checklists |
| `.specify/feature.json` | Currently active feature directory |
| `.specify/memory/constitution.md` | Project principles and governance |
| `.specify/extensions.yml` | Hook configuration (git, agent-context) |
| `.specify/templates/` | Templates for spec, plan, tasks, checklists |
| `.specify/scripts/bash/` | Shell scripts used by plan/tasks/implement |

## Extension Hooks

Hooks are configured in [.specify/extensions.yml](.specify/extensions.yml) and fire automatically around each command. Key mandatory hook: `before_specify` runs `/speckit-git-feature` to create a feature branch before writing a spec.

When executing any skill file that references hooks, follow the hook rules exactly: mandatory hooks (`optional: false`) must run; optional hooks (`optional: true`) should be offered to the user.

## Scripts

When skill instructions call scripts, run them from the project root:

```sh
bash .specify/scripts/bash/setup-plan.sh --json
bash .specify/scripts/bash/setup-tasks.sh --json
bash .specify/scripts/bash/check-prerequisites.sh --json --require-tasks --include-tasks
```

Parse the JSON output and use the returned paths (`FEATURE_DIR`, `FEATURE_SPEC`, `IMPL_PLAN`, etc.) for all subsequent file operations.

## Constitution

Read [.specify/memory/constitution.md](.specify/memory/constitution.md) at the start of every plan, tasks, and implement step. It defines the non-negotiable project principles that all design decisions must satisfy.

## Project Context

This is a static GitHub Pages site publishing software engineering articles. No build step, no bundler — pure HTML/CSS/JS.

- Articles are standalone `.html` files under `articles/`
- Shared design system lives in `assets/css/base.css` (tokens, typography, components)
- Analytics via GA4 (`G-SM44B38PW8`) with custom events
- See [README.md](README.md) for design system tokens, article structure, and conventions

## Context File

This file (`CLAUDE.md`) contains a `<!-- SPECKIT START -->…<!-- SPECKIT END -->` block pointing to the current active plan. Update this pointer during `/speckit-plan` (Phase 1, step 4) and `/speckit-agent-context-update`.

<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan
<!-- SPECKIT END -->
