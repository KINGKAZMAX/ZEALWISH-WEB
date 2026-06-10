# ZEALWISH API + OKX Wallet 实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法来跟踪进度。

**目标：** 让 `frontend-v4` 静态预览真实调用现有 HTTP API gateway，并提供 OKX/EIP-1193 钱包连接体验。

**架构：** `frontend-v4/src/v4/ocworld-bridge.jsx` 提供 HTTP API 优先、Electron 次之、浏览器 fallback 的运行时桥；`frontend-v4/src/v4/wallet-service.jsx` 提供 OKX provider 边界；`frontend-v4/src/v5/zealwish-landing.jsx` 内联 Web Console 承载 create/talk/memory/world/rewind/settings，不再挂载旧 v4 app shell。

**技术栈：** React via Babel standalone, browser globals, EIP-1193, EIP-6963, existing Express API in `ocworld-web/server.js`, Vitest static contract tests.

---

## 文件结构

- 创建：`frontend-v4/src/v4/wallet-service.jsx` — OKX/EIP-1193 provider detection, connect/disconnect, state subscription.
- 修改：`frontend-v4/src/v4/ocworld-bridge.jsx` — add HTTP API gateway client and fix runtime capability resolution.
- 修改：`frontend-v4/src/v5/zealwish-landing.jsx` — inline Web Console, API chat, wallet CTA, local passport and memory persistence.
- 修改：`frontend-v4/index.html` — load only web-only preview scripts: wallet service, runtime bridge, and v5 landing.
- 修改：`tests/frontend-v4-zealwish.test.ts` — static contract tests for web-only preview and OKX wallet integration.

### 任务 1：写失败测试

**文件：**
- 修改：`tests/frontend-v4-zealwish.test.ts`

- [x] **步骤 1：添加测试断言**

关键断言：

```ts
expect(index).toContain('src="src/v4/wallet-service.jsx"');
expect(index).not.toContain('src="src/v4/app.jsx"');
expect(wallet).toContain('window.ZEALWISH_WALLET');
expect(wallet).toContain('eth_requestAccounts');
expect(landing).toContain('function WebConsoleSection');
expect(landing).toContain('handleSendWebChat');
expect(landing).toContain('handleSavePassport');
expect(landing).toContain('Connect OKX Wallet');
```

- [x] **步骤 2：运行测试验证失败**

运行：`npx vitest run tests/frontend-v4-zealwish.test.ts`

结果：FAIL，缺少 API/wallet/web-console wiring。

### 任务 2：实现钱包服务

**文件：**
- 创建：`frontend-v4/src/v4/wallet-service.jsx`
- 修改：`frontend-v4/index.html`

- [x] **步骤 1：创建最小钱包服务**

实现 `window.ZEALWISH_WALLET`，支持 provider detection、`connect()`、`disconnect()`、`getState()`、`onChange()`、`formatAddress()`。

- [x] **步骤 2：加载脚本**

在 `frontend-v4/index.html` 中加载 `src/v4/wallet-service.jsx`。

- [x] **步骤 3：运行测试验证部分通过**

运行：`npx vitest run tests/frontend-v4-zealwish.test.ts`

结果：钱包服务断言通过，UI/API 断言继续失败。

### 任务 3：实现 HTTP API adapter

**文件：**
- 修改：`frontend-v4/src/v4/ocworld-bridge.jsx`

- [x] **步骤 1：加入 API base resolver**

实现 `resolveApiBase()`，默认本地静态预览使用 `http://127.0.0.1:7291/api`，部署同源使用 `/api`。

- [x] **步骤 2：加入 HTTP methods**

实现 `getHttpApi(path)` 和 `postHttpApi(path, body, timeoutMs)`。

- [x] **步骤 3：接入 chat/image/tts/status**

`sendChat()`、`generateImage()`、`synthesizeAndPlay()`、status helpers 先走 HTTP API，再走 Electron，最后 fallback。

### 任务 4：接入 Web Console UI

**文件：**
- 修改：`frontend-v4/src/v5/zealwish-landing.jsx`
- 修改：`frontend-v4/index.html`

- [x] **步骤 1：Landing wallet CTA**

Top bar 与 hero 显示 `Connect OKX Wallet`，连接后显示短地址。

- [x] **步骤 2：Inline Web Console**

实现 `WebConsoleSection`，包含 create/talk/memory/world/rewind/settings 模块。

- [x] **步骤 3：API chat 与 local persistence**

`handleSendWebChat` 调用 `window.OCRuntime.sendChat`；passport 与 memories 写入 localStorage；passport 可导出 JSON。

- [x] **步骤 4：运行测试**

运行：`npx vitest run tests/frontend-v4-zealwish.test.ts`

结果：PASS。

### 任务 5：完整验证

**文件：**
- 不新增文件。

- [x] **步骤 1：运行单测**

运行：`npx vitest run tests/frontend-v4-zealwish.test.ts`

结果：PASS。

- [x] **步骤 2：运行构建**

运行：`npm run build`

结果：PASS。

- [x] **步骤 3：本地浏览器验证**

运行 API：`cd ocworld-web && API_PORT=7291 npm run dev:api`

运行预览：`python3 -m http.server 8789 --bind 127.0.0.1 --directory frontend-v4`

打开：`http://127.0.0.1:8789/index.html`

预期：页面显示 OKX 钱包 CTA；未安装钱包时显示清晰错误；API server 可被调用，失败时保留 browser fallback。
