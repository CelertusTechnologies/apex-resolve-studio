import { useState, useEffect } from "react";

const DISCLAIMER_KEY = "apex-disclaimer-accepted";

export function DisclaimerModal() {
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem(DISCLAIMER_KEY);
    if (!accepted) {
      // Small delay so page doesn't flash before modal appears
      const t = setTimeout(() => setVisible(true), 100);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAgree = () => {
    setAnimateOut(true);
    setTimeout(() => {
      sessionStorage.setItem(DISCLAIMER_KEY, "true");
      setVisible(false);
    }, 450);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "oklch(0.08 0.005 250 / 0.75)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          animation: animateOut ? "fadeOut 0.45s ease forwards" : "fadeIn 0.35s ease both",
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 10000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            background: "oklch(0.99 0.002 250)",
            border: "1px solid oklch(0.30 0.005 250 / 18%)",
            borderRadius: "0.375rem",
            boxShadow: "0 40px 100px -20px oklch(0.08 0.005 250 / 0.45), 0 0 0 1px oklch(0.55 0.08 75 / 0.08)",
            maxWidth: "640px",
            width: "100%",
            maxHeight: "90vh",
            overflowY: "auto",
            animation: animateOut
              ? "slideOut 0.45s cubic-bezier(0.4,0,1,1) forwards"
              : "slideIn 0.45s cubic-bezier(0,0,0.2,1) both",
            animationDelay: animateOut ? "0s" : "0.05s",
          }}
        >
          {/* Gold top bar */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, oklch(0.62 0.10 80), oklch(0.45 0.08 70))",
              borderRadius: "0.375rem 0.375rem 0 0",
            }}
          />

          <div style={{ padding: "2.5rem 2.5rem 2rem" }}>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
              {/* Scale of justice icon */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, oklch(0.62 0.10 80 / 0.15), oklch(0.45 0.08 70 / 0.10))",
                  border: "1px solid oklch(0.55 0.08 75 / 0.25)",
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                }}
              >
                ⚖️
              </div>
              <h2
                id="disclaimer-title"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: "oklch(0.15 0.005 250)",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Disclaimer
              </h2>
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "linear-gradient(90deg, oklch(0.62 0.10 80), oklch(0.45 0.08 70))",
                  margin: "0.75rem auto 0",
                }}
              />
            </div>

            {/* Body text */}
            <div
              style={{
                fontSize: "0.8125rem",
                lineHeight: "1.8",
                color: "oklch(0.30 0.008 250)",
                textAlign: "justify",
                hyphens: "auto",
              }}
            >
              <p style={{ margin: 0 }}>
                As per the rules of the Bar Council of India, VD Legal is prohibited from soliciting
                work or advertising "VD Legal — Advocates &amp; Solicitors". By visiting, navigating
                through, and using this website you hereby acknowledge that there has been no
                advertisement, personal communication, solicitation, invitation or inducement of any
                sort from VD Legal or any of its advocates regarding any work or case or matter through
                this website. This website is solely intended to provide you with information about
                VD Legal, its practice areas, sectors and verticals, people, besides other related
                aspects of the firm. You have visited this website on your own and you wish to gain
                more information about VD Legal for your own information and use. You acknowledge that
                the website is not intended to be a source of solicitation or advertising. You are also
                informed that the contents on this website are not to be considered as legal opinion or
                advice in any manner whatsoever. VD Legal or any of its advocates shall not be liable
                for any consequences of any action taken by you relying on any information provided on
                this website.
              </p>
            </div>

            {/* CTA Button */}
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button
                onClick={handleAgree}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 2.5rem",
                  background: "linear-gradient(135deg, oklch(0.62 0.10 80), oklch(0.45 0.08 70))",
                  color: "oklch(0.99 0.002 250)",
                  border: "none",
                  borderRadius: "0.25rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
                  boxShadow: "0 4px 20px oklch(0.55 0.08 75 / 0.35)",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 8px 28px oklch(0.55 0.08 75 / 0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 4px 20px oklch(0.55 0.08 75 / 0.35)";
                }}
              >
                <span>✓</span> Agree &amp; Continue
              </button>
            </div>

            {/* Footer note */}
            <p
              style={{
                textAlign: "center",
                marginTop: "1.25rem",
                fontSize: "0.6875rem",
                color: "oklch(0.55 0.008 250)",
                letterSpacing: "0.02em",
              }}
            >
              By clicking "Agree &amp; Continue" you confirm that you have read and understood the above disclaimer.
            </p>
          </div>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: translateY(0)    scale(1);    }
          to   { opacity: 0; transform: translateY(-16px) scale(0.97); }
        }
      `}</style>
    </>
  );
}
