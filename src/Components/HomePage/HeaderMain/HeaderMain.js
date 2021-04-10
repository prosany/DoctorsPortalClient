import React from 'react';
import Chair from '../../../Images/Chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>
                    Your New Smile<br/>Starts Here
                </h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum eos officia ratione, suscipit porro a vel delectus dolorem? Asperiores, quisquam.
                </p>
                <button className="btn btn-primary">
                    Get Appointment
                </button>
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;