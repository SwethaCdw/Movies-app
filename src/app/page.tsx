
import Link from "next/link";


export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#18122B"
    }}>
      <h1 style={{ fontSize: "2.2rem", color: "#FFD700", marginBottom: "2rem", textShadow: "0 2px 12px #A259FF" }}>
        Movie Debugging Assignment
      </h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link
          href="/movies"
          style={{
            padding: "1rem 2.5rem",
            background: "linear-gradient(90deg, #E94560 0%, #A259FF 100%)",
            color: "black",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 2px 12px 0 #A259FF",
            display: "inline-block"
          }}
        >
          Movies
        </Link>
        <Link
          href="/screenings"
          style={{
            padding: "1rem 2.5rem",
            background: "linear-gradient(90deg, #E94560 0%, #A259FF 100%)",
            color: "#18122B",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 2px 12px 0 #A259FF",
            display: "inline-block"
          }}
        >
          Screenings
        </Link>
      </div>
      <p style={{ marginTop: "2.5rem", color: "#B8B8D1", maxWidth: 400, textAlign: "center" }}>
        Start by exploring the Movies or Screenings pages. Each contains intentional bugs for you to find and fix.
      </p>
    </div>
  );
}
