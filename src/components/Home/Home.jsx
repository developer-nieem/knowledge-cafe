import React, { useEffect, useState } from 'react';
import { addToDb, getBlogItemCart } from '../../utilities/fakedb';
import MainData from './MainData/MainData';
import Sidebar from './Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
    
    const [cart, setCart] =useState('');
    const [readTime, setReadTime] = useState('')


    const setBookmark = (postData) =>{
        // console.log(postData.id);

        // get data from localStorage
    const anotherAdded = getBlogItemCart();
    let getBlogTitle = [];
    for (const key in anotherAdded) {
        getBlogTitle.push(key)
        }

        // if condition is true put a alert 
        const getTitle = getBlogTitle.find(item=> item ===  postData.title );
        if (getTitle) {
            toast("Already exists !!!");
        }
        
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
            <div className="col-md-4 bg-light rounded">
            <Sidebar readTime={readTime} cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Home;