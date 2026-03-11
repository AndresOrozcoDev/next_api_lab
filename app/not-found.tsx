import React, { JSX } from "react";
import Link from "next/link";

export default function NotFound(): JSX.Element {
  return (
    <main style={{ padding: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
          404 - Page not found
        </h1>
        <p style={{ marginBottom: "1rem" }}>
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          style={{ color: "#0070f3", textDecoration: "underline", fontWeight: "bold" }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}