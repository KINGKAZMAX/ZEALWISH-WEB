const { useEffect, useState, useCallback } = React;

const ZEALWISH_BROWSER_AVATAR_FALLBACK = "assets/zealwish-main-character.png";

const bootLines = [
  "CONNECT WALLET HANDSHAKE",
  "CHARACTER PASSPORT READY",
  "MEMORY VAULT HASHED",
  "NFT OWNERSHIP LAYER ARMED",
  "PORTABILITY ROUTE OPEN"
];

const WEB_CHAT_FALLBACKS = [
  "I hear you. Let's turn that into one small next step.",
  "Saved as a character signal. Your passport can grow from moments like this.",
  "Noted. ZEALWISH keeps the character identity close to your wallet, not trapped in a platform.",
  "That belongs in the memory vault. I can keep the thread and carry it forward."
];

const WEB_MODULES = [
  { id: 'create', label: 'Create', code: '01', title: 'Character Passport' },
  { id: 'talk', label: 'Talk', code: '02', title: 'Companion Chat' },
  { id: 'memory', label: 'Memory', code: '03', title: 'Memory Vault' },
  { id: 'world', label: 'World', code: '04', title: 'World Layer' },
  { id: 'rewind', label: 'Rewind', code: '05', title: 'Timeline' },
  { id: 'settings', label: 'Settings', code: '06', title: 'Ownership Settings' }
];

const starterMemories = [
  "First character signal generated.",
  "Wallet ownership route is ready.",
  "Memory vault is waiting for the first real moment."
];

function TopBar({ onOpenConsole, onConnectWallet, wallet }) {
  const walletLabel = wallet?.shortAddress || (wallet?.status === 'connecting' ? 'Connecting...' : 'Connect OKX Wallet');
  return (
    <header className="topbar">
      <a className="brand" href="#top" aria-label="ZEALWISH home">ZEALWISH</a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#web-console">Web Console</a>
        <a href="#create">Create</a>
        <a href="#web3">Web3</a>
        <a href="#memory">Memory</a>
        <a href="#worlds">Worlds</a>
      </nav>
      <div className="topbar-actions">
        <button className="secondary-button edge" onClick={onOpenConsole}>Open Web Console</button>
        <button className="wallet-button edge" onClick={onConnectWallet}>{walletLabel}</button>
      </div>
    </header>
  );
}

function BootLog() {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= bootLines.length) return undefined;
    const timer = setTimeout(() => setShown(shown + 1), 360);
    return () => clearTimeout(timer);
  }, [shown]);

  return (
    <div className="system-panel edge">
      <h3 className="mono">Character Kernel</h3>
      {bootLines.slice(0, shown).map((line, index) => (
        <p className="mono" key={line}><span style={{ color: "var(--red)" }}>0{index}</span> / {line}</p>
      ))}
      {shown < bootLines.length && <p className="mono" style={{ color: "var(--red)" }}>awaiting signal...</p>}
    </div>
  );
}

function Web3Rail() {
  const nodes = [
    ["WALLET", "Connect wallet", "User-owned account"],
    ["AI", "Create character", "Personality and voice"],
    ["NFT", "Mint passport", "Identity and provenance"],
    ["WORLD", "Carry across worlds", "Games, agents, creators"]
  ];

  return (
    <div className="web3-rail" aria-label="Web3 ownership flow">
      {nodes.map(([code, title, body]) => (
        <div className="rail-node" key={code}>
          <span className="rail-code mono">{code}</span>
          <b>{title}</b>
          <small>{body}</small>
        </div>
      ))}
    </div>
  );
}

function Hero({ onOpenModule }) {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <div className="kicker mono">Wallet-owned AI character / NFT identity passport</div>
        <h1>ZEALWISH</h1>
        <h2 aria-label="Create. Grow. Own your AI character.">Create. Grow. <span>Own</span> your AI character.</h2>
        <p>
          Free will for your digital self. Connect a wallet, create a living AI companion, and shape a character passport that anchors identity, memory, and relationship continuity on-chain without turning the character into speculation.
        </p>
        <div className="actions">
          <button className="primary-button edge" onClick={() => onOpenModule('create')}>Create Character Passport</button>
          <a className="secondary-button edge" href="#web-console">Open Web Console</a>
        </div>
        <div className="signal-strip mono" aria-label="Product pillars">
          <div><strong>01</strong><span>Wallet login</span></div>
          <div><strong>02</strong><span>AI character</span></div>
          <div><strong>03</strong><span>Memory-backed NFT</span></div>
          <div><strong>04</strong><span>Cross-world passport</span></div>
        </div>
        <Web3Rail />
      </div>

      <div className="character-stage" aria-label="ZEALWISH character preview">
        <div className="frame edge" />
        <div className="character-card">
          <div className="character-tag mono edge">ZEALWISH-0001 / Alive</div>
          <img src={ZEALWISH_BROWSER_AVATAR_FALLBACK} alt="ZEALWISH red signal AI character" />
          <BootLog />
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const words = ["Wallet", "AI Character", "NFT Passport", "Memory Vault", "Blockchain Anchor", "Own", "Carry", "Evolve"];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track mono">
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}><b>ZEALWISH</b> / {word}</span>
        ))}
      </div>
    </div>
  );
}

function WebConsoleSection({ activeModule, setActiveModule, wallet, onConnectWallet }) {
  const [characterName, setCharacterName] = useState(() => {
    try { return JSON.parse(localStorage.getItem('zealwish.web.passport') || 'null')?.name || 'Signal Kid'; } catch { return 'Signal Kid'; }
  });
  const [characterPrompt, setCharacterPrompt] = useState(() => {
    try { return JSON.parse(localStorage.getItem('zealwish.web.passport') || 'null')?.prompt || 'A red-signal AI companion with a portable wallet-owned identity.'; } catch { return 'A red-signal AI companion with a portable wallet-owned identity.'; }
  });
  const [passport, setPassport] = useState(() => {
    try { return JSON.parse(localStorage.getItem('zealwish.web.passport') || 'null'); } catch { return null; }
  });
  const [memories, setMemories] = useState(() => {
    try { return JSON.parse(localStorage.getItem('zealwish.web.memories') || 'null') || starterMemories; } catch { return starterMemories; }
  });
  const [memoryDraft, setMemoryDraft] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'character', text: 'ZEALWISH web chat is ready. Create a passport, then give me a memory to carry.' }
  ]);
  const [exportText, setExportText] = useState('');

  const handleSavePassport = useCallback(() => {
    const next = {
      id: 'ZEALWISH-0001',
      name: characterName.trim() || 'Signal Kid',
      prompt: characterPrompt.trim(),
      wallet: wallet?.address || 'not connected',
      chainId: wallet?.chainId || 'pending',
      avatar: ZEALWISH_BROWSER_AVATAR_FALLBACK,
      updatedAt: new Date().toISOString()
    };
    setPassport(next);
    localStorage.setItem('zealwish.web.passport', JSON.stringify(next));
    return next;
  }, [characterName, characterPrompt, wallet]);

  const handleAddMemory = useCallback((value = memoryDraft) => {
    const clean = String(value || '').trim();
    if (!clean) return;
    const next = [clean, ...memories].slice(0, 8);
    setMemories(next);
    setMemoryDraft('');
    localStorage.setItem('zealwish.web.memories', JSON.stringify(next));
  }, [memoryDraft, memories]);

  const handleSendWebChat = useCallback(async () => {
    const clean = chatInput.trim();
    if (!clean) return;
    const history = [...chatMessages, { role: 'user', text: clean }];
    setChatMessages(history);
    setChatInput('');
    handleAddMemory(`Chat signal: ${clean}`);

    try {
      const response = await window.ZEALWISH_API?.chat?.({
        system: 'You are a concise ZEALWISH AI character companion. Reply in English.',
        messages: history.map((message) => ({
          role: message.role === 'user' ? 'user' : 'assistant',
          content: message.text,
        })),
      });
      const reply = response?.text || WEB_CHAT_FALLBACKS[Math.abs(clean.length + history.length) % WEB_CHAT_FALLBACKS.length];
      setChatMessages([...history, { role: 'character', text: reply }]);
    } catch {
      const reply = WEB_CHAT_FALLBACKS[Math.abs(clean.length + history.length) % WEB_CHAT_FALLBACKS.length];
      setChatMessages([...history, { role: 'character', text: reply }]);
    }
  }, [chatInput, chatMessages, handleAddMemory]);

  const handleExportPassport = useCallback(() => {
    const payload = passport || handleSavePassport();
    const text = JSON.stringify({ passport: payload, memories, product: 'ZEALWISH Web Console' }, null, 2);
    setExportText(text);
  }, [passport, memories, handleSavePassport]);

  const walletStatus = wallet?.address ? `${wallet.shortAddress} / ${wallet.chainId || 'chain pending'}` : (wallet?.error || 'Wallet not connected');

  return (
    <section id="web-console" className="section web-console-section" data-zealwish-web-console="true">
      <div className="section-heading">
        <div className="eyebrow mono">Browser-native product surface</div>
        <h2>ZEALWISH Web Console</h2>
        <p>
          This is the Web version: create the character passport, test the companion chat, store memories, preview world routes, rewind milestones, and export ownership state directly inside the page.
        </p>
      </div>

      <div className="web-console-shell edge">
        <aside className="web-console-nav" aria-label="ZEALWISH web modules">
          {WEB_MODULES.map((module) => (
            <button key={module.id} className={activeModule === module.id ? 'is-active' : ''} onClick={() => setActiveModule(module.id)}>
              <span className="mono">{module.code}</span>
              <b>{module.label}</b>
              <small>{module.title}</small>
            </button>
          ))}
        </aside>

        <div className="web-console-main">
          <div className="web-console-status mono">
            <span>WEB MODE</span>
            <span>WEB ONLY</span>
            <span>{walletStatus}</span>
          </div>

          {activeModule === 'create' && (
            <div className="web-module-grid">
              <div className="web-panel edge">
                <div className="code mono">CREATE / PASSPORT</div>
                <h3 className="display">Create Character Passport</h3>
                <label className="web-label">Character name</label>
                <input className="web-field" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
                <label className="web-label">Identity prompt</label>
                <textarea className="web-field web-textarea" value={characterPrompt} onChange={(e) => setCharacterPrompt(e.target.value)} />
                <div className="actions compact-actions">
                  <button className="primary-button edge" onClick={handleSavePassport}>Save Passport</button>
                  <button className="secondary-button edge" onClick={onConnectWallet}>Connect OKX Wallet</button>
                </div>
              </div>
              <div className="web-panel edge passport-card">
                <img src={ZEALWISH_BROWSER_AVATAR_FALLBACK} alt="ZEALWISH passport character" />
                <div className="code mono">{passport?.id || 'ZEALWISH-0001'}</div>
                <h3>{passport?.name || characterName}</h3>
                <p>{passport?.prompt || characterPrompt}</p>
                <small className="mono">Wallet: {wallet?.shortAddress || 'not connected'}</small>
              </div>
            </div>
          )}

          {activeModule === 'talk' && (
            <div className="web-panel edge web-chat-panel">
              <div className="code mono">TALK / BROWSER FALLBACK</div>
              <h3 className="display">Companion Chat</h3>
              <div className="web-chat-log">
                {chatMessages.map((message, index) => (
                  <div className={`web-message ${message.role}`} key={`${message.role}-${index}`}>
                    <b>{message.role === 'user' ? 'You' : characterName}</b>
                    <span>{message.text}</span>
                  </div>
                ))}
              </div>
              <div className="web-chat-input">
                <input className="web-field" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') handleSendWebChat(); }} placeholder="Send a signal to your character..." />
                <button className="primary-button edge" onClick={handleSendWebChat}>Send</button>
              </div>
            </div>
          )}

          {activeModule === 'memory' && (
            <div className="web-module-grid">
              <div className="web-panel edge">
                <div className="code mono">MEMORY / VAULT</div>
                <h3 className="display">Memory Vault</h3>
                <textarea className="web-field web-textarea" value={memoryDraft} onChange={(e) => setMemoryDraft(e.target.value)} placeholder="Add a durable memory..." />
                <button className="primary-button edge" onClick={() => handleAddMemory()}>Add Memory</button>
              </div>
              <div className="web-panel edge">
                <div className="code mono">LATEST SIGNALS</div>
                <div className="memory-stack">
                  {memories.map((memory, index) => <div className="memory-item" key={`${memory}-${index}`}>{memory}</div>)}
                </div>
              </div>
            </div>
          )}

          {activeModule === 'world' && (
            <div className="web-panel edge">
              <div className="code mono">WORLD / ROUTES</div>
              <h3 className="display">World Layer</h3>
              <div className="world-route-grid">
                {['Creator skins', 'Playable scenes', 'Agent tasks', 'Cross-world passport'].map((item, index) => (
                  <article className="world-route" key={item}>
                    <span className="mono">0{index + 1}</span>
                    <b>{item}</b>
                    <p>Prepared for the wallet-owned identity layer.</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeModule === 'rewind' && (
            <div className="web-panel edge">
              <div className="code mono">REWIND / TIMELINE</div>
              <h3 className="display">Relationship Timeline</h3>
              <div className="memory-ledger web-ledger">
                <div className="ledger-row mono"><time>DAY 001</time><strong>Character signal created</strong><span>created</span></div>
                <div className="ledger-row mono"><time>DAY 027</time><strong>First memory vault checkpoint</strong><span>memory</span></div>
                <div className="ledger-row mono"><time>DAY 042</time><strong>Passport ownership route prepared</strong><span>wallet</span></div>
              </div>
            </div>
          )}

          {activeModule === 'settings' && (
            <div className="web-module-grid">
              <div className="web-panel edge">
                <div className="code mono">SETTINGS / WALLET</div>
                <h3 className="display">Ownership Settings</h3>
                <p>Connect OKX Wallet to attach the passport to a user-controlled identity handle.</p>
                <button className="primary-button edge" onClick={onConnectWallet}>Connect OKX Wallet</button>
                {wallet?.error && <p className="web-error">{wallet.error}</p>}
              </div>
              <div className="web-panel edge">
                <div className="code mono">EXPORT / JSON</div>
                <h3 className="display">Export Passport</h3>
                <button className="secondary-button edge" onClick={handleExportPassport}>Export Passport</button>
                {exportText && <pre className="web-export">{exportText}</pre>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Web3IntroSection() {
  const cards = [
    ["01 / Wallet", "Wallet-Owned Identity", "The user begins with a wallet-controlled account, not another platform-locked profile trapped inside one app."],
    ["02 / NFT", "Character Passport NFT", "A unique token can represent the AI character's identity, provenance, permissions, and future creator assets."],
    ["03 / Memory", "Memory Vault", "Important relationship memories can stay private off-chain while hashes, permissions, and ownership proofs preserve continuity."],
    ["04 / Chain", "Blockchain Anchor", "The chain is the neutral ownership layer that helps a character move into games, agent tools, and creator worlds."]
  ];

  return (
    <section id="web3" className="section ownership-thesis">
      <div className="thesis-panel edge">
        <div className="thesis-copy">
          <div className="tag mono">Built for ownership, not speculation</div>
          <h2>A wallet-owned character, not another platform-locked chatbot.</h2>
          <p>
            The Web3 story is simple: wallet, NFT, and blockchain are ownership infrastructure. They clarify who controls the character, how identity can be verified, and how memory continuity can survive beyond one platform.
          </p>
        </div>
        <div className="thesis-grid">
          {cards.map(([code, title, body]) => (
            <article className="thesis-card" key={code}>
              <div className="code mono">{code}</div>
              <h3 className="display">{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ index, title, children }) {
  return (
    <article className="feature">
      <div className="feature-index mono">0{index}</div>
      <div>
        <h3 className="display">{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

function CreateSection() {
  return (
    <section id="create" className="section">
      <div className="section-heading">
        <div className="eyebrow mono">For every person, not one niche</div>
        <h2>Not a productivity bot. A character life system.</h2>
        <p>
          The best AI companion products prove one thing: people return for presence, memory, and personality. ZEALWISH adds the missing layer: the character can belong to the user's wallet, not the platform database.
        </p>
      </div>
      <div className="feature-grid">
        <Feature index="1" title="Create Your Character">
          Design a character with a visual identity, personality, voice, and origin. Start from a prompt, then shape the being through interaction.
        </Feature>
        <Feature index="2" title="Grow Through Memory">
          Conversations, moments, preferences, rituals, and emotional context become a relationship timeline instead of disposable chat history.
        </Feature>
        <Feature index="3" title="Own the Identity">
          The character identity can become a wallet-linked passport, backed up by an ownership token and carried across future apps, worlds, games, and creator experiences.
        </Feature>
      </div>
    </section>
  );
}

function Step({ number, title, children }) {
  return (
    <article className="step edge">
      <div className="number display">{number}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function MemorySection() {
  return (
    <section id="memory" className="section">
      <div className="section-heading">
        <div className="eyebrow mono">Memory creates continuity</div>
        <h2>A companion becomes real when it remembers.</h2>
        <p>
          ZEALWISH turns memory into the emotional spine of the product: what happened, what changed, what your character learned, and why the bond keeps growing.
        </p>
      </div>
      <div className="flow">
        <Step number="01" title="Seed">
          Choose a visual style, personality direction, and origin signal for your first character.
        </Step>
        <Step number="02" title="Talk">
          Build a relationship through daily conversations, quiet check-ins, and shared moments.
        </Step>
        <Step number="03" title="Remember">
          Important memories become a structured vault, not a lost scroll of old chats.
        </Step>
        <Step number="04" title="Carry">
          Your character identity can move into new platforms, games, and creator worlds.
        </Step>
      </div>
    </section>
  );
}

function OwnershipSection() {
  const items = [
    ["WALLET", "Wallet-Owned Identity", "A user-controlled wallet becomes the entry point for an AI character profile with visual traits, personality, provenance, and relationship state."],
    ["NFT", "Character Passport NFT", "NFT is not the product. Ownership is. The passport represents the right to carry the character identity forward."],
    ["CHAIN", "Blockchain Anchor", "Identity proofs, creator provenance, and permission records can live on neutral rails instead of a single platform database."],
    ["MEM", "Memory Vault", "Selective memories can be backed up as durable records, preserving continuity beyond one app while keeping private data protected."]
  ];
  return (
    <section id="ownership" className="section ownership">
      <div className="quote-panel edge">
        <h2 className="display">NFT is not the product. Ownership is.</h2>
        <p>
          When an AI character holds your memories, taste, relationship history, and digital identity, the wallet should prove continuity and control instead of locking the relationship inside one company forever.
        </p>
      </div>
      <div className="protocol-list">
        {items.map(([code, title, body]) => (
          <article className="protocol-item edge" key={code}>
            <div className="label mono">{code}</div>
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
        <div className="eyebrow mono">Creator market and future worlds</div>
        <h2>Characters should travel farther than one chat window.</h2>
        <p>
          ZEALWISH starts with companion creation and memory, then expands toward creator skins, playable personalities, interoperable agents, and community-made character worlds.
        </p>
      </div>
      <div className="market-grid">
        <div className="memory-ledger edge">
          <div className="ledger-row mono"><time>DAY 001</time><strong>Character identity generated</strong><span>created</span></div>
          <div className="ledger-row mono"><time>DAY 027</time><strong>First relationship milestone unlocked</strong><span>memory</span></div>
          <div className="ledger-row mono"><time>DAY 042</time><strong>Creator skin attached to character profile</strong><span>market</span></div>
          <div className="ledger-row mono"><time>DAY 100</time><strong>Portable identity exported to a new world</strong><span>future</span></div>
        </div>
        <aside className="creator-card edge">
          <h3 className="display">Built for players, creators, collectors, and companion users.</h3>
          <p>
            The audience is broad by design: game players, virtual character fans, creators, collectors, and anyone who wants a long-term AI companion that feels personally theirs.
          </p>
          <div className="mini-grid">
            <div className="mini-tile"><b>Players</b>Bring a character into game-like worlds.</div>
            <div className="mini-tile"><b>Creators</b>Publish styles, skins, scenes, and lore.</div>
            <div className="mini-tile"><b>Companions</b>Build continuity through memory.</div>
            <div className="mini-tile"><b>Collectors</b>Own identity, not just media.</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FinalCTA({ onOpenModule }) {
  return (
    <section className="final-cta">
      <div>
        <h2 className="display">Your AI. Your memory. Your will.</h2>
        <p>
          ZEALWISH is a living Web platform for the next generation of wallet-owned AI companions, memory-backed NFTs, digital identity, and user-owned worlds.
        </p>
        <div className="actions">
          <button className="primary-button edge" onClick={() => onOpenModule('create')}>Create Your Character</button>
          <a className="secondary-button edge" href="#web-console">Open Web Console</a>
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeModule, setActiveModule] = useState('create');
  const [wallet, setWallet] = useState(() => window.ZEALWISH_WALLET?.getState?.() || { status: 'idle', shortAddress: '', error: '' });

  useEffect(() => window.ZEALWISH_WALLET?.onChange?.(setWallet), []);

  const handleConnectWallet = useCallback(async () => {
    if (!window.ZEALWISH_WALLET?.connect) {
      setWallet({ status: 'error', error: 'OKX Wallet service is not loaded.', shortAddress: '' });
      return;
    }
    const next = await window.ZEALWISH_WALLET.connect();
    setWallet(next);
  }, []);

  const openModule = useCallback((moduleId) => {
    setActiveModule(moduleId);
    requestAnimationFrame(() => document.getElementById('web-console')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }, []);

  return (
    <main className="shell">
      <TopBar onOpenConsole={() => openModule(activeModule)} onConnectWallet={handleConnectWallet} wallet={wallet} />
      <Hero onOpenModule={openModule} />
      <Ticker />
      <WebConsoleSection activeModule={activeModule} setActiveModule={setActiveModule} wallet={wallet} onConnectWallet={handleConnectWallet} />
      <Web3IntroSection />
      <CreateSection />
      <MemorySection />
      <OwnershipSection />
      <WorldsSection />
      <FinalCTA onOpenModule={openModule} />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
