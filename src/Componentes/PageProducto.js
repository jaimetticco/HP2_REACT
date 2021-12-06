import React,{Component} from 'react';
import CompCabecera from './CompCabecera';
import CompPiePagina from './CompPiePagina';
import CompListaCategoria from './CompListaCategoria';
import CompProductoDetalle from './CompProductoDetalle';


class PageProducto extends Component{

    render(){
            return  <div >
            <CompCabecera />
            <main role="main" className="container">
                <div className="row">
                    <CompListaCategoria/>
                    <CompProductoDetalle/>
                </div>
            </main>
            <CompPiePagina />
        </div>
    }
}

export default PageProducto;