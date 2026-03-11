import React, { JSX } from "react";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <main style={{ padding: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Bienvenido a mi página principal
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
          Esta es una página de ejemplo para la ruta principal / usando Next.js con TypeScript.
        </p>
        <Link
          href="/not-found"
          style={{
            color: "#0070f3",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Ir a página 404 de prueba
        </Link>
      </div>
    </main>
  );
}