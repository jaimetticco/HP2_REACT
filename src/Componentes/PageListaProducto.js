import React,{Component} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompCabecera from "./CompCabecera";
import CompPiePagina from "./CompPiePagina";
import CompListaCategoria from "./CompListaCategoria";
import CompListaProducto from "./CompListaProducto";
import CompPedidoDetalle from "./CompPedidoDetalle";



class PageListaProducto extends Component
{
    /*state ={
    miPedido: dataJsonPedido,
    miPedidoDetalle: dataJsonListaDetalle;
    }*/
    render(){
        return  <Router>
        <div >
            <CompCabecera />
                <main role="main" className="container">
                    <Routes>
                        <Route path="productos" element={<Productos/>}/>
                        <Route path="pedidos" element={<Pedidos/>}/>
                        <Route path="contacto" element={<Contacto/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="/" element={<Inicio/>}/>
                    </Routes>
                </main>
            <CompPiePagina />
        </div>
    </Router>

}
}

export default PageListaProducto;
    function Productos()
    {
        return(<div className="row">
            <CompListaCategoria/>
            <CompListaProducto/>
        </div>);
    }

    function Pedidos()
    {
        return(<div className="row">
            pedidos
        </div>);
    }

    function Contacto()
    {
        return(<div className="row">
            Pagina o componente de contactos
        </div>);
    }

    function Login()
    {
        return(<div className="row">
            Pagina o componente de login
        </div>);
    }

    function Inicio()
    {
        return(<div className="row">
            Pagina o componente de inicio
        </div>);
    }