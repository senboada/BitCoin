import React from 'react';

const Precio = (props) => {
    const {percent_change_1h,percent_change_24h,percent_change_7d,price} = props.precio;
    return (
        <div className="card text-white bg-success mb-3">
            <div className="card-header">
                Precio del Bitcoin
            </div>
            <div className="card-body">
                <h4 className="card-title">Precio actual: ${price.toFixed(2)}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">Ultima hora : </span> {percent_change_1h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Ultimas 24 horas : </span> {percent_change_24h} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Ultimos 7 dias : </span> {percent_change_7d} %
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Precio;