import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div id="app">
    <h1>Fundamentos React 2</h1>
    <Aleatorio min={0} max={10}/>
    <Fragmento />
    <ComParametro
      titulo="Situação do aluno"
      nome="João"
      nota="8.7"
    ></ComParametro>
    <Primeiro></Primeiro>
  </div>
);
