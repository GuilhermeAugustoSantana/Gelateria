import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function Topo() {
  return (
    <header>
      <div className="limitar-secao topo">
        <img src="assets/logo.png" alt="logo da gelateria" />
        <nav>
          <Link className="link" to='/'>Home</Link>
          <Link className="link" to='/sabores'>Sabores</Link>
          <Link className="link" to='/sobre'>Sobre</Link>
        </nav>
      </div>
    </header>
  );
}

