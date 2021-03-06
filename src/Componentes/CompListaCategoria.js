import React,{Component} from 'react';
import dataJsonListaCategorias from '../DataJson/dataJsonListaCategoria.json';

class CompListaCategoria extends Component{

    render(){
        return  <div className="col-3">
                <p className="h5 text-secondary">Categorías({dataJsonListaCategorias.length+1}) </p>
                <div className="card">
                <ul className="list-group list-group-flush">
                    { dataJsonListaCategorias.map((categoria,indice)=>{

                        var url = "productos/porcategoria/"+categoria.id;
                        return <li className="list-group-item" key={categoria.id}>
                            <a href={url} className="text-secondary">{categoria.nombre}</a>
                        </li>
                    }  )
                    }
                </ul>
                </div>
            </div>
    }
}
export default CompListaCategoria;