import React, {Component} from 'react';
import CompProductoResumen from './CompProductoResumen';

class CompListaProducto extends Component {

    render(){
        return  <div class="col-9">
        <p class="h5 text-secondary">Smarphones</p>
                    <div class="row row-cols-1 row-cols-md-3">
                        <CompProductoResumen />

                    </div>
        </div>
    }
}
export default CompListaProducto;
