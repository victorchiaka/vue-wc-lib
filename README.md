# 🧩 Vue-Wc-Lib

A monorepo containing a Vue 3 web component library and example usage in a React, Astro and Vue.

---

**Simple guide to getting started**
---

## 📦 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/victorchiaka/vue-wc-lib.git
cd vue-wc-lib
```
2. **cd into any of the examples folder (eg - vue-app)**
```bash
cd examples/vue-app
```
3. **Run pnpm install**
```bash
pnpm install
```
4. **And serve**
```bash
pnpm dev
```

## 📦 For Development

1. **Navigate to the `core/lib` folder and run the following commands**
```bash
pnpm install

pnpm dev # to spin up the dev server

pnpm build # To build for production (build is set on library mode, see... vite.config.ts)
```

2. **And you're good**
---

## ⚙️ Technical Overview

This monorepo is structured to support scalable development and testing of a Vue 3-based Web Component library across multiple frontend frameworks.

- **core/lib** – A Vue 3 library that compiles components into [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components) using `defineCustomElement`. Built using Vite in library mode for optimized output and framework-agnostic usage.
- **examples/** – A collection of minimal apps demonstrating real-world usage of the library in:
  - **Vue** – Native Vue integration
  - **React** – Consuming Web Components with custom type shims for JSX
  - **Astro** – SSR/Island-friendly integration
- **Vite** – Serves as the build tool for both development and bundling. Supports fast HMR and efficient library builds.
- **vue-tsc** – Type-checks Vue files and generates `.d.ts` declarations for type-safe consumption in downstream projects.
- **pnpm workspaces** – Enables efficient dependency management and project linking across packages in the monorepo.

The goal is to provide a reusable, framework-agnostic component library that works seamlessly across modern frontend stacks.
