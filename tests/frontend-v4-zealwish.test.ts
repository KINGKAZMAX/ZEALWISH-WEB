import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const root = process.cwd();
const rootIndexPath = join(root, "index.html");
const indexPath = join(root, "frontend-v4", "index.html");
const landingPath = join(root, "frontend-v4", "src", "v5", "zealwish-landing.jsx");
const architecturePath = join(root, "docs", "architecture", "web-architecture.md");
const productBlueprintPath = join(root, "docs", "product", "zealwish-web-product-blueprint.md");
const chinesePattern = /[\u4e00-\u9fff]/;
const expectedMainCharacterHash = "c8b5166f56b2fbb5e58999cea670732a5e6516f8b9a4b2f07aa1ae6ffe11cf4c";

describe("frontend-v4 ZEALWISH Web3 landing", () => {
  it("keeps the root Vite entry branded as ZEALWISH English-only", () => {
    const rootIndex = readFileSync(rootIndexPath, "utf8");

    expect(rootIndex).toContain('lang="en"');
    expect(rootIndex).toContain("ZEALWISH");
    expect(rootIndex).not.toContain("OC World");
    expect(rootIndex).not.toContain("OCWORLD");
    expect(rootIndex).not.toMatch(chinesePattern);
  });

  it("routes the active preview to the ZEALWISH v5 landing entry", () => {
    const index = readFileSync(indexPath, "utf8");

    expect(index).toContain("ZEALWISH");
    expect(index).toContain("src/v5/zealwish-landing.jsx");
    expect(index).toContain("ZEALWISH product app shell");
    expect(index).not.toContain("src/v4/");
    expect(index).not.toContain("Teko");
    expect(index).not.toContain("Inter:wght");
    expect(index).not.toContain("OCWORLD");
    expect(index).not.toMatch(chinesePattern);
  });

  it("ships the approved English free-will and Web3 ownership positioning", () => {
    expect(existsSync(landingPath)).toBe(true);
    const landing = readFileSync(landingPath, "utf8");

    expect(landing).toContain("Create. Grow. Own your AI character.");
    expect(landing).toContain("Free will for your digital self.");
    expect(landing).toContain("Character Birth Ritual");
    expect(landing).toContain("First Conversation");
    expect(landing).toContain("Memory Vault");
    expect(landing).toContain("Character Passport");
    expect(landing).toContain("Worlds Portability");
    expect(landing).toContain("OKX Wallet");
    expect(landing).toContain("NFT is not the product. Ownership is.");
    expect(landing).toContain("Wallet-owned AI character");
    expect(landing).toContain("Character Passport NFT");
    expect(landing).toContain("Blockchain Anchor");
    expect(landing).toContain("Built for ownership, not speculation");
    expect(landing).toContain("Create Character Passport");
    expect(landing).toContain("ZEALWISH-0001 / Alive");
    expect(landing).not.toContain("OCWORLD");
    expect(landing).not.toContain("OC-0001");
    expect(landing).not.toContain("Create Your OC");
    expect(landing).not.toContain("window.ZEALWISH_MOUNT_APP");
    expect(landing).not.toMatch(chinesePattern);
  });

  it("keeps OKX wallet onboarding at the Character Passport boundary", () => {
    const landing = readFileSync(landingPath, "utf8");

    expect(landing).toContain("Wallet connection happens at the Character Passport boundary, not on the first screen.");
    expect(landing).toContain("Connect OKX Wallet");
    expect(landing).not.toContain("How to create or import an OKX Wallet");
    expect(landing).not.toContain("https://web3.okx.com");
    expect(landing).not.toContain("wallet-api-introduction");
    expect(landing).not.toContain("how-do-i-create-import-an-okx-wallet");
    expect(landing.indexOf("Character Birth Ritual")).toBeLessThan(landing.indexOf("First Conversation"));
    expect(landing.indexOf("First Conversation")).toBeLessThan(landing.indexOf("Memory Vault"));
    expect(landing.indexOf("Memory Vault")).toBeLessThan(landing.indexOf("Character Passport"));
    expect(landing.indexOf("Character Passport")).toBeLessThan(landing.indexOf("Worlds Portability"));
  });

  it("wires the passport CTA into the product path launcher without runtime globals", () => {
    const landing = readFileSync(landingPath, "utf8");

    expect(landing).toContain("function PassportSection({ onLaunchApp })");
    expect(landing).toContain("<PassportSection onLaunchApp={handleLaunchApp} />");
    expect(landing).not.toContain("function PassportSection() {");
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


  it("documents the target ZEALWISH web product blueprint", () => {
    expect(existsSync(productBlueprintPath)).toBe(true);
    const blueprint = readFileSync(productBlueprintPath, "utf8");

    expect(blueprint).toContain("ZEALWISH is a web platform where anyone can create a living AI character");
    expect(blueprint).toContain("Character Birth ritual");
    expect(blueprint).toContain("Memory Vault and Relationship Timeline");
    expect(blueprint).toContain("Character Passport");
    expect(blueprint).toContain("Wallet connection happens at the passport boundary");
    expect(blueprint).toContain("https://eips.ethereum.org/EIPS/eip-6551");
    expect(blueprint).not.toMatch(chinesePattern);
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
