import React from "react";
import './styleSabores.css'

import Topo from "../../components/Topo";
import ConteudoPgSabores from "../../components/ConteudoPgSabores";
import Rodape from "../../components/Rodape";


export default function PaginaSabores() {
  return (
    <div>
      <Topo />
      <ConteudoPgSabores />
      <Rodape />
    </div> 
  );
}

