# react-twitter-clone-project

Self-educational, simple, yet semi-complex Twitter-clone project. Using NX for monorepo, React, Node, Express and PostgreSQL.

## Installation

- Clone the repository using `git clone` command or using git manager.

```bash
git clone https://github.com/nineteenss/react-twitter-clone-project.git
```

- Install necessary dependencies using `npm install` command

## Running

<!-- Write nx run many instructions -->

- Then - cd into `hootter-monorepo` directory and run ...

# Troubleshooting

If you're facing next warning:

```
NX   The Nx Daemon is unsupported in WebAssembly environments. Some things may be slower than or not function as expected.
```

Here's what you can do to fix it:

- Remove `node_modules` folder and `package-lock.json` file in the `hootter-monorepo` directory;
- Run `npm install` and wait until necessary dependencies will be installed over again.
