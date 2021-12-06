import React, { Component} from "react";

class CompPedidoDetalleItem extends Component{

    render(){
        return <tbody>
            <tr>
                <th scope="row">{this.pIndice + 1}</th>
                <td>{this.props.pItem.producto.nombre}</td>
                <td>{this.props.pItem.producto.marca.nombre}</td>
                <td class="text-right">{this.props.pItem.precioUnitario}</td>
                <td class="text-right">{this.props.pItem.cantidad}</td>
                <td class="text-right">{this.props.pItem.subTotal}</td>
                <td className="text-center">
                    <button type="button" className="btn btn-outline-danger btn-sm"
                    onClick={this.props.pFuncEliminarProducto.bind(this, this.producto)}/>
                </td>
            </tr>
        </tbody>
    }

}
export default CompPedidoDetalleItem;