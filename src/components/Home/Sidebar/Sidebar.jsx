import React, { useEffect, useState } from 'react';
import { getBlogItemCart } from '../../../utilities/fakedb';

const Sidebar = ({cart,readTime}) => {
    const [time, setTime] = useState(readTime);

    const getBlogTitle = getBlogItemCart();
    let blogTitle = [];
    for (const key in getBlogTitle) {
        blogTitle.push(key)
            
        }
  
        // read time 
        useEffect(()=>{
            const getItem = localStorage.getItem('readTime');
            setTime(getItem)
        },[readTime])
       
    return (
        <div >
            <h5 className='bg-white p-3 rounded my-4 text-primary'>Spent time on read : {time} min</h5>
            <h5 className='fw-bold'>Bookmarked Blogs : {blogTitle.length}</h5>
            {
                blogTitle.map(title => <h5 className='bg-white p-3 rounded'>{title}</h5>)
            }
        </div>
    );
};

export default Sidebar;