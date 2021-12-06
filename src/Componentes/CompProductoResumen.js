import React, { Component } from "react";

class CompProductoResumen extends Component {
    render() {
        return (
            <div class="col mb-4">
                <div class="card h-100">
                    <a href="#">
                    <img src="img/huawey-p40-pro.png" class="card-img-top" alt="..." />
                    </a>
                    <div class="card-body ">
                        <a class="text-primary" href="#">
                            <h5 class="card-title">Huawey P40 Pro</h5>
                        </a>
                        <p class="card-text">
                            El Huawei P40 Pro es un gran representante de los celulares
                            Huawei.
                        </p>
                        <p class="text-primary">S/ 1250.00</p>
                        <button type="button" class="btn btn-success">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompProductoResumen;
