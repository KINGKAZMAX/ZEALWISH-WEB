import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const root = process.cwd();
const rootIndexPath = join(root, "index.html");
const indexPath = join(root, "frontend-v4", "index.html");
const landingPath = join(root, "frontend-v4", "src", "v5", "zealwish-landing.jsx");
const walletPath = join(root, "frontend-v4", "src", "v4", "wallet-service.jsx");
const walletRuntimePath = join(root, "frontend-v4", "src", "v4", "wallet-service.js");
const topbarPath = join(root, "frontend-v4", "src", "v4", "topbar.jsx");
const architecturePath = join(root, "docs", "architecture", "web-architecture.md");
const chinesePattern = /[\u4e00-\u9fff]/;
const expectedMainCharacterHash = "c8b5166f56b2fbb5e58999cea670732a5e6516f8b9a4b2f07aa1ae6ffe11cf4c";

describe("frontend-v4 ZEALWISH Web3 landing", () => {
  it("keeps the Vite/root entry branded as ZEALWISH English-only", () => {
    const rootIndex = readFileSync(rootIndexPath, "utf8");

    expect(rootIndex).toContain('lang="en"');
    expect(rootIndex).toContain("ZEALWISH");
    expect(rootIndex).not.toContain("OC World");
    expect(rootIndex).not.toContain("OCWORLD");
    expect(rootIndex).not.toContain("EcomCanvas");
    expect(rootIndex).not.toMatch(chinesePattern);
  });

  it("routes the active preview to the ZEALWISH v5 landing entry", () => {
    const index = readFileSync(indexPath, "utf8");

    expect(index).toContain("ZEALWISH");
    expect(index).toContain("src/v5/zealwish-landing.jsx");
    expect(index).toContain("ZEALWISH web-only preview components");
    expect(index).toContain('src="src/v4/wallet-service.jsx"');
    expect(index).not.toContain('src="src/v4/wallet-service.js"');
    expect(index).not.toContain('src="src/v4/app.jsx"');
    expect(index).not.toContain('src="src/v4/ocworld-bridge.jsx"');
    expect(index).not.toContain('src="tweaks-panel.jsx"');
    expect(index).not.toMatch(/ocworld/i);
    expect(index).not.toMatch(/app shell/i);
    expect(index).not.toMatch(chinesePattern);
  });

  it("ships the approved English free-will and Web3 ownership positioning", () => {
    expect(existsSync(landingPath)).toBe(true);
    const landing = readFileSync(landingPath, "utf8");

    expect(landing).toContain("Create. Grow. Own your AI character.");
    expect(landing).toContain("Free will for your digital self.");
    expect(landing).toContain("NFT is not the product. Ownership is.");
    expect(landing).toContain("Wallet-owned AI character");
    expect(landing).toContain("Character Passport NFT");
    expect(landing).toContain("Blockchain Anchor");
    expect(landing).toContain("Built for ownership, not speculation");
    expect(landing).toContain("Create Character Passport");
    expect(landing).not.toContain("OCWORLD");
    expect(landing).not.toMatch(chinesePattern);
  });

  it("implements the product as an inline ZEALWISH web console, not an app shell", () => {
    const landing = readFileSync(landingPath, "utf8");

    expect(landing).toContain("function WebConsoleSection");
    expect(landing).toContain("ZEALWISH Web Console");
    expect(landing).toContain("Open Web Console");
    expect(landing).toContain("const WEB_MODULES");
    for (const moduleId of ["create", "talk", "memory", "world", "rewind", "settings"]) {
      expect(landing).toContain(`id: '${moduleId}'`);
    }
    expect(landing).toContain("setActiveModule");
    expect(landing).toContain("handleSendWebChat");
    expect(landing).toContain("handleSavePassport");
    expect(landing).toContain("handleAddMemory");
    expect(landing).toContain("handleExportPassport");
    expect(landing).toContain("data-zealwish-web-console");
    expect(landing).not.toContain("ZEALWISH_MOUNT_APP");
    expect(landing).not.toContain("data-zealwish-app-shell");
    expect(landing).not.toContain("function AppPortalSection");
    expect(landing).not.toContain("Launch App");
    expect(landing).not.toMatch(/app shell/i);
  });

  it("keeps browser-only web functions in the landing page without Electron runtime", () => {
    const landing = readFileSync(landingPath, "utf8");

    expect(landing).toContain("WEB_CHAT_FALLBACKS");
    expect(landing).toContain("ZEALWISH_BROWSER_AVATAR_FALLBACK");
    expect(landing).toContain("localStorage.setItem('zealwish.web.passport'");
    expect(landing).toContain("localStorage.setItem('zealwish.web.memories'");
    expect(landing).not.toContain("Image generation is only available inside the oc-world Electron runtime.");
    expect(landing).not.toMatch(/ocworld/i);
    expect(landing).not.toMatch(/oc-world/i);
  });

  it("loads an OKX-compatible wallet service and exposes wallet-owned UI actions", () => {
    expect(existsSync(walletPath)).toBe(true);
    const index = readFileSync(indexPath, "utf8");
    const landing = readFileSync(landingPath, "utf8");
    const topbar = readFileSync(topbarPath, "utf8");
    const wallet = readFileSync(walletPath, "utf8");
    const walletRuntime = readFileSync(walletRuntimePath, "utf8");

    expect(index).toContain('src="src/v4/wallet-service.jsx"');
    expect(index).not.toContain('src="src/v4/wallet-service.js"');
    expect(index).not.toContain('src="src/v4/topbar.jsx"');
    expect(wallet).toContain("window.ZEALWISH_WALLET");
    expect(walletRuntime).toContain("window.ZEALWISH_API");
    expect(walletRuntime).toContain("ZEALWISH_DEFAULT_LOCAL_API_BASE");
    expect(wallet).toContain("window.okxwallet");
    expect(wallet).toContain("eip6963:requestProvider");
    expect(wallet).toContain("eth_requestAccounts");
    expect(wallet).toContain("eth_chainId");
    expect(landing).toContain("Connect OKX Wallet");
    expect(landing).toContain("handleConnectWallet");
    expect(landing).toContain("Connect OKX Wallet");
    expect(wallet).not.toMatch(chinesePattern);
  });

  it("documents the preview and architecture contract in English", () => {
    expect(existsSync(architecturePath)).toBe(true);
    const architecture = readFileSync(architecturePath, "utf8");

    expect(architecture).toContain("Current Preview Contract");
    expect(architecture).toContain("Frontend / Backend Separation");
    expect(architecture).toContain("Target Monorepo Shape");
    expect(architecture).toContain("All user-facing product copy must be English.");
    expect(architecture).not.toMatch(chinesePattern);
  });

  it("main visual uses the transparent character PNG", () => {
    const landing = readFileSync(landingPath, "utf8");
    const assetPath = join(root, "frontend-v4", "assets", "zealwish-main-character.png");
    const png = readFileSync(assetPath);

    expect(landing).toContain("assets/zealwish-main-character.png");
    expect(png.subarray(1, 4).toString("ascii")).toBe("PNG");
    expect(png[25]).toBe(6);
    expect(createHash("sha256").update(png).digest("hex")).toBe(expectedMainCharacterHash);
  });
});
