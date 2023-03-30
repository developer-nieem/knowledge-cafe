import React from 'react';

const MainData = () => {
    return (
        <div>
            <div className="card border-0" >
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between gap-2'>
                        <div>
                            <img className='rounded-circle' style={{width:'60px', height:'60px'}} src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="...." />
                        </div>
                        <div>
                            <h3>Mr. Raju</h3>
                            <p>Mar 14 (4 Days ago)</p>
                        </div>
                    </div>
                    <div>
                        <p>05 min read <button>book</button></p>
                    </div>
                </div>
                    <h2>title</h2>
                <a href="#" className="link-underline-primary">Mark as read</a>
                
            </div>
            </div>
        </div>
    );
};

export default MainData;