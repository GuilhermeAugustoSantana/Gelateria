import React from "react";

import Topo from "../../components/Topo";
import ConteudoPrincipal from "../../components/ConteudoPrincipal";
import Rodape from "../../components/Rodape";


export default function PaginaHome() {
  return (
    <div>
      <Topo />
      <ConteudoPrincipal />
      <Rodape />
    </div> 
  );
}

