import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = ({post, setBookmark, markRead}) => {
    // console.log(post.tags);
    return (
        <div>
           <div className="card border-0" >
            <img src={post.coverImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <div className='d-flex justify-content-between gap-2'>
                        <div>
                            <img className='rounded-circle' style={{width:'60px', height:'60px'}} src={post.userPhoto} alt="...." />
                        </div>
                        <div>
                            <h3>{post.authorName}</h3>
                            <p>{post.publishDate}</p>
                        </div>
                    </div>
                    <div>
                        <p>{post.readTime} min read <button onClick={()=>{
                            setBookmark(post)
                        }} className='bg-white p-2'><FontAwesomeIcon icon={faBookmark} /></button></p>
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