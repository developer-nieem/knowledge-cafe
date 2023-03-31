import React, { useEffect, useState } from 'react';
import { getBlogItemCart } from '../../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';

const Sidebar = ({cart,readTime}) => {
    const [bookmarkedBlog , setBookmarkedBlog] = useState([]);

    const [time, setTime] = useState(0);

    // bookmarked blog
    useEffect(()=>{
        const getBlogTitle = getBlogItemCart();
         let blogTitle = [];
    for (const key in getBlogTitle) {
        blogTitle.push(key); 
        }
        setBookmarkedBlog(blogTitle);
    },[cart])
  


        // read time 
        useEffect(()=>{
            const getItem = localStorage.getItem('readTime');
            if (!getItem) {
                setTime(0)
            }else{
                setTime(getItem)
            }
            
        },[readTime])
       
    return (
        <div >
            <h5 className='bg-white p-3 rounded my-4 text-primary'>Spent time on read : {time} min</h5>
            <h5 className='fw-bold'>Bookmarked Blogs : {bookmarkedBlog.length}</h5>
            {
                bookmarkedBlog.map(title => <h5 className='bg-white p-3 rounded'>{title}</h5>)
            }
        </div>
    );
};

export default Sidebar;