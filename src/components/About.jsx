import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const STATS = [
  { value: "50+",  label: "Years of Legacy",   color: "#6C63FF", bg: "rgba(108,99,255,0.08)"  },
  { value: "200+", label: "Global Clients",    color: "#FF6B6B", bg: "rgba(255,107,107,0.08)" },
  { value: "98%",  label: "Purity Standard",   color: "#00C896", bg: "rgba(0,200,150,0.08)"   },
  { value: "12K+", label: "Tonnes / Season",   color: "#FF9F43", bg: "rgba(255,159,67,0.08)"  },
];

const SECTIONS = [
  {
    id: 1,
    title: "Our History",
    emoji: "🏭",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#667eea",
    lightBg: "rgba(102,126,234,0.07)",
    border: "rgba(102,126,234,0.25)",
    body: "Established in the heart of Ginning Town, Stresta Cotton Mill has been a cornerstone of the community for over 50 years. From humble beginnings as a small mill, we have grown into a state-of-the-art facility, maintaining the traditional values that have guided us from the start. Our journey is one of perseverance, dedication, and an unwavering focus on quality.",
  },
  {
    id: 2,
    title: "Our Mission",
    emoji: "🎯",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#f5576c",
    lightBg: "rgba(245,87,108,0.07)",
    border: "rgba(245,87,108,0.25)",
    body: "At Stresta Cotton Mill, our mission is to provide the finest cotton products to our customers while fostering sustainable practices. We believe in responsible sourcing, ethical labor practices, and innovation in manufacturing to create a positive impact on the environment and our community.",
  },
  {
    id: 3,
    title: "Our Values",
    emoji: "💎",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accent: "#4facfe",
    lightBg: "rgba(79,172,254,0.07)",
    border: "rgba(79,172,254,0.25)",
    isValues: true,
    values: [
      { name: "Quality",        icon: "✦", desc: "Committed to producing cotton of the highest standard — every bale, every season.", color: "#6C63FF" },
      { name: "Sustainability", icon: "◈", desc: "Minimizing our environmental footprint and championing eco-friendly practices.", color: "#00C896"  },
      { name: "Community",      icon: "❋", desc: "Every person — worker, partner, client — is the heartbeat of Stresta.", color: "#FF6B6B"       },
      { name: "Innovation",     icon: "◉", desc: "Investing in technology to lead the industry and raise the bar continuously.", color: "#FF9F43"   },
    ],
  },
  {
    id: 4,
    title: "Why Choose Us?",
    emoji: "🌟",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    accent: "#43e97b",
    lightBg: "rgba(67,233,123,0.07)",
    border: "rgba(67,233,123,0.3)",
    body: "Choosing Stresta Cotton Mill means choosing quality, reliability, and a commitment to sustainability. We go the extra mile to ensure our cotton is not only top-notch but also produced with respect for the environment and the people involved in the process. Our long-standing relationships with our clients are a testament to our dedication and trustworthiness.",
  },
];

/* ────────────────────────────────────────────────────────────
   ANIMATED BLOB
───────────────────────────────────────────────────────────── */
function Blob({ style }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.12, 1], rotate: [0, 8, -5, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%", filter: "blur(48px)", position: "absolute", pointerEvents: "none", ...style }}
    />
  );
}

/* ────────────────────────────────────────────────────────────
   ACCORDION CARD
───────────────────────────────────────────────────────────── */
function SectionCard({ section, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        background: "#fff",
        border: `1px solid ${section.border}`,
        borderRadius: "18px",
        marginBottom: "14px",
        boxShadow: open ? "0 18px 40px -22px rgba(26,26,46,0.45)" : "0 8px 24px -20px rgba(26,26,46,0.35)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "22px 24px",
          cursor: "pointer",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: section.lightBg, border: `1px solid ${section.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
            {section.emoji}
          </div>
          <div>
            <p style={{ fontSize: "1.08rem", fontWeight: 750, color: "#1a1a2e", marginBottom: "3px" }}>{section.title}</p>
            <p style={{ fontSize: "0.78rem", color: "#7f8190", letterSpacing: "0.02em" }}>Tap to {open ? "collapse" : "expand"}</p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ width: "34px", height: "34px", borderRadius: "10px", background: section.lightBg, border: `1px solid ${section.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: section.accent, flexShrink: 0 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 24px 24px", paddingTop: "2px" }}>
              <div style={{ height: "1px", background: `linear-gradient(90deg, ${section.accent}66, transparent)`, marginBottom: "20px" }} />

              {section.isValues ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
                  {section.values.map(v => (
                    <motion.div
                      key={v.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        background: `${v.color}12`,
                        border: `1px solid ${v.color}33`,
                        borderRadius: "14px",
                        padding: "18px",
                      }}
                    >
                      <div style={{ fontSize: "1.2rem", color: v.color, marginBottom: "8px" }}>{v.icon}</div>
                      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: v.color, marginBottom: "6px" }}>{v.name}</p>
                      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#666", lineHeight: 1.65 }}>{v.desc}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.95rem",
                    color: "#555",
                    lineHeight: 1.85,
                    background: section.lightBg,
                    borderRadius: "12px",
                    padding: "16px 18px",
                    border: `1px solid ${section.border}`,
                  }}
                >
                  {section.body}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   MAIN
───────────────────────────────────────────────────────────── */
export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f8f7ff; }

        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        .float { animation: float 5s ease-in-out infinite; }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #6C63FF, #f5576c, #FF9F43, #43e97b, #4facfe, #6C63FF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
      `}</style>

      <div style={{ background: "#f8f7ff", minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", overflowX: "hidden" }}>

        {/* ── HERO ── */}
        <section ref={heroRef} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 32px 80px", position: "relative", overflow: "hidden" }}>
          {/* Background blobs */}
          <Blob style={{ width: 480, height: 480, background: "rgba(108,99,255,0.12)", top: "5%", left: "-8%" }} />
          <Blob style={{ width: 380, height: 380, background: "rgba(245,87,108,0.1)", top: "10%", right: "-6%", animationDelay: "2s" }} />
          <Blob style={{ width: 320, height: 320, background: "rgba(67,233,123,0.1)", bottom: "10%", left: "20%", animationDelay: "4s" }} />
          <Blob style={{ width: 280, height: 280, background: "rgba(255,159,67,0.1)", bottom: "5%", right: "15%", animationDelay: "1s" }} />

          <motion.div style={{ position: "relative", zIndex: 1, maxWidth: "860px", y: heroY }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "100px", padding: "7px 16px", marginBottom: "28px" }}
            >
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#6C63FF", display: "inline-block" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#6C63FF", letterSpacing: "0.06em" }}>EST. 2025 · GINNING TOWN</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1a1a2e", marginBottom: "10px" }}
            >
              About{" "}
              <span className="shimmer-text">Stresta</span>
              <br />Cotton Mill
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
              style={{ fontSize: "1.05rem", color: "#777", lineHeight: 1.85, maxWidth: "580px", margin: "0 auto 40px" }}
            >
              A premier ginning mill dedicated to producing <strong style={{ color: "#1a1a2e" }}>high-quality cotton products</strong> for over five decades. Excellence in every fiber — from field to fabric.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
              style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}
            >
              <button style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#fff", background: "linear-gradient(135deg, #6C63FF, #f5576c)", border: "none", borderRadius: "12px", padding: "14px 32px", cursor: "pointer", boxShadow: "0 8px 24px rgba(108,99,255,0.35)", letterSpacing: "-0.01em" }}>
                Explore Our Story →
              </button>
              <button style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#6C63FF", background: "rgba(108,99,255,0.08)", border: "1px solid rgba(108,99,255,0.2)", borderRadius: "12px", padding: "14px 28px", cursor: "pointer" }}>
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          {/* Floating emoji accents */}
          <div className="float" style={{ position: "absolute", top: "22%", left: "8%", fontSize: "2rem", opacity: 0.3, animationDelay: "0s" }}>🌿</div>
          <div className="float" style={{ position: "absolute", top: "30%", right: "9%", fontSize: "1.8rem", opacity: 0.25, animationDelay: "1.5s" }}>✨</div>
          <div className="float" style={{ position: "absolute", bottom: "20%", left: "12%", fontSize: "1.6rem", opacity: 0.2, animationDelay: "3s" }}>🌾</div>
        </section>

        {/* ── STATS ── */}
        <section style={{ padding: "0 32px 80px", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: `0 20px 40px -8px ${s.color}33` }}
                style={{
                  background: "#fff",
                  border: `1px solid ${s.color}22`,
                  borderRadius: "20px",
                  padding: "28px 24px",
                  textAlign: "center",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  cursor: "default",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", border: `1px solid ${s.color}22` }}>
                  <span style={{ fontSize: "1.2rem", color: s.color, fontWeight: 800 }}>
                    {s.value.replace(/[^0-9KM%+]/g, "")}
                  </span>
                </div>
                <p style={{ fontSize: "2.2rem", fontWeight: 800, color: s.color, lineHeight: 1, letterSpacing: "-0.03em", marginBottom: "6px" }}>{s.value}</p>
                <p style={{ fontSize: "0.8rem", color: "#999", fontWeight: 500, letterSpacing: "0.02em" }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── INTRO CARD ── */}
        <section style={{ padding: "0 32px 56px", maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: "linear-gradient(135deg, #6C63FF 0%, #f5576c 50%, #FF9F43 100%)",
              borderRadius: "24px",
              padding: "2px",
              boxShadow: "0 20px 60px -10px rgba(108,99,255,0.3)",
            }}
          >
            <div style={{ background: "#fff", borderRadius: "22px", padding: "40px 44px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(108,99,255,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
              <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "#6C63FF", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "14px" }}>✦ Our Promise</p>
              <p style={{ fontSize: "1.08rem", color: "#444", lineHeight: 1.9, maxWidth: "720px" }}>
                Welcome to <strong style={{ color: "#1a1a2e" }}>Stresta Cotton Mill</strong>, a premier ginning mill dedicated to producing high-quality cotton products. With decades of experience, we take pride in delivering excellence in every fiber. Our commitment to sustainability, quality, and innovation has made us a <strong style={{ color: "#6C63FF" }}>trusted name</strong> in the cotton industry.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── ACCORDION SECTIONS ── */}
        <section style={{ padding: "0 32px 80px", maxWidth: "1100px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "28px" }}
          >
            <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "#6C63FF", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>✦ Discover More</p>
            <h2 style={{ fontSize: "clamp(1.7rem, 4vw, 2.4rem)", fontWeight: 800, color: "#1a1a2e", letterSpacing: "-0.03em" }}>
              Everything about us,<br /><span style={{ color: "#6C63FF" }}>in one place.</span>
            </h2>
          </motion.div>

          {SECTIONS.map((s, i) => <SectionCard key={s.id} section={s} index={i} />)}
        </section>

       
    
      </div>
    </>
  );
}