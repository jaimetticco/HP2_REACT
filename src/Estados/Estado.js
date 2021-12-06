import React, { Component} from "react";


export default class Estado extends Component {
    constructor()
    {super()
        this.state = {mensaje: "Bienvenido a React",contador:0}
    }

    incrementarContador() {
        this.setState({mensaje:"Ejemplo accion", contador:this.state.contador+1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.mensaje}</h1>
                <h3>{this.state.contador}</h3>
                <button onClick={()=>this.incrementarContador()}>Incrementar</button>
            </div>
        )
    }
}