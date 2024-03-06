import React from "react";

import SecaoBanner from "../../components/SecaoBanner";
import SecaoEventos from "../../components/SecaoEventos";
import SecaoSabores from "../../components/SecaoSabores";
import SecaoSobre from "../../components/SecaoSobre";

export default function ConteudoPrincipal() {
  return (
    <main>
      <SecaoBanner />
      <SecaoSabores />
      <SecaoEventos />
      <SecaoSobre />
    </main>
  );
}

