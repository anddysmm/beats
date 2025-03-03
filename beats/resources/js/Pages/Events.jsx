import React from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav'


const Events = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar auth={props.auth}/>
                <div className="col-sm-9">
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Concert 1</h5>
                                    <p className="card-text"><strong>Artist:</strong> Artist Name 1</p>
                                    <p className="card-text"><strong>Date:</strong> January 1, 2024</p>
                                    <p className="card-text"><strong>Location:</strong> Venue Name 1, City, Country</p>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dolor id diam.dgfbhfdgbhnfgyhnjfcyghnjfujufykmjgvujmntyjtfyjudtftyukjgyu</p>
                                    <button className="btn btn-primary">Comprar Entradas</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Concert 2</h5>
                                    <p className="card-text"><strong>Artist:</strong> Artist Name 2</p>
                                    <p className="card-text"><strong>Date:</strong> February 15, 2024</p>
                                    <p className="card-text"><strong>Location:</strong> Venue Name 2, City, Country</p>
                                    <p className="card-text">Nullam consectetur magna in arcu lacinia, eu venenatis sapien pharetra.</p>
                                    <button className="btn btn-primary">Comprar Entradas</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
