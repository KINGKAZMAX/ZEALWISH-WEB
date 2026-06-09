const { useEffect, useState, useCallback } = React;

const bootLines = [
  "ZEALWISH SIGNAL ONLINE",
  "CHARACTER BIRTH RITUAL READY",
  "FIRST CONVERSATION CHANNEL OPEN",
  "MEMORY VAULT PERMISSIONED",
  "OKX WALLET API ROUTE STANDBY",
  "WORLDS PORTABILITY PATH ARMED"
];

const journey = [
  {
    code: "01 / Birth",
    title: "Character Birth Ritual",
    body: "Shape visual identity, personality, origin, voice direction, and first words before the character enters the world."
  },
  {
    code: "02 / Talk",
    title: "First Conversation",
    body: "Move immediately from creation into a first meeting so the character feels alive, not generated and abandoned."
  },
  {
    code: "03 / Memory",
    title: "Memory Vault",
    body: "Turn meaningful facts, promises, preferences, and relationship milestones into editable user-owned memory records."
  },
  {
    code: "04 / Passport",
    title: "Character Passport",
    body: "Create a portable identity layer only after the user understands what the character is and what should be preserved."
  },
  {
    code: "05 / Worlds",
    title: "Worlds Portability",
    body: "Prepare the character to travel into games, creator spaces, agent surfaces, and future companion environments."
  }
];

const ownershipProofs = [
  ["Wallet-owned AI character", "The character identity starts as a user-controlled profile, not a rented account."],
  ["Character Passport NFT", "NFT is not the product. Ownership is. The passport is a representation of identity, permission, and provenance."],
  ["Blockchain Anchor", "Ownership proofs and future export permissions can live on neutral rails without exposing private memories."],
  ["Built for ownership, not speculation", "ZEALWISH should explain control, recovery, portability, and consent instead of token hype."]
];

const passportSteps = [
  ["Draft", "Create passport draft", "Save identity, personality, first memory, and export permissions before any wallet action."],
  ["OKX", "Connect with OKX Wallet API", "Use wallet detection and account connection as the passport boundary, not the first screen."],
  ["Sign", "Sign ownership intent", "Let the user verify what identity and permissions will be bound to the character."],
  ["Carry", "Export to future worlds", "Keep memory private by default while allowing approved proofs and permissions to travel."]
];

const appTabs = [
  {
    id: "birth",
    label: "Character Birth",
    title: "Character Birth Ritual",
    primary: "A guided ritual replaces the old form. The user tunes style, origin, personality, relationship intent, and first words.",
    sideTitle: "Birth fields",
    stats: [["Visual identity", "Signal red avatar"], ["Personality", "Warm, curious, self-directed"], ["Origin", "User-created digital self"], ["Next action", "Start first meeting"]]
  },
  {
    id: "conversation",
    label: "First Conversation",
    title: "First Conversation",
    primary: "The first chat is the proof that the character exists. It should ask permission before remembering anything sensitive.",
    sideTitle: "Conversation states",
    stats: [["Reply state", "Thinking"], ["Memory prompt", "Ask before saving"], ["Relationship", "Day 001"], ["Mode", "Companion"]]
  },
  {
    id: "memory",
    label: "Memory Vault",
    title: "Memory Vault",
    primary: "Memory becomes the spine of the relationship. Every record stays editable, deletable, private by default, and export-ready only with consent.",
    sideTitle: "Vault records",
    stats: [["Preferences", "Private"], ["Milestones", "User approved"], ["World lore", "Portable"], ["Vault hash", "Draft only"]]
  },
  {
    id: "passport",
    label: "Character Passport",
    title: "Character Passport",
    primary: "Wallet connection happens after the passport draft is valuable. OKX Wallet API can provide the account connection path for ownership actions.",
    sideTitle: "Passport readiness",
    stats: [["Identity", "Ready"], ["First memory", "Saved"], ["OKX Wallet", "Connect when ready"], ["Mint state", "Optional draft"]]
  },
  {
    id: "worlds",
    label: "Worlds Portability",
    title: "Worlds Portability",
    primary: "The character should not be trapped inside one chat UI. It needs export rules for games, creator worlds, desktop companions, and future agent surfaces.",
    sideTitle: "Destination checks",
    stats: [["Game avatar", "Visual pack"], ["Creator world", "Lore pack"], ["Desktop runtime", "Memory sync"], ["Agent surface", "Permission scope"]]
  }
];

function TopBar({ onLaunchApp }) {
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="ZEALWISH home">ZEALWISH</a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#birth">Birth</a>
        <a href="#conversation">Conversation</a>
        <a href="#memory">Memory</a>
        <a href="#passport">Passport</a>
        <a href="#worlds">Worlds</a>
      </nav>
      <a className="wallet-button edge" href="#app" onClick={onLaunchApp}>Open Product Path</a>
    </header>
  );
}

function BootLog() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= bootLines.length) return undefined;
    const timer = setTimeout(() => setShown(shown + 1), 320);
    return () => clearTimeout(timer);
  }, [shown]);

  return (
    <div className="system-panel edge">
      <h3 className="mono">ZEALWISH Kernel</h3>
      {bootLines.slice(0, shown).map((line, index) => (
        <p className="mono" key={line}><span style={{ color: "var(--red)" }}>0{index}</span> / {line}</p>
      ))}
      {shown < bootLines.length && <p className="mono" style={{ color: "var(--red)" }}>awaiting signal...</p>}
    </div>
  );
}

function Hero({ onLaunchApp }) {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <div className="kicker mono">AI character life system / wallet-ready ownership path</div>
        <h1 className="display">ZEALWISH</h1>
        <h2 className="display" aria-label="Create. Grow. Own your AI character.">Create. Grow. <span>Own</span> your AI character.</h2>
        <p>
          Free will for your digital self. ZEALWISH turns a character into a living identity: born through ritual, deepened by conversation, protected by memory, and prepared for portable ownership.
        </p>
        <div className="actions">
          <a className="primary-button edge" href="#app" onClick={onLaunchApp}>Create Character Passport</a>
          <a className="secondary-button edge" href="#birth">View Product Path</a>
        </div>
        <div className="signal-strip mono" aria-label="Product path">
          {journey.map((item, index) => (
            <div key={item.code}><strong>{String(index + 1).padStart(2, "0")}</strong><span>{item.title}</span></div>
          ))}
        </div>
      </div>

      <div className="character-stage" aria-label="ZEALWISH character preview">
        <div className="frame edge" />
        <div className="character-card">
          <div className="character-tag mono edge">ZEALWISH-0001 / Alive</div>
          <img src="assets/zealwish-main-character.png" alt="ZEALWISH red signal AI character" />
          <BootLog />
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const words = ["ZEALWISH", "Character Birth Ritual", "First Conversation", "Memory Vault", "Character Passport", "OKX Wallet API", "Worlds Portability", "Own the identity"];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track mono">
        {[...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}><b>ZEALWISH</b> / {word}</span>
        ))}
      </div>
    </div>
  );
}

function JourneySection() {
  return (
    <section id="birth" className="section">
      <div className="section-heading">
        <div className="eyebrow mono">Next product path</div>
        <h2 className="display">A character life system, not an old creation form.</h2>
        <p>
          The web product should move through one clear sequence: Character Birth ritual, First Conversation, Memory Vault, Character Passport, then Worlds Portability.
        </p>
      </div>
      <div className="journey-grid">
        {journey.map((item) => (
          <article className="journey-card" key={item.code} id={item.title === "First Conversation" ? "conversation" : undefined}>
            <div className="code mono">{item.code}</div>
            <div>
              <h3 className="display">{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MemorySection() {
  const cards = [
    ["Private by default", "The user must see and edit what ZEALWISH remembers before anything becomes portable."],
    ["Relationship timeline", "Milestones, routines, promises, and lore become structured continuity rather than disposable chat history."],
    ["Permissioned export", "Only approved summaries, hashes, and permissions should move into a passport or future world."]
  ];
  return (
    <section id="memory" className="section">
      <div className="split edge">
        <div className="split-panel">
          <div className="eyebrow mono">Memory creates continuity</div>
          <h2 className="display">The Memory Vault is the emotional spine.</h2>
          <p>
            ZEALWISH should make memory visible, controllable, and portable only when the user chooses. This is where the character becomes more than a prompt.
          </p>
        </div>
        <div className="protocol-grid">
          {cards.map(([title, body], index) => (
            <article className="protocol-card" key={title}>
              <div className="code mono">MEM / 0{index + 1}</div>
              <h3 className="display">{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OwnershipThesisSection() {
  return (
    <section id="ownership" className="section">
      <div className="split edge">
        <div className="split-panel">
          <div className="eyebrow mono">Built for ownership, not speculation</div>
          <h2 className="display">NFT is not the product. Ownership is.</h2>
          <p>
            ZEALWISH uses wallet and chain language only to explain who controls a living character identity, how it can be recovered, and how it can travel.
          </p>
        </div>
        <div className="protocol-grid">
          {ownershipProofs.map(([title, body], index) => (
            <article className="protocol-card" key={title}>
              <div className="code mono">OWN / 0{index + 1}</div>
              <h3 className="display">{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PassportSection() {
  return (
    <section id="passport" className="section">
      <div className="section-heading">
        <div className="eyebrow mono">Ownership after value</div>
        <h2 className="display">Character Passport connects wallet only when it matters.</h2>
        <p>
          OKX wallet should be introduced as ownership infrastructure for account connection, signing, and future passport actions. It should not block the first creative moment.
        </p>
        <div className="actions">
          <a className="secondary-button edge" href="https://web3.okx.com/zh-hant/onchainos/dev-docs/wallet/wallet-api-introduction" target="_blank" rel="noreferrer">OKX Wallet API</a>
          <a className="secondary-button edge" href="https://web3.okx.com/zh-hans/help/how-do-i-create-import-an-okx-wallet" target="_blank" rel="noreferrer">OKX Wallet Guide</a>
        </div>
      </div>
      <div className="wallet-rail">
        {passportSteps.map(([label, title, body]) => (
          <article className="wallet-step edge" key={label}>
            <div className="label mono">{label}</div>
            <div className="copy">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorldsSection() {
  return (
    <section id="worlds" className="section">
      <div className="section-heading">
        <div className="eyebrow mono">Beyond one chat window</div>
        <h2 className="display">Worlds Portability turns ZEALWISH into infrastructure.</h2>
        <p>
          Characters should carry visual identity, personality, memory permissions, and passport proof into games, creator spaces, desktop companions, and future agent worlds.
        </p>
      </div>
      <div className="journey-grid">
        {[
          ["GAME", "Playable companion", "Bring the character into game-like scenes with identity and relationship context."],
          ["CREATOR", "Style and lore market", "Creators can publish skins, scenes, prompts, and world packs without owning the user's bond."],
          ["DESKTOP", "Persistent side presence", "A ZEALWISH character can later live beside the user outside the browser."],
          ["AGENT", "Permissioned agent surface", "Future agents can request scoped access instead of reading everything."],
          ["EXPORT", "Portable package", "The user can recover, export, or move the character when a platform changes."]
        ].map(([code, title, body]) => (
          <article className="journey-card" key={code}>
            <div className="code mono">{code}</div>
            <div>
              <h3 className="display">{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductApp({ onClose }) {
  const [active, setActive] = useState("birth");
  const current = appTabs.find((tab) => tab.id === active) || appTabs[0];
  return (
    <div className="app-shell" role="dialog" aria-label="ZEALWISH product app shell">
      <aside className="app-side">
        <h2 className="display">ZEALWISH</h2>
        <p className="mono">English-only product shell / black-red signal system</p>
        <nav className="app-nav" aria-label="Product path">
          {appTabs.map((tab) => (
            <button key={tab.id} className={tab.id === active ? "active" : ""} onClick={() => setActive(tab.id)}>
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="app-main">
        <div className="app-head">
          <div className="app-copy">
            <div className="eyebrow mono">Live product path</div>
            <h1 className="display">{current.title}</h1>
            <p>{current.primary}</p>
          </div>
          <button className="close-app edge" onClick={onClose}>Back to landing</button>
        </div>
        <div className="app-grid">
          <section className="app-panel edge">
            <h3>{current.sideTitle}</h3>
            <div className="status-list">
              {current.stats.map(([label, value]) => (
                <div key={label}><span>{label}</span><b>{value}</b></div>
              ))}
            </div>
          </section>
          <section className="app-panel edge">
            <h3>Continuity timeline</h3>
            <div className="timeline">
              <div><b>Character Birth Ritual</b>Identity and personality become visible.</div>
              <div><b>First Conversation</b>The user decides what can be remembered.</div>
              <div><b>Memory Vault</b>Records become editable and permissioned.</div>
              <div><b>Character Passport</b>Wallet ownership can be connected through OKX Wallet API when needed.</div>
              <div><b>Worlds Portability</b>The character prepares to move beyond one platform.</div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function FinalCTA({ onLaunchApp }) {
  return (
    <section className="final-cta">
      <div>
        <h2 className="display">Your AI. Your memory. Your will.</h2>
        <p>
          ZEALWISH is the English-only AI character platform for people who want to create, grow, own, and carry a digital self across future worlds.
        </p>
        <div className="actions">
          <a className="primary-button edge" href="#app" onClick={onLaunchApp}>Open Product Path</a>
          <a className="secondary-button edge" href="#passport">View Passport Layer</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [showApp, setShowApp] = useState(() => window.location.hash === "#app");
  useEffect(() => {
    const syncHash = () => setShowApp(window.location.hash === "#app");
    window.addEventListener("hashchange", syncHash);
    syncHash();
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  const handleLaunchApp = useCallback(() => {
    window.location.hash = "app";
    setShowApp(true);
  }, []);
  const handleCloseApp = useCallback(() => {
    history.pushState("", document.title, window.location.pathname + window.location.search);
    setShowApp(false);
  }, []);

  return (
    <>
      <main className="shell">
        <TopBar onLaunchApp={handleLaunchApp} />
        <Hero onLaunchApp={handleLaunchApp} />
        <Ticker />
        <JourneySection />
        <MemorySection />
        <OwnershipThesisSection />
        <PassportSection />
        <WorldsSection />
        <FinalCTA onLaunchApp={handleLaunchApp} />
      </main>
      {showApp && <ProductApp onClose={handleCloseApp} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
