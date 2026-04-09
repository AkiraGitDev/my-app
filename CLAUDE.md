# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Start dev server:** `npx expo start` (or `npm start`)
- **Run on Android:** `npm run android`
- **Run on iOS:** `npm run ios`
- **Run on web:** `npm run web`
- **Lint:** `npm run lint` (uses eslint-config-expo flat config)
- **Reset to blank project:** `npm run reset-project`

## Architecture

This is an **Expo SDK 54** React Native app using **expo-router v6** (file-based routing) with TypeScript (strict mode) and React 19. New Architecture is enabled (`newArchEnabled: true`), along with typed routes and React Compiler experiments.

### Routing (app/)

- `_layout.tsx` — Root Stack navigator (headerless) with three route groups:
  - `(tabs)/` — Bottom tab navigator (Home, Aluno, Sobre). Tab accent color: `#6C63FF`.
  - `auth/` — Authentication screens: `login`, `cadastro`, `esqueceu-senha`.
  - `modal.tsx` — Standalone modal screen.

### Path alias

`@/*` maps to the project root (configured in `tsconfig.json`). Use `@/components/...`, `@/hooks/...`, etc. for imports.

### Key directories

- `components/` — Reusable components. `ui/` subfolder has lower-level primitives (Collapsible, IconSymbol). Platform-specific files use `.ios.tsx` / `.tsx` convention.
- `hooks/` — Custom hooks including `useColorScheme` (with `.web.ts` platform variant) and `useThemeColor`.
- `constants/theme.ts` — `Colors` (light/dark) and `Fonts` (platform-specific font stacks).

### Language

UI text and screen names are in **Brazilian Portuguese** (e.g., "aluno", "cadastro", "esqueceu-senha", "sobre", "sair"). Keep this convention for user-facing strings.
