import React from "react";
import './styleHome.css'

import Topo from "../../components/Topo";
import ConteudoPgHome from "../../components/ConteudoPgHome";
import Rodape from "../../components/Rodape";


export default function PaginaHome() {
  return (
    <div>
      <Topo />
      <ConteudoPgHome />
      <Rodape />
    </div> 
  );
}

