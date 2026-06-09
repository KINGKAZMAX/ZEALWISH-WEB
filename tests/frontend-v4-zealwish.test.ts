import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { createHash } from "node:crypto";

const root = process.cwd();
const indexPath = join(root, "frontend-v4", "index.html");
const landingPath = join(root, "frontend-v4", "src", "v5", "zealwish-landing.jsx");
const architecturePath = join(root, "docs", "architecture", "web-architecture.md");
const chinesePattern = /[\u4e00-\u9fff]/;
const expectedMainCharacterHash = "c8b5166f56b2fbb5e58999cea670732a5e6516f8b9a4b2f07aa1ae6ffe11cf4c";

describe("frontend-v4 ZEALWISH Web3 landing", () => {
  it("routes the active preview to the ZEALWISH v5 landing entry", () => {
    const index = readFileSync(indexPath, "utf8");

    expect(index).toContain("ZEALWISH");
    expect(index).toContain("src/v5/zealwish-landing.jsx");
    expect(index).toContain("V4 app shell components");
    expect(index).not.toContain("OCWORLD");
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
