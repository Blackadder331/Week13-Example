import React from 'react';
import Form from './form';
import Navbar from './navbar';

function Container(props) {
    return(
        <div className='container-fluid bg-dark text-white'>
            <div className='container'>
            <div className="row">
                <div className="col-12 mx-auto">
                    <Navbar />
                </div>
            </div>
            <div className='row'>
            <div className='row='>
                <div className="col-12 mx-auto">
                    <Form />
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Container;