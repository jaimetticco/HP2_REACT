import React, { CompCabecera } from "react";
import { Component } from "react/cjs/react.production.min";

class CompProductoDetalle extends Component {
    render() {
    return (
        <div className="col-9 ">
        <p className="h5 text-secondary">Producto</p>
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        src="img/huawey-p40-pro.png"
                        className="card-img"
                        alt="..."
                        />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Huawey P40 Pro</h5>
                                <p className="card-text">
                                    El Huawei P40 Pro es un gran representante de los celulares
                                    Huawei. Entre las mejores características y especificaciones
                                    del Huawei P40 Pro está su visionario sistema de cámaras
                                    unificado; efectivamente, este móvil cuenta con cuatro cámaras
                                    fotográficas en la parte posterior, de 50 MP, 40 MP, 12 MP, y
                                    una cámara de profundidad 3D. Además, en la parte frontal
                                    tiene una cámara de 32 MP y una cámara de profundidad, dándote
                                    la mejor experiencia en fotografía en alta definición.
                                </p>
                                <p className="h4 text-primary">S/ 1250.00</p>
                                <p className="text-right"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CompProductoDetalle;
