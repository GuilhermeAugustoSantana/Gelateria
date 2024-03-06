import React from "react";
import { Link } from "react-router-dom";

export default function Topo() {
  return (
    <header>
      <div>
        <img src="assets/logo.png" alt="logo da gelateria" />
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Sobre</Link>
          <Link to='/sabores'>Sabores</Link>
        </nav>
      </div>
    </header>
  );
}

