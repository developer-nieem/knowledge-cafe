import React, { useEffect, useState } from 'react';
import { addToDb, getBlogItemCart } from '../../utilities/fakedb';
import MainData from './MainData/MainData';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
   /*  const [blog, setBlog] = useState([]) */
    const [cart, setCart] =useState('');

    // useEffect(()=>{
    //     const getCarts = getBlogItemCart();
    //     let storProduct = [];
    //     // step 1: get id
    //     for (const name in getCarts) {
    //         //step 2: get the cart by using id
    //         const product = blog.find(food => food.strCategory === name);
    //         if (product) {
    //             storProduct.push(product)
    //         }
    //     }
    //     setCart(storProduct)
    // },[blog])

    const setBookmark = (postData) =>{
        // console.log(postData.id);
        setCart(postData)
        addToDb(postData.title);
    }

    const markRead = (time) =>{
        // console.log('read',time);
        const getTimeFromLocal= JSON.parse(localStorage.getItem('readTime'));
        if(getTimeFromLocal){
            const sum =  getTimeFromLocal + time.readTime;
            localStorage.setItem('readTime', sum )
        }else{
            localStorage.setItem('readTime',time.readTime )
        }
    }
    return (
        <div className='row'>
            <div className='col-md-8'>
            <MainData markRead={markRead} setBookmark={setBookmark}></MainData>
            </div>
            <div className="col-md-4 bg-light mt-5">
            <Sidebar cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Home;