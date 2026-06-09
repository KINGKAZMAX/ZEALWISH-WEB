# ZEALWISH Web Product Blueprint

## Executive Decision

ZEALWISH should become a web-first AI character life system, not another chat inbox and not a speculative NFT showcase.

The web product should let a user create a living AI character, build a relationship with it over time, inspect what it remembers, and bind its identity to an ownership layer that can move across future games, creator worlds, and agent surfaces.

The approved product thesis remains:

> NFT is not the product. Ownership is.

The web app should therefore be designed around six product primitives:

1. Visual identity.
2. Personality.
3. Memory.
4. Relationship growth.
5. Ownership.
6. Cross-platform portability.

## What the Current Legacy Web App Proves

Reference URL inspected: `https://jb.hackathon.frp.clouddreamai.com/create-oc`

### Runtime evidence

- The deployed page is still a Vite development build, loading `/@vite/client`, React Refresh, `/src/main.tsx`, and live TypeScript sources.
- The document language is still `zh` and the browser title still uses the old OCWORLD positioning.
- The app has a splash screen before the requested `/create-oc` route, so a user trying to create a character does not immediately land on creation.
- After bypassing the splash, `/create-oc` exposes a functional form: visual style chips, photo upload, character prompt, generate button, two preview slots, confirm button, and local storage persistence.
- The visible web shell mixes the old OCWORLD brand with the newer English route copy.

### What is worth keeping

- Character creation as the first interactive moment.
- Style chips as a fast creative affordance.
- Optional reference photo upload.
- Prompt refinement and generated preview selection.
- Persistent local state while the user experiments.
- A left navigation model for deeper app areas.

### What is not fit for the new ZEALWISH direction

- It feels like an internal demo shell rather than a consumer product.
- Creation is a utility form, not a birth ritual for a character.
- Memory, relationship growth, and ownership are not visible in the creation flow.
- The old brand model is still present in information architecture, copy, and runtime metadata.
- Web3 is absent from the actual product experience; ownership exists only in landing-page messaging.
- There is no clear bridge from creation to first conversation, memory vault, passport, or portability.
- The dev-server deployment pattern is not production-ready.

## Global Product Research Summary

Research was reviewed on June 10, 2026.

### AI companion and character products

| Product | What the web UX teaches ZEALWISH | Gap ZEALWISH can own |
|---|---|---|
| Character.AI | Memory is now a first-class UX surface: Story Memory, Facts, pinning, memory usage, and memory transfer between chats. | Memory is still platform-resident; ZEALWISH can make memory a user-owned vault and passport permission layer. |
| Replika | The homepage sells emotional continuity through memory, routines, relationships, calls, selfies, and long-term stories. | Strong relationship framing, but no portable owned character identity. |
| Nomi.ai | Strong positioning around humanlike memory, multiple relationship modes, custom backstory, voice, proactive messages, images, and group dynamics. | Relationship depth is clear, but ownership and cross-platform identity are not central. |
| Kindroid | Power-user memory architecture is explicit: backstory, key memories, directives, long-term memory, journals, group context, shared memory toggles, and voice memory. | Powerful but complex; ZEALWISH should expose memory as an understandable character life record. |
| Talkie | Discovery-first marketplace pattern: create, discover, search, memory, community, recommendation rails, character cards, and instant chat CTAs. | High engagement but noisy; ZEALWISH should avoid becoming only a feed of disposable characters. |

### Avatar, game, and embodied character infrastructure

| Product | What the web UX teaches ZEALWISH | Gap ZEALWISH can own |
|---|---|---|
| Ready Player Me | The historic promise was a cross-app avatar creator; as of Jan 31, 2026 its services were discontinued, which is a warning against relying on one centralized portability vendor. | ZEALWISH should treat portability as a standard and export layer, not a single vendor dependency. |
| Genies | Expressive characters, developer SDKs, engine-ready avatars, persistent identity across experiences. | Strong avatar identity, but ZEALWISH can combine identity with conversational memory and user-owned provenance. |
| Convai | Character mind, embodied avatar, deployment to custom environments, long-term memory, multilingual support, emotions, guardrails, and game-engine integrations. | Excellent embodied NPC direction; ZEALWISH should translate this into consumer-owned OC companions. |
| Inworld | Real-time voice, model routing, emotional voice direction, low-latency interactive media, and companion-scale infrastructure. | Useful infrastructure pattern, but ZEALWISH needs a consumer-facing relationship and ownership layer. |

### Ownership infrastructure

ERC-6551 is directly relevant because it defines token-bound accounts: NFTs can own assets and interact with applications. This maps cleanly to a future Character Passport where the character identity can hold assets, permissions, memories, badges, creator items, and cross-world credentials.

ZEALWISH should still hide blockchain complexity by default. A user should understand the product as:

> I own my character's identity, memories, and future portability.

Not:

> I bought a speculative NFT.

## Recommended Product Model

### Core product sentence

ZEALWISH is a web platform where anyone can create a living AI character, grow a relationship through memory, and own the character's portable identity.

### Primary user journey

1. Land on ZEALWISH and understand the thesis: create, grow, own.
2. Start the Character Birth ritual.
3. Create visual identity from style, reference, prompt, and starter traits.
4. Define personality through origin, voice, boundaries, and relationship intent.
5. Meet the character in a first conversation.
6. Save the first meaningful memory.
7. See the character evolve on a Relationship Timeline.
8. Open the Memory Vault and decide what is private, exportable, or passport-linked.
9. Create a Character Passport.
10. Connect wallet only when ownership becomes useful, not at the first click.
11. Export or connect the character to future worlds, games, creator profiles, and desktop runtime.

### The product should have seven top-level areas

```text
/                     Landing page
/app/create           Character Birth ritual
/app/home             Character Home / Living Room
/app/chat             Relationship conversation
/app/memory           Memory Vault and Relationship Timeline
/app/passport         Ownership, permissions, provenance, export
/app/worlds           Future integrations, games, creator worlds
/app/settings         Safety, privacy, model, wallet, export, deletion
```

## Information Architecture

### 1. Character Birth

Purpose: turn creation into an emotionally memorable event.

Required modules:

- Style selection: Anime, Pixel, Figure, Cyber, Comic, Arcade, Custom.
- Reference input: photo upload, text prompt, or start from archetype.
- Personality seed: warmth, humor, initiative, honesty, independence, romance-safe controls, boundaries.
- Origin: why this character exists and what it wants.
- Voice and presence: text only now, voice-ready later.
- First words: generate a first greeting before the user enters chat.
- Save checkpoint: create draft without wallet.

Cool interactions:

- Character silhouette assembles as the user answers.
- Each choice lights up a passport field.
- Prompt editing feels like tuning a character soul, not filling a form.
- Preview cards show not only images, but also likely behavior and first-message tone.
- A progress rail uses product language: Spark, Shape, Soul, Meet, Passport.

### 2. Character Home

Purpose: make the character feel alive between chats.

Required modules:

- Character status card: name, day count, relationship stage, current mood, memory freshness.
- Today's signal: one short proactive note from the character.
- Continue buttons: Talk, Remember this, Dress up, Update passport.
- Micro-scenes: the character can idle, react, or visually acknowledge important events.
- Quick actions: save memory, add fact, ask for reflection, start ritual.

Cool interactions:

- Ambient idle animation with reduced-motion support.
- Relationship ring that grows from meaningful moments, not gamified spam.
- Memory pulse: when a memory is recorded, it becomes a visible artifact.

### 3. Conversation

Purpose: make chat feel like relationship growth, not a generic LLM window.

Required modules:

- Chat thread with character presence and voice-ready states.
- Memory capture affordance on each message.
- Context drawer: what the character knows, what it is using now, and what is private.
- Relationship events: first joke, first promise, first disagreement, first comfort, first shared world.
- Mode switch: casual talk, roleplay, planning, reflection, worldbuilding.

Cool interactions:

- Long-press or hover a message to pin it to memory.
- Character can ask permission before saving sensitive details.
- A memory meter shows continuity without implying surveillance.
- Reply states are expressive: thinking, remembering, searching memory, speaking.

### 4. Memory Vault

Purpose: turn memory into the emotional spine and ownership asset.

Required modules:

- Memory graph: people, places, preferences, routines, promises, world lore, relationship milestones.
- Timeline: chronological moments that shaped the character.
- Memory cards with source, date, sensitivity, edit/delete, and export permissions.
- Private/off-chain by default.
- Passport-linked hashes only for memories the user intentionally anchors.
- Import/export for desktop runtime and future platforms.

Cool interactions:

- Memories appear as collectible but editable artifacts.
- Drag a memory into Passport to mark it portable.
- Relationship stages unlock narrative summaries, not manipulative streak rewards.

### 5. Character Passport

Purpose: make ownership concrete without overwhelming users with crypto mechanics.

Required modules:

- Passport overview: character ID, owner, origin, visual identity, personality schema, memory vault status, provenance.
- Wallet connection as an optional advanced step.
- Mint readiness checklist: identity complete, first memory saved, privacy confirmed, export settings chosen.
- Permission controls: what future apps can read, request, or write.
- Recovery and export: download passport package before any chain action.
- Chain status: draft, signed, minted, transferred, revoked permissions.

Cool interactions:

- Passport card flips from human-readable side to technical proof side.
- Wallet connection happens at the passport boundary, not at the beginning.
- Ownership language stays human: own, carry, recover, permit, revoke.

### 6. Worlds

Purpose: show the future of portability.

Required modules:

- Coming integrations: desktop pet, game NPC, creator profile, social avatar, agent workspace.
- Export package preview.
- SDK/API placeholder for future partner worlds.
- World compatibility checklist: visual asset, personality schema, memory permissions, passport proof.

Cool interactions:

- A world map of destination surfaces.
- Each world shows what the character can carry there.

## UX Principles

1. Ask for wallet late. The first magical moment should be character creation, not a wallet modal.
2. Make memory visible and controllable. Users must know what is remembered, why, and how to change it.
3. Never hide safety and deletion controls. Companionship products need clear offboarding, privacy, age, and consent flows.
4. Do not over-gamify relationships. Relationship growth should reward meaningful continuity, not dependency loops.
5. Keep Web3 copy concrete. Use ownership, identity, provenance, portability, permissions, and recovery.
6. Use immersive motion sparingly. The product can feel cinematic, but every animation needs a reduced-motion fallback.
7. Design for creators and lonely users without making either feel judged.
8. Keep character creation skippable and resumable.

## Visual and Interaction Direction

Use a dark immersive character-console style, but soften it with living-character warmth.

Recommended design stack from the internal UI/UX search:

- Pattern: immersive interactive experience.
- Style blend: dark OLED base, retro-futuristic signal layer, tactile character cards.
- Avoid: pure cyberpunk clutter, static NFT gallery, forced tutorials, unskippable onboarding.
- Motion: 150-300ms micro-interactions, transform and opacity only, reduced-motion support.
- Typography direction: keep the current sharp ZEALWISH display voice for brand; pair with a more readable rounded or geometric body font in app surfaces.
- Color direction: black or midnight background, red signal accent, purple ownership accent, warm gold for value and passport milestones.

## Frontend and Backend Boundary

The web frontend should own:

- App routes, view composition, responsive layout, interaction states, copy, accessibility, and client-side draft state.
- A typed client for character creation, chat, memory, passport, wallet, and export.

The backend or host services should own:

- Model calls.
- Image generation.
- Voice and speech processing.
- Memory extraction and recall.
- Sensitive storage.
- Wallet signing and chain writes.
- Export package generation.
- Safety policy enforcement.

The web app must never call model providers or blockchain providers directly from scattered UI components. Use typed adapters only.

## Recommended Data Model

```text
User
  id
  walletAccounts[]
  privacySettings

Character
  id
  ownerUserId
  displayName
  visualIdentity
  personalitySeed
  origin
  relationshipStage
  createdAt

Memory
  id
  characterId
  type
  sourceMessageId
  summary
  sensitivity
  visibility
  userApproved
  hash
  createdAt

Conversation
  id
  characterId
  mode
  messages[]

Passport
  id
  characterId
  status
  walletAddress
  tokenContract
  tokenId
  tokenBoundAccount
  exportManifestHash
  permissionRules[]

WorldConnection
  id
  characterId
  target
  status
  allowedScopes[]
```

## Product Roadmap

### P0: Product definition and app shell

- Ship the English web product blueprint.
- Replace old OCWORLD route IA with ZEALWISH route IA.
- Keep landing page and web app entrypoints clearly separated.
- Create production-safe app shell routes for Create, Home, Chat, Memory, Passport, Worlds, Settings.
- Replace the legacy form with a guided Character Birth ritual.

### P1: Memory-first companion loop

- Add first conversation after creation.
- Add save-to-memory interaction.
- Add Memory Vault with editable cards.
- Add Relationship Timeline.
- Add privacy and deletion controls.

### P2: Ownership layer

- Add Passport draft.
- Add export manifest.
- Add wallet connection at Passport only.
- Add optional mint readiness checklist.
- Add token-bound account architecture exploration for character-owned assets.

### P3: Worlds and portability

- Add import/export packages.
- Add desktop runtime handoff.
- Add partner-world mock connector.
- Add SDK documentation for future integrations.

## Verdict on the Legacy Architecture

The previous architecture is useful as a prototype, but it should not define the next ZEALWISH web product.

Keep the idea of character creation, local draft persistence, and app navigation. Replace the brand, the production model, and the experience architecture.

The new web product should start with a Character Birth ritual, then immediately prove memory and relationship continuity, then introduce ownership as the passport that protects the character's future.

The winning web product is not a prettier form. It is a living-character operating system in the browser.

## Source URLs

- Character.AI Memory: `https://blog.character.ai/memory/`
- Character.AI April Update: `https://blog.character.ai/pipsqueak2-and-more/`
- Character.AI Under-18 Safety Update: `https://blog.character.ai/an-update-on-changes-to-our-under-18-experience/`
- Replika: `https://replika.com/`
- Nomi.ai: `https://nomi.ai/`
- Kindroid Memory: `https://kindroid.ai/docs/article/memory/`
- Kindroid Groupchats: `https://kindroid.ai/docs/article/groupchats/`
- Talkie: `https://www.talkie-ai.com/`
- Ready Player Me: `https://readyplayer.me/`
- Genies: `https://genies.com/`
- Convai: `https://convai.com/`
- Inworld: `https://inworld.ai/`
- ERC-6551: `https://eips.ethereum.org/EIPS/eip-6551`
