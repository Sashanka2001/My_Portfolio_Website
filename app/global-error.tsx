"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080e18",
          color: "#e2e8f0",
          fontFamily: "Inter, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Something went wrong
        </h1>
        <p style={{ color: "#94a3b8", marginBottom: "2rem" }}>
          An unexpected error occurred on the Sashanka Rathnayaka portfolio.
        </p>
        <button
          onClick={reset}
          style={{
            padding: "0.75rem 2rem",
            background: "linear-gradient(to right, #0d9488, #2563eb)",
            color: "white",
            border: "none",
            borderRadius: "0.75rem",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
