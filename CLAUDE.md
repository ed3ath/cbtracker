# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`cbtracker` is an Angular 13 single-page app that tracks CryptoBlades (a blockchain game) accounts. It reads on-chain data (balances, characters, weapons, shields, quests, raids, treasury/staking) across multiple EVM chains via read-only RPC calls. There is no backend and no wallet connection — the app is read-only: users paste public account addresses, all state lives in `localStorage`.

## Commands

```bash
ng serve                 # dev server at http://localhost:4200/ (development config)
ng build                 # production build to dist/cbtracker
npm run watch            # dev build, rebuild on change
npm test                 # Karma + Jasmine unit tests
ng test --include='**/foo.spec.ts'   # run a single spec
npm run update           # regenerate build/ contract data (see below)
```

Node >= 16.18.1 required.

## Custom webpack (important)

Build uses `@angular-builders/custom-webpack` with `webpack.config.js`, which polyfills Node core modules (`crypto`, `stream`, `buffer`, `process`, etc.) so `ethers` runs in the browser. Any new dependency that expects Node builtins needs a fallback added here.

`tsconfig.json` sets `baseUrl: "./"` and `resolveJsonModule: true`, so imports like `build/app-config.json` and `build/contracts/CryptoBlades.json` resolve from the repo root. Strict mode + `strictTemplates` are on.

## The `build/` data pipeline

`build/` is generated data, not source, but it's committed and imported directly at compile time. `npm run update` (`scripts/updater.js`) fetches it from CryptoBlades' own servers:

- `build/contracts/*.json` — contract ABIs from `app.cryptoblades.io/abi`
- `build/app-config.json` — chain config (RPC URLs, contract addresses per chain) from `config.cryptoblades.io`
- `build/other.json` — NFT sub-contract addresses (characters/weapons/shields/equipment) derived by calling the on-chain contracts

`build/app-config.json` shows as modified in git — it's refreshed by the updater. When contracts change upstream, run `npm run update` rather than hand-editing.

## Architecture

Routing (`app-routing.module.ts`): everything lives under `/tracker` wrapped by `LayoutComponent`. Pages (`home`, `accounts`, `treasury`, `market`, `options`) are guarded by `AdblockerGuard`; the tracker shell has a `DeactivateGuard`. `/privacy` and `/terms` are standalone.

Services (`src/app/services/`) hold all logic — components are thin. Key ones:

- **`web3.service.ts`** — the on-chain layer. Constructs `ethers.JsonRpcProvider` per chain, holds all ABIs, and batches reads through a `MultiCall` contract (`multicall()` / `getBatchCallData()` / `parseMulticallResult()`). Contract addresses come from `app-config.json` indexed by env-var keys in `src/constants.ts` (e.g. `VUE_APP_CRYPTOBLADES_CONTRACT_ADDRESS` — these Vue-prefixed names are the upstream config's keys, not a hint that this is a Vue app).
- **`config.service.ts`** — user settings, all persisted to `localStorage` under the keys in `configKeys` (chain, currency, theme, timezone, rpcUrls, groups, etc.). Reads localStorage in the constructor.
- **`group.service.ts`** — account grouping. Accounts are addresses stored in named groups; there's an `activeGroupIndex`. `importOldAccounts()` migrates a pre-group `accounts` key.
- **`util.service.ts`** — game math and decoding (experience tables, weapon/character trait decoding, seeded RNG via `seedrandom`, `BigNumber` formatting). Largest, pure-logic service.
- Others: `currency`, `theme`, `responsive`, `notification`, `event` (cross-component pub/sub), `script` (dynamic script loading), `variable`.

Data flow: `config.service` picks the active chain → `web3.service` builds a provider + multicall batch for the group's addresses → `util.service` decodes raw results → page component renders.

## Conventions

- Static reference data (currencies, languages, timezones, coingecko ids, character names) lives in `src/app/data/*.json`, imported directly.
- `ethers` v6 API (`ethers.getAddress`, `ethers.isAddress`, `new ethers.JsonRpcProvider`, `new ethers.Contract`) — not v5.
- Money/token amounts use `bignumber.js`; never use JS floats for on-chain values.
- All persistence is `localStorage`; there is no server-side state.
