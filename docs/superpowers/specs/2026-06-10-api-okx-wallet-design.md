# ZEALWISH API + OKX Wallet Design

## Goal

Connect the current `frontend-v4` web-only preview to the existing ZEALWISH HTTP API gateway and add a safe OKX wallet connection flow for the wallet-owned character passport UX.

## Scope

This design covers the static browser preview served from `frontend-v4/index.html` and the inline v5 Web Console in `frontend-v4/src/v5/zealwish-landing.jsx`. It does not add smart-contract minting, custody, private-key handling, or speculative NFT flows.

## Current Runtime

- Preview entry: `frontend-v4/index.html`
- Web-only product surface: `frontend-v4/src/v5/zealwish-landing.jsx`
- Wallet adapter: `frontend-v4/src/v4/wallet-service.jsx`
- API bridge: `frontend-v4/src/v4/ocworld-bridge.jsx`
- Existing HTTP API server: `ocworld-web/server.js`
- Local API base: `http://127.0.0.1:7291/api`

## Architecture

The browser runtime resolves capabilities in this order:

1. Explicit ZEALWISH HTTP API gateway.
2. Electron preload bridge when running inside a desktop shell.
3. Browser-safe fallback for demos.

The wallet runtime resolves providers in this order:

1. OKX injected provider exposed as `window.okxwallet`.
2. EIP-6963 discovered provider whose rdns/name indicates OKX.
3. Generic EIP-1193 provider exposed as `window.ethereum`.

## API Contract

The static preview uses the existing `ocworld-web/server.js` endpoints:

- `GET /health`
- `GET /runtime-status`
- `POST /chat`
- `POST /generate-image`
- `POST /speak`

The default API base is:

- `http://127.0.0.1:7291/api` for localhost static preview on non-API ports.
- `/api` for deployed same-origin environments.

Operators can override the API base with:

- `window.ZEALWISH_API_BASE`
- `localStorage.setItem("zealwish.apiBase", "...")`

## Wallet Contract

`window.ZEALWISH_WALLET` exposes:

- `getState()`
- `connect()`
- `disconnect()`
- `onChange(callback)`
- `formatAddress(address)`

The state shape is:

```js
{
  status: "idle" | "connecting" | "connected" | "error",
  providerName: string,
  address: string,
  chainId: string,
  error: string
}
```

The adapter stores only public wallet metadata, never private keys, seed phrases, or privileged signatures.

## UI Contract

- Landing top-right button is the OKX wallet action.
- Hero primary action connects wallet first, then opens the inline create module.
- `ZEALWISH Web Console` owns create, talk, memory, world, rewind, and settings modules in the landing page itself.
- Talk module calls `window.OCRuntime.sendChat`, which now routes to the HTTP API first.
- Passport and memory drafts persist in localStorage and can be exported as JSON.
- Product-facing copy remains English-only.

## Error Handling

- Missing OKX wallet shows a clear install/connect message.
- API failures fall back to the current browser-safe demo behavior.
- Wallet connection rejection leaves the app usable without blocking demo routes.

## Verification

- Static contract tests verify web-only preview wiring, OKX wallet service, inline console functions, and English-only copy.
- Run `npx vitest run tests/frontend-v4-zealwish.test.ts`.
- Run `npm run build`.
- Start API server and static preview for browser validation when possible.
