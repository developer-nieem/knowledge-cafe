import React from 'react';
import MainData from './MainData/MainData';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='row'>
            <div className='col-md-9'>
            <MainData></MainData>
            </div>
            <div className="col-md-3">
            <Sidebar ></Sidebar>
            </div>
        </div>
    );
};

export default Home;