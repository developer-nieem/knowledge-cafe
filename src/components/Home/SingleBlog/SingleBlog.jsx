import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { getBlogItemCart } from '../../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';


const SingleBlog = ({post, setBookmark, markRead}) => {
    // console.log(post.tags);
    // && anotherAdded[key] !

const notifyItem = () =>{
    const anotherAdded = getBlogItemCart();
    for (const key in anotherAdded) {
       if (key === post.title) {
        const notify = () => toast("Wow so easy!");
            notify()
       }
   }
}
  
    return (
        <div>
           <div className="card border-0 p-0" >
            <img src={post.coverImage} className="card-img-top" alt="..."/>
            <div className="card-body p-0 pt-3">
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between gap-2'>
                        <div>
                            <img className='rounded-circle' style={{width:'60px', height:'60px'}} src={post.userPhoto} alt="...." />
                        </div>
                        <div>
                            <h5>{post.authorName}</h5>
                            <p>{post.publishDate}</p>
                        </div>
                    </div>
                    <div>
                        <p>{post.readTime} min read <button onClick={()=>{
                            setBookmark(post), notifyItem() 
                        } } className='bg-white p-2'><FontAwesomeIcon icon={faBookmark} /></button></p>
                    </div>
                </div>
                    <h2 className='my-4'>{post.title}</h2>
                    <p>{post.tags.map(tag=> <span className='me-2'>{tag}</span>)}</p>
                <button onClick={()=>markRead(post)} className="link-underline-primary bg-white text-primary">Mark as read</button>
                
            </div>
            </div> 
        </div>
    );
};

export default SingleBlog;