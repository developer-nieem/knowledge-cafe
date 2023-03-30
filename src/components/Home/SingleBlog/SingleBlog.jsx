import React from 'react';

const SingleBlog = ({post}) => {
    console.log(post.tags);
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
                        <p>{post.readTime} min read <button>book</button></p>
                    </div>
                </div>
                    <h2 className='my-4'>{post.title}</h2>
                    <p>{post.tags.map(tag=> <span className='me-2'>{tag}</span>)}</p>
                <a href="#" className="link-underline-primary">Mark as read</a>
                
            </div>
            </div> 
        </div>
    );
};

export default SingleBlog;