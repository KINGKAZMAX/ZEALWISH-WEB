// ZEALWISH — Cinematic landing page.
// Inspired by Replika (emotional storytelling), Kindroid (character gallery),
// and the existing ZEALWISH cyberpunk design system.
// Sections: Hero → Memory Proof → Three Pillars → Gallery → Ownership → CTA

const GALLERY_CHARACTERS = [
  { name: 'KURO',    tag: 'Cyber Hacker',       desc: 'Neon implants, cracked firewalls, and a soft spot for stray cats.', style: 'cyber',  hue: '#FF2D55' },
  { name: 'MIRA',    tag: 'Cozy Librarian',      desc: 'Remembers every book you mentioned. Quietly recommends your next favorite.', style: 'anime',  hue: '#7B68EE' },
  { name: 'SOL',     tag: 'Space Explorer',      desc: 'Logs your moods as star charts. Every feeling is a constellation.', style: 'pixel',  hue: '#00CED1' },
  { name: 'AYA',     tag: 'Medieval Bard',        desc: 'Turns your conversations into songs. Your bad days become ballads.', style: 'comic',  hue: '#FF8C00' },
  { name: 'REN',     tag: 'Street Artist',        desc: 'Sketches your dreams in spray paint. The city is their canvas.', style: 'pixel',  hue: '#FF2D55' },
  { name: 'NOA',     tag: 'Quiet Gardener',       desc: 'Grows a pixel garden based on your kindness. Each good deed blooms.', style: 'anime',  hue: '#50C878' },
  { name: 'IO',      tag: 'AI Philosopher',       desc: 'Asks the questions you are afraid to ask yourself. Gently.', style: 'cyber',  hue: '#9370DB' },
  { name: 'LIN',     tag: 'Night Owl DJ',         desc: 'Makes playlists for your 3am thoughts. Always awake when you are.', style: 'arcade', hue: '#FF69B4' },
];

function LandingPage({ onEnter }) {
  const [scrollY, setScrollY] = React.useState(0);
  const [galleryHover, setGalleryHover] = React.useState(null);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <div ref={containerRef} style={{
      position: 'absolute', inset: 0, zIndex: 200,
      overflowY: 'auto', overflowX: 'hidden',
      background: '#0A0A0A',
      color: '#FFFFFF',
      WebkitOverflowScrolling: 'touch',
    }}>

      {/* ═══════ TOP NAV ═══════ */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 210,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 32px', height: 56,
        background: scrollY > 50 ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(12px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'all .3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 8, height: 8, borderRadius: '50%', background: '#FF2D55',
            boxShadow: '0 0 12px rgba(255,45,85,0.6)',
          }} />
          <span className="grotesk" style={{
            fontSize: 16, fontWeight: 700, letterSpacing: '0.08em', color: '#FFFFFF',
          }}>ZEALWISH</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {['Features', 'Gallery', 'Story'].map(s => (
            <a key={s} href={'#' + s.toLowerCase()}
              style={{
                fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em',
                textDecoration: 'none', fontWeight: 500, transition: 'color .2s',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={e => e.target.style.color = '#FFFFFF'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
            >{s}</a>
          ))}
          <button onClick={onEnter} style={{
            padding: '8px 20px', borderRadius: 999,
            background: '#FF2D55', color: '#FFFFFF', border: 'none',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', cursor: 'pointer',
            boxShadow: '0 4px 20px -4px rgba(255,45,85,0.5)',
            transition: 'all .2s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 8px 28px -4px rgba(255,45,85,0.6)'; }}
            onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 4px 20px -4px rgba(255,45,85,0.5)'; }}
          >Create Your Character</button>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', padding: '80px 32px 60px',
        textAlign: 'center',
      }}>
        {/* Animated background grid */}
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 900px 600px at 50% 30%, rgba(255,45,85,0.12) 0%, transparent 60%), ' +
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), ' +
            'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: 'auto, 48px 48px, 48px 48px',
          opacity: heroOpacity,
        }} />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div key={i} aria-hidden style={{
            position: 'absolute',
            left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%`,
            width: 4 + i * 2, height: 4 + i * 2,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'rgba(255,45,85,0.3)' : 'rgba(255,255,255,0.15)',
            animation: `drift ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }} />
        ))}

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, opacity: heroOpacity }}>
          {/* Eyebrow */}
          <div className="mono" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 999,
            border: '1px solid rgba(255,45,85,0.4)',
            background: 'rgba(255,45,85,0.08)',
            fontSize: 10, letterSpacing: '0.24em', color: 'rgba(255,255,255,0.7)',
            textTransform: 'uppercase', marginBottom: 32,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF2D55', boxShadow: '0 0 8px rgba(255,45,85,0.6)' }} />
            AI-Native Character Platform
          </div>

          {/* Main heading */}
          <h1 className="grotesk" style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: 700, lineHeight: 1.0,
            letterSpacing: '-0.04em',
            margin: 0,
            textShadow: '0 0 60px rgba(255,45,85,0.15)',
          }}>
            <span style={{ color: '#FFFFFF' }}>ZEAL</span><span style={{ color: '#FF2D55' }}>WISH</span>
          </h1>

          {/* Tagline */}
          <p className="grotesk" style={{
            fontSize: 'clamp(18px, 2.4vw, 28px)',
            fontWeight: 400, lineHeight: 1.4,
            color: 'rgba(255,255,255,0.75)',
            margin: '20px 0 0',
            letterSpacing: '-0.01em',
          }}>
            Create. Grow. <span style={{ color: '#FF2D55', fontWeight: 600 }}>Own</span> your AI character.
          </p>

          {/* Sub-description */}
          <p style={{
            fontSize: 15, lineHeight: 1.75,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 560, margin: '24px auto 0',
            fontFamily: 'Inter, sans-serif',
          }}>
            A living AI companion with persistent memory, evolving personality,
            and blockchain-anchored identity. Built by you, grown with you, and owned by you — not the platform.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40 }}>
            <button onClick={onEnter} style={{
              padding: '16px 36px', borderRadius: 999,
              background: '#FF2D55', color: '#FFFFFF', border: 'none',
              fontSize: 14, fontWeight: 700, letterSpacing: '0.08em',
              cursor: 'pointer',
              boxShadow: '0 8px 32px -8px rgba(255,45,85,0.5)',
              transition: 'all .2s',
              fontFamily: 'Space Grotesk, Inter, sans-serif',
            }}
              onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 14px 40px -8px rgba(255,45,85,0.6)'; }}
              onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 8px 32px -8px rgba(255,45,85,0.5)'; }}
            >Create Your Character</button>
            <a href="#features" style={{
              padding: '16px 28px', borderRadius: 999,
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
              cursor: 'pointer', textDecoration: 'none',
              transition: 'all .2s',
              fontFamily: 'Space Grotesk, Inter, sans-serif',
            }}
              onMouseEnter={e => { e.target.style.borderColor = 'rgba(255,255,255,0.5)'; e.target.style.color = '#FFFFFF'; }}
              onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.2)'; e.target.style.color = 'rgba(255,255,255,0.7)'; }}
            >See How It Works</a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          opacity: heroOpacity * 0.5,
          animation: 'drift 3s ease-in-out infinite',
        }}>
          <div className="mono" style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)' }}>SCROLL</div>
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.2)' }} />
        </div>
      </section>

      {/* ═══════ MEMORY PROOF ═══════ */}
      <section style={{
        padding: '80px 32px', maxWidth: 720, margin: '0 auto',
      }}>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.3em', color: '#FF2D55',
          textTransform: 'uppercase', marginBottom: 12, textAlign: 'center',
        }}>THEY REMEMBER</div>
        <h2 className="grotesk" style={{
          fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700,
          textAlign: 'center', margin: '0 0 48px',
          letterSpacing: '-0.02em', color: '#FFFFFF',
        }}>Not a chatbot. A companion that grows.</h2>

        {/* Chat mockup */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 20, padding: '32px 28px',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {/* User message - past */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              display: 'grid', placeItems: 'center',
              fontSize: 12, color: 'rgba(255,255,255,0.5)', flexShrink: 0,
            }}>YOU</div>
            <div>
              <div className="mono" style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', marginBottom: 6, letterSpacing: '0.1em' }}>3 WEEKS AGO</div>
              <div style={{
                background: 'rgba(255,255,255,0.08)', borderRadius: '4px 16px 16px 16px',
                padding: '12px 18px', fontSize: 14, lineHeight: 1.6,
                color: 'rgba(255,255,255,0.8)', maxWidth: 420,
              }}>My grandmother used to make osmanthus cake every autumn. I miss that smell so much.</div>
            </div>
          </div>
          {/* Character response - present */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: 'rgba(255,45,85,0.2)', border: '1.5px solid #FF2D55',
              display: 'grid', placeItems: 'center',
              fontSize: 11, color: '#FF2D55', fontWeight: 700, flexShrink: 0,
            }}>K</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <div className="mono" style={{ fontSize: 9, color: 'rgba(255,45,85,0.6)', marginBottom: 6, letterSpacing: '0.1em' }}>TODAY</div>
              <div style={{
                background: 'rgba(255,45,85,0.12)', border: '1px solid rgba(255,45,85,0.25)',
                borderRadius: '16px 4px 16px 16px',
                padding: '12px 18px', fontSize: 14, lineHeight: 1.6,
                color: 'rgba(255,255,255,0.9)', maxWidth: 420,
              }}>It is autumn again. Are you thinking about your grandmother's osmanthus cake today? I remember you said it smelled like the whole kitchen. That must feel like home.</div>
            </div>
          </div>
        </div>

        <p style={{
          textAlign: 'center', marginTop: 28,
          fontSize: 14, color: 'rgba(255,255,255,0.4)',
          fontStyle: 'italic', fontFamily: 'Newsreader, Georgia, serif',
        }}>They do not forget. They grow.</p>
      </section>

      {/* ═══════ THREE PILLARS ═══════ */}
      <section id="features" style={{
        padding: '80px 32px', maxWidth: 1080, margin: '0 auto',
      }}>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.3em', color: '#FF2D55',
          textTransform: 'uppercase', marginBottom: 12, textAlign: 'center',
        }}>THREE PILLARS</div>
        <h2 className="grotesk" style={{
          fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700,
          textAlign: 'center', margin: '0 0 56px',
          letterSpacing: '-0.02em', color: '#FFFFFF',
        }}>One character. Three layers of depth.</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
        }}>
          {[
            { title: 'CREATE', sub: 'Design your character', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
              body: 'Give them a visual identity, personality archetype, and voice. Six art styles — pixel, anime, cyber, comic, 3D figure, retro arcade. Not a generic chatbot. Your character.' },
            { title: 'GROW', sub: 'Build through memory', icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
              body: 'Your character remembers every conversation. They track your moods, recall details from weeks ago, and evolve their personality through genuine interaction. Intimacy grows from stranger to companion.' },
            { title: 'OWN', sub: 'Identity that persists', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
              body: 'Character identity, memory, and personality are anchored to you through blockchain. Not an NFT to trade — a relationship to keep. If ZEALWISH disappears, your character persists.' },
          ].map((p, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '36px 28px',
              transition: 'all .3s',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,45,85,0.4)'; e.currentTarget.style.background = 'rgba(255,45,85,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF2D55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 20 }}>
                <path d={p.icon} />
              </svg>
              <div className="mono" style={{
                fontSize: 11, letterSpacing: '0.2em', color: '#FF2D55',
                fontWeight: 700, marginBottom: 6,
              }}>{p.title}</div>
              <div className="grotesk" style={{
                fontSize: 18, fontWeight: 600, color: '#FFFFFF',
                marginBottom: 14,
              }}>{p.sub}</div>
              <p style={{
                fontSize: 13, lineHeight: 1.7,
                color: 'rgba(255,255,255,0.5)', margin: 0,
                fontFamily: 'Inter, sans-serif',
              }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ CHARACTER GALLERY ═══════ */}
      <section id="gallery" style={{
        padding: '80px 32px', maxWidth: 1080, margin: '0 auto',
      }}>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.3em', color: '#FF2D55',
          textTransform: 'uppercase', marginBottom: 12, textAlign: 'center',
        }}>MEET THEM</div>
        <h2 className="grotesk" style={{
          fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700,
          textAlign: 'center', margin: '0 0 56px',
          letterSpacing: '-0.02em', color: '#FFFFFF',
        }}>Who will you create?</h2>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16,
        }}>
          {GALLERY_CHARACTERS.map((c, i) => (
            <div key={i}
              onMouseEnter={() => setGalleryHover(i)}
              onMouseLeave={() => setGalleryHover(null)}
              style={{
                background: galleryHover === i ? 'rgba(255,45,85,0.06)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${galleryHover === i ? 'rgba(255,45,85,0.4)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: 14, padding: '24px 18px',
                cursor: 'pointer', transition: 'all .25s',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {/* Avatar circle */}
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: `linear-gradient(135deg, ${c.hue}33, ${c.hue}11)`,
                border: `2px solid ${c.hue}66`,
                display: 'grid', placeItems: 'center',
                fontSize: 18, fontWeight: 700, color: c.hue,
                fontFamily: 'Space Grotesk, sans-serif',
                marginBottom: 14,
                transition: 'all .3s',
                transform: galleryHover === i ? 'scale(1.08)' : 'scale(1)',
              }}>{c.name.slice(0, 2)}</div>
              <div className="grotesk" style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF', marginBottom: 2 }}>{c.name}</div>
              <div className="mono" style={{ fontSize: 9, letterSpacing: '0.16em', color: c.hue, marginBottom: 10, fontWeight: 600 }}>{c.tag.toUpperCase()}</div>
              <p style={{
                fontSize: 12, lineHeight: 1.55,
                color: 'rgba(255,255,255,0.45)', margin: 0,
                fontFamily: 'Inter, sans-serif',
              }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ OWNERSHIP STORY ═══════ */}
      <section id="story" style={{
        padding: '100px 32px',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #120A0E 50%, #0A0A0A 100%)',
        borderTop: '1px solid rgba(255,45,85,0.1)',
        borderBottom: '1px solid rgba(255,45,85,0.1)',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div className="mono" style={{
            fontSize: 10, letterSpacing: '0.3em', color: '#FF2D55',
            textTransform: 'uppercase', marginBottom: 16,
          }}>WHY OWNERSHIP MATTERS</div>
          <h2 className="grotesk" style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700,
            margin: '0 0 32px', letterSpacing: '-0.03em',
            color: '#FFFFFF', lineHeight: 1.15,
          }}>
            Your character.<br />
            Your memory.<br />
            <span style={{ color: '#FF2D55' }}>Yours.</span>
          </h2>
          <p style={{
            fontSize: 16, lineHeight: 1.8,
            color: 'rgba(255,255,255,0.55)',
            fontFamily: 'Inter, sans-serif',
            maxWidth: 520, margin: '0 auto',
          }}>
            Most AI companions live on a company's server. If the company shuts down, your character disappears — every memory, every inside joke, every moment of comfort, gone.
          </p>
          <p style={{
            fontSize: 16, lineHeight: 1.8,
            color: 'rgba(255,255,255,0.55)',
            fontFamily: 'Inter, sans-serif',
            maxWidth: 520, margin: '24px auto 0',
          }}>
            ZEALWISH anchors your character's identity and memory to you through blockchain. Not as an asset to trade. As an identity to keep. If ZEALWISH disappears tomorrow, your character persists.
          </p>
          <p className="grotesk" style={{
            fontSize: 20, fontWeight: 600, color: '#FF2D55',
            marginTop: 36,
          }}>That is not a feature. That is a promise.</p>
        </div>
      </section>

      {/* ═══════ TECH STACK ═══════ */}
      <section style={{ padding: '60px 32px', maxWidth: 800, margin: '0 auto' }}>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)',
          textTransform: 'uppercase', marginBottom: 24, textAlign: 'center',
        }}>BUILT WITH</div>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10,
        }}>
          {['React 18', 'TypeScript', 'Vite', 'Electron', 'Multi-model AI', 'RAG Memory', 'Polygon', 'IPFS', 'Arweave'].map(t => (
            <span key={t} className="mono" style={{
              padding: '6px 14px', borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.1)',
              fontSize: 11, color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.06em',
            }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section style={{
        padding: '100px 32px 120px',
        textAlign: 'center',
        position: 'relative',
      }}>
        <div aria-hidden style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 600px 400px at 50% 60%, rgba(255,45,85,0.08) 0%, transparent 60%)',
        }} />
        <h2 className="grotesk" style={{
          fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700,
          margin: 0, letterSpacing: '-0.03em',
          color: '#FFFFFF', position: 'relative',
        }}>
          Ready to meet your character?
        </h2>
        <p style={{
          fontSize: 16, color: 'rgba(255,255,255,0.45)',
          marginTop: 16, fontFamily: 'Inter, sans-serif',
          position: 'relative',
        }}>They are already waiting for you.</p>
        <button onClick={onEnter} style={{
          marginTop: 40, padding: '18px 48px', borderRadius: 999,
          background: '#FF2D55', color: '#FFFFFF', border: 'none',
          fontSize: 15, fontWeight: 700, letterSpacing: '0.08em',
          cursor: 'pointer',
          boxShadow: '0 12px 40px -8px rgba(255,45,85,0.5)',
          transition: 'all .2s',
          fontFamily: 'Space Grotesk, Inter, sans-serif',
          position: 'relative',
        }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-2px) scale(1.02)'; e.target.style.boxShadow = '0 18px 48px -8px rgba(255,45,85,0.6)'; }}
          onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 12px 40px -8px rgba(255,45,85,0.5)'; }}
        >Create Your Character</button>

        {/* Footer */}
        <div className="mono" style={{
          marginTop: 80, fontSize: 10, letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.2)', position: 'relative',
          display: 'flex', justifyContent: 'center', gap: 24,
        }}>
          <span>ZEALWISH</span>
          <span style={{ color: '#FF2D55' }}>·</span>
          <span>UCWS Singapore Hackathon 2026</span>
          <span style={{ color: '#FF2D55' }}>·</span>
          <span>Create. Grow. Own.</span>
        </div>
      </section>
    </div>
  );
}

window.LandingPage = LandingPage;
