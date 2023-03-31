import React from 'react';

import code from '../../assets/code.png'
const Blogs = () => {
    return (
        <div className='mt-'>
            <div className="card mt-4">
            <div className="card-header">
            Props vs state
            </div>
            <div className="card-body">
                
                <p className="card-text"><b>Props:  </b> props can be send any javascript valid data to another components and use other components the send data , you can send like , array, object , dynamic value , function etc. and most important props cannot be changed its immutable</p>
                <p className="card-text"><b>State:</b> React State is mutable and its value can be changed As per requirments , state can be change is local to a components, cannot change other components, state mainly a dynamic intractive concept </p>
                
            </div>
            </div>
            <div className="card">
            <div className="card-header">
            How does useState work?
            </div>
            <div className="card-body">
                
                <p className="card-text">The useState hook is a function that takes an initial state value as an argument and returns an array with two elements: The first element is the current state value.
                The second element is a function that can be used to update the state. <br></br>
                here is the example: 
                
                 </p>
                 <img className='img-fluid' src={code} alt="" />
                
            </div>
            </div>
            <div className="card">
            <div className="card-header">
            Purpose of useEffect other than fetching data.
            </div>
            <div className="card-body">
                
                <p className="card-text">useEffect other than fetching data. Updating the document title, Subscribing to events, Cleaning up after a component, Triggering animations <br /> 
               And  useEffect is  allows us to perform side effects in functional components, making our components more dynamic and interactive.
                </p>
                
            </div>
            </div>
            <div className="card">
            <div className="card-header">
            How Does React work?
            </div>
            <div className="card-body">
                
                <p className="card-text">React is a JavaScript library for building user interfaces. It works by using a Virtual DOM  to manage the state of the user interface and efficiently update the UI when the state changes.</p>
                
            </div>
            </div>
        </div>
    );
};

export default Blogs;