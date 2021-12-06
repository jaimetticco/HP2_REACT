import React, { Component} from "react";

class CompPedidoDetalle extends Component
{
    render()
    {
        return <div className="col 9">
            <p className="h5 text-secondary">Pedido</p>
            <div className="card border-primary">
                <div className="card-header bg-transparent border-secondary h4 text-primary">
                    <span style={{ float: 'left'}}>Numero: {this.props.pPedido.id}</span>
                    <span style={{ float: 'right'}}>Total S/: {this.props.pPedido.total}</span>
                </div>
                <div className="card-body text-secondary">
                    <h5 className="card-title">Produtos</h5>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" className="text-center">#</th>
                                <th scope="col" className="text-center">Produto</th>
                                <th scope="col" className="text-center">Marcas</th>
                                <th scope="col" className="text-center">Precio unitario</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Subtotal</th>
                                <th scope="col" className="text-center">#</th>
                            </tr>
                        </thead>
                        {
                            /*this.props.pPedidoDetalle.map((item, indice) => {
                            return <CompPedidoDetalleItem pItem={item} pIndice={indice} key={indice}/>
                            })
                            */
                        }
                    </table>
                </div>
                <div className="card-footer bg-transparent border-secondary h4 text-secondary text-right">
                    <button type="submit" className="btn btn-primary my-1">Finalizar compra</button>
                </div>

            </div>
        </div>
    }
}

export default CompPedidoDetalle;