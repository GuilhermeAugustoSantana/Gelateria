import React from "react";
import './style.css'

import Topo from "../../components/Topo";
import Rodape from "../../components/Rodape";
import ConteudoPgSobre from "../../components/ConteudoPgSobre";

export default function PaginaSobre(){
  return (
    <div>
      <Topo />
      <ConteudoPgSobre />
      <Rodape />
    </div> 
  );
}

