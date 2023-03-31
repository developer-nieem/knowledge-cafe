import React, { useEffect, useState } from 'react';
import { addToDb, getBlogItemCart } from '../../utilities/fakedb';
import MainData from './MainData/MainData';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
   /*  const [blog, setBlog] = useState([]) */
    const [cart, setCart] =useState('');
    const [readTime, setReadTime] = useState(0)


    const setBookmark = (postData) =>{
        // console.log(postData.id);
        setCart(postData)
        addToDb(postData.title);
    }

    // Read time function
    const markRead = (time) =>{
        // console.log('read',time);
        const previousReadTime= JSON.parse(localStorage.getItem('readTime'));
        if(previousReadTime){
            const sum =  previousReadTime + time.readTime;
            localStorage.setItem('readTime', sum )
            setReadTime(sum)
        }else{
            localStorage.setItem('readTime',time.readTime );
            setReadTime(time.readTime)
        }
    }
    return (
        <div className='row'>
            <div className='col-md-8'>
            <MainData markRead={markRead} setBookmark={setBookmark}></MainData>
            </div>
            <div className="col-md-4 bg-light mt-5">
            <Sidebar readTime={readTime} cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Home;