import React, { Component} from "react";
import {BrowserRouter as Router, Routes, Route, Link}from "react-router-dom";

class CompCabecera extends Component {

    render() {
        return  <nav className="navbar navbar-expand-md navbar-blue bg-dark mb-4">
        <div className="container">
            <span className="float-left">
                <a className="navbar-brand" href="#">
                    <img src="img/PhoneStore2.png" width="250" height="50" alt="" />
                </a>
            </span>
            <div class="collapse navbar-collapse text-center" id="navbarsExample09">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    <Link class="nav-link" to="/">Inicio</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/productos">Productos</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/pedidos">Pedidos</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/contacto">Contacto</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/Login">Login</Link>
                    </li>
                </ul>
            </div>

            <span className="float-right">
                <div className="collapse navbar-collapse" id="navbarText">
                    <img src="img/carrito2.png" width="32" height="32" alt="" />
                    <a className="text-blue" href="#">&nbsp; producto(s)</a>
                </div>
            </span>
        </div>
    </nav>
    }
}
export default CompCabecera;