import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import BusniessInfo from '../BusniessInfo/BusniessInfo';

const Header = () => {
    return (
        <div className="Header-Container">
            <NavBar />
            <HeaderMain />
            <BusniessInfo />
        </div>
    );
};

export default Header;