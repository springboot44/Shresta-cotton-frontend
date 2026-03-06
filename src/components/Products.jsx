import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── DATA ─────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: "Premium Cotton",
    tagline: "Softness Redefined",
    category: "RAW FIBRE",
    src: "/cotton.jpg",
    fallbackBg: "linear-gradient(135deg, #2d5a27 0%, #5a9e50 100%)",
    fallbackEmoji: "🌿",
    accent: "#4a9e42",
    accentLight: "rgba(74,158,66,0.12)",
    tag: "BESTSELLER",
    tagColor: "#4a9e42",
    desc: "Our premium cotton is harvested from the finest fields and is renowned for its exceptional softness and durability. Perfect for clothing, home textiles, and luxury fabric applications.",
    benefits: ["High softness & comfort", "Durable and long-lasting", "Ideal for all textile grades"],
    badge: "Grade A+",
  },
  {
    id: 2,
    name: "Cotton Seeds",
    tagline: "High-Yield Genetics",
    category: "AGRI INPUT",
    src: "/designer.jpeg",
    fallbackBg: "linear-gradient(135deg, #1a4a5c 0%, #2e8fa3 100%)",
    fallbackEmoji: "🌱",
    accent: "#2a90a8",
    accentLight: "rgba(42,144,168,0.12)",
    tag: "HIGH YIELD",
    tagColor: "#2a90a8",
    desc: "Selected for superior quality and high germination rates, our cotton seeds ensure robust crop yields and excellent performance across diverse soil conditions and climates.",
    benefits: ["High germination rates", "Enhanced crop yield", "Adaptable to diverse soil"],
    badge: "Certified",
  },
  {
    id: 3,
    name: "Cotton Seed Oil",
    tagline: "Nature's Finest Extract",
    category: "COLD PRESSED",
    src: "/mill1.jpg",
    fallbackBg: "linear-gradient(135deg, #7a4a10 0%, #d4841a 100%)",
    fallbackEmoji: "🫒",
    accent: "#d08020",
    accentLight: "rgba(208,128,32,0.12)",
    tag: "PURE",
    tagColor: "#c07010",
    desc: "Extracted with advanced cold-press techniques to retain all natural benefits. Ideal for cooking, premium cosmetics, and a wide range of industrial applications.",
    benefits: ["Rich in essential fatty acids", "Cooking & cosmetic grade", "Naturally processed"],
    badge: "100% Pure",
  },
];

const STATS = [
  { value: "1+", label: "Years of Trust" },
  { value: "3",   label: "Core Products"  },
  { value: "12K+",label: "Tonnes / Season"},
  { value: "98%", label: "Purity Grade"   },
];

/* ─── PRODUCT CARD ────────────────────────────────────────── */
function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "24px",
        overflow: "hidden",
        background: "#fff",
        boxShadow: hovered
          ? `0 32px 64px -16px ${product.accent}44, 0 8px 24px rgba(0,0,0,0.08)`
          : "0 4px 24px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.45s ease, transform 0.45s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        border: `1px solid ${hovered ? product.accent + "33" : "rgba(0,0,0,0.06)"}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image area */}
      <div style={{ position: "relative", height: "260px", overflow: "hidden", flexShrink: 0 }}>
        {/* Actual image or fallback */}
        {!imgError ? (
          <img
            src={product.src}
            alt={product.name}
            onError={() => setImgError(true)}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transform: hovered ? "scale(1.07)" : "scale(1)",
              transition: "transform 0.6s ease",
            }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: product.fallbackBg,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "4.5rem",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.6s ease",
          }}>
            {product.fallbackEmoji}
          </div>
        )}

        {/* Dark overlay on hover */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.4s ease",
        }} />

        {/* Category badge — top left */}
        <div style={{
          position: "absolute", top: "16px", left: "16px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "100px",
          padding: "5px 13px",
        }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.62rem", fontWeight: 700,
            color: "#fff", letterSpacing: "0.14em",
          }}>
            {product.category}
          </span>
        </div>

        {/* Tag badge — top right */}
        <div style={{
          position: "absolute", top: "16px", right: "16px",
          background: product.accent,
          borderRadius: "100px",
          padding: "5px 13px",
          boxShadow: `0 4px 12px ${product.accent}66`,
        }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.6rem", fontWeight: 800,
            color: "#fff", letterSpacing: "0.1em",
          }}>
            {product.tag}
          </span>
        </div>

        {/* Name over image — visible on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              style={{
                position: "absolute", bottom: "20px", left: "20px", right: "20px",
              }}
            >
              <p style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "1.6rem", fontWeight: 400,
                color: "#fff", lineHeight: 1.2,
                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}>
                {product.tagline}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Title row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
          <h3 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "1.55rem", fontWeight: 400,
            color: "#1c2b1a", lineHeight: 1.2,
          }}>
            {product.name}
          </h3>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.7rem", fontWeight: 700,
            color: product.accent,
            background: product.accentLight,
            border: `1px solid ${product.accent}22`,
            borderRadius: "8px",
            padding: "4px 10px",
            whiteSpace: "nowrap",
            marginLeft: "10px",
          }}>
            {product.badge}
          </span>
        </div>

        {/* Divider */}
        <div style={{
          height: "2px", borderRadius: "2px",
          background: `linear-gradient(90deg, ${product.accent}, transparent)`,
          marginBottom: "16px",
        }} />

        {/* Description */}
        <p style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.88rem", color: "#5a6a58",
          lineHeight: 1.8, marginBottom: "20px",
        }}>
          {product.desc}
        </p>

        {/* Benefits */}
        <div style={{ marginTop: "auto" }}>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.65rem", fontWeight: 700,
            color: "#aaa", letterSpacing: "0.15em",
            textTransform: "uppercase", marginBottom: "10px",
          }}>
            Key Benefits
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
            {product.benefits.map((b, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: product.accent, flexShrink: 0,
                  boxShadow: `0 0 6px ${product.accent}88`,
                }} />
                <span style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "0.84rem", color: "#4a5a48",
                }}>
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "13px",
            borderRadius: "12px",
            background: hovered ? product.accent : "transparent",
            border: `1.5px solid ${product.accent}`,
            color: hovered ? "#fff" : product.accent,
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.82rem", fontWeight: 700,
            letterSpacing: "0.08em",
            cursor: "pointer",
            transition: "background 0.3s, color 0.3s",
          }}
        >
          Learn More →
        </motion.button>
      </div>
    </motion.article>
  );
}

/* ─── MAIN ─────────────────────────────────────────────────── */
export default function Products() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Syne:wght@600;700;800&family=Lato:wght@300;400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes drift {
          0%,100% { transform: translate(0,0) rotate(0deg); }
          33%      { transform: translate(18px,-12px) rotate(3deg); }
          66%      { transform: translate(-10px,10px) rotate(-2deg); }
        }
        .drift { animation: drift 14s ease-in-out infinite; }
        .drift2 { animation: drift 18s ease-in-out infinite reverse; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "#f4f7f2",
        fontFamily: "'Lato', sans-serif",
      }}>

        {/* ── HERO HEADER ─────────────────────────────────── */}
        <section style={{
          position: "relative",
          background: "linear-gradient(160deg, #0f2310 0%, #1a3d1a 45%, #0d2b10 100%)",
          padding: "100px 32px 90px",
          overflow: "hidden",
          textAlign: "center",
        }}>
          {/* Background organic shapes */}
          <div className="drift" style={{
            position: "absolute", top: "-80px", left: "-100px",
            width: "500px", height: "500px", borderRadius: "60% 40% 70% 30% / 50% 60% 40% 70%",
            background: "rgba(74,158,66,0.08)", pointerEvents: "none",
          }} />
          <div className="drift2" style={{
            position: "absolute", bottom: "-60px", right: "-80px",
            width: "400px", height: "400px", borderRadius: "40% 60% 30% 70% / 60% 40% 70% 50%",
            background: "rgba(42,144,168,0.07)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "30%", right: "15%",
            width: "200px", height: "200px", borderRadius: "50%",
            background: "rgba(208,128,32,0.05)", pointerEvents: "none",
          }} />

          {/* Grid pattern */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "rgba(74,158,66,0.15)",
                border: "1px solid rgba(74,158,66,0.3)",
                borderRadius: "100px", padding: "7px 18px", marginBottom: "28px",
              }}
            >
              <span style={{ fontSize: "0.85rem" }}>🌿</span>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.68rem", fontWeight: 700,
                color: "#7acc70", letterSpacing: "0.12em",
              }}>
                STRESTA COTTON MILL · PRODUCT CATALOGUE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
                fontWeight: 400,
                color: "#f0f5ee",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "22px",
              }}
            >
              Discover Our<br />
              <em style={{ color: "#7acc70" }}>Premium Products</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "1rem", color: "rgba(240,245,238,0.55)",
                lineHeight: 1.85, maxWidth: "520px", margin: "0 auto 48px",
              }}
            >
              From raw fibre to cold-pressed oils — every product from Stresta carries five decades
              of craft, quality, and an uncompromising standard.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{
                display: "flex", justifyContent: "center",
                gap: "0", flexWrap: "wrap",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
                maxWidth: "640px",
                margin: "0 auto",
              }}
            >
              {STATS.map((s, i) => (
                <div key={s.label} style={{
                  flex: "1 1 140px",
                  padding: "22px 16px",
                  textAlign: "center",
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}>
                  <p style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "1.8rem", color: "#7acc70", lineHeight: 1,
                  }}>{s.value}</p>
                  <p style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "0.6rem", color: "rgba(255,255,255,0.35)",
                    letterSpacing: "0.12em", marginTop: "5px",
                  }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PRODUCT GRID ─────────────────────────────────── */}
        <section style={{ padding: "72px 32px 80px", maxWidth: "1180px", margin: "0 auto" }}>
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "48px" }}
          >
            <div style={{ width: "36px", height: "2px", background: "#4a9e42", borderRadius: "2px" }} />
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.68rem", fontWeight: 700,
              color: "#4a9e42", letterSpacing: "0.2em",
            }}>
              ALL PRODUCTS
            </span>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}>
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA BAND ──────────────────────────────── */}
        <section style={{
          margin: "0 32px 72px",
          maxWidth: "1180px",
          marginLeft: "auto", marginRight: "auto",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: "24px",
              background: "linear-gradient(135deg, #1a3d1a 0%, #0f2310 100%)",
              padding: "56px 48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "28px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 24px 64px -16px rgba(15,35,16,0.35)",
            }}
          >
            <div style={{
              position: "absolute", top: "-60px", right: "-60px",
              width: "280px", height: "280px", borderRadius: "50%",
              background: "rgba(74,158,66,0.1)", pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.65rem", fontWeight: 700,
                color: "#7acc70", letterSpacing: "0.18em",
                marginBottom: "10px",
              }}>
                🌾 BULK ORDERS WELCOME
              </p>
              <h3 style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#f0f5ee", lineHeight: 1.2,
              }}>
                Need a custom quote<br />or bulk supply?
              </h3>
            </div>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.05em",
                  color: "#0f2310",
                  background: "#7acc70",
                  border: "none", borderRadius: "12px",
                  padding: "14px 32px", cursor: "pointer",
                  boxShadow: "0 8px 24px rgba(74,158,66,0.4)",
                }}
              >
                Request a Quote →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "0.85rem", fontWeight: 600,
                  color: "rgba(240,245,238,0.65)",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  padding: "14px 28px", cursor: "pointer",
                }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer style={{
          textAlign: "center", padding: "24px 32px",
          borderTop: "1px solid rgba(74,158,66,0.12)",
        }}>
          <p style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "0.75rem", color: "#aaa",
          }}>
            © {new Date().getFullYear()} Stresta Cotton Mill · All Rights Reserved
          </p>
        </footer>
      </div>
    </>
  );
}