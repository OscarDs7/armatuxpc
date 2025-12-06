import React from "react";
import { useLocation } from "react-router-dom";

export default function Menuusuario() {
  const location = useLocation();
  const nombre = location.state?.nombre || "Usuario";

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bienvenido</h1>
      <h2>{nombre}, has iniciado sesión ✔️</h2>
    </div>
  );
}