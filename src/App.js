import React, { Component } from "react";
import gira from "./img/girassol.jpg";

class you extends Component {
  state = {
    nome: "Veronica",
    idade: 30,
    comida: "feijoada"
    musica: ["Im felling good","Gente bonita","Gente feliz"]
  };
    
    render () {
      return (
        <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Minha idade é {this.state.idade}</h2>
        <h3>Minha comida preferida é {this.state.comida} </h3>
        <ul>
          <li>Primeira música favorita{this.state.musica[0]} </li>
          <li>Segunda música favorita{this.state.musica[1]} </li>
          <li>Terceira música favorita{this.state.musica[2]} </li>
        </ul>
        <img src={gira} alt="girassol" />
      </div>
      );
    }
}

export default you;
