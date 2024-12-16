# Contributing

Thank you for your interest in contributing to lotru-ui.com.

Before submitting your first pull request, please take a moment to review this guide. We also encourage you to check existing issues and pull requests to ensure no one is already working on a similar task.

## About this repository

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.
- We use [changesets](https://github.com/changesets/changesets) for managing releases.

## Structure

This repository is structured as follows:

```
packages
└── cli
scripts
website
  └── src
    ├── app
    ├── components
    │ ├── examples
    │ └── ui
    └── content
```

| Path                              | Description                              |
| --------------------------------- | ---------------------------------------- |
| `packages/cli`                    | The `lotru` package.                     |
| `scripts`                         | The scripts to build the registry.       |
| `website/src/app`                 | The Next.js application for the website. |
| `website/src/components`          | The React components for the website.    |
| `website/src/components/examples` | The example components for the registry. |
| `website/src/components/ui`       | The UI components for the registry.      |
| `website/src/content`             | The content for the website.             |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/lotru.git
```

### Navigate to project directory

```bash
cd lotru
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

### Run a workspace

You can use the `pnpm --filter=[WORKSPACE]` command to start the development process for a workspace.

#### Examples

1. To run the `lotru-ui.com` website:

```bash
pnpm --filter=website dev
```

2. To run the `lotru` package:

```bash
pnpm --filter=lotru dev
```

## Running the CLI Locally

To run the CLI locally, you can follow the workflow:

1. Start by running the registry (main site) to make sure the components are up to date:

   ```bash
   pnpm website:dev
   ```

2. Run the development script for the CLI:

   ```bash
   pnpm lotru:dev
   ```

3. In another terminal tab, test the CLI by running:

   ```bash
   pnpm lotru
   ```

   To test the CLI in a specific app, use a command like:

   ```bash
   pnpm lotru <init | add | ...> -c ~/Desktop/my-app
   ```

This workflow ensures that you are running the most recent version of the registry and testing the CLI properly in your local environment.

## Components

You can find the source code for the components under `website/src/components`.

```bash
website
  └── components
    ├── examples
    └── ui
```

When adding or modifying components, please ensure that:

1. You update the documentation.
2. You update the registry schema.
3. You run `pnpm build:registry` to update the registry.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.
