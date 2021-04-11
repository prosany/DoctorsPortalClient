import React from 'react';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link me-2 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 ms-2" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 ms-2 text-white" href="#">Dental Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 ms-2 text-white" href="#">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 ms-2 text-white" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2 text-white" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;