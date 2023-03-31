import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const MainData = ({setBookmark,markRead}) => {

    const [blogs, setBlogs] = useState([]);
   
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            {
              blogs.map(post => <SingleBlog 
                key={post.id}
                markRead={markRead}
                setBookmark={setBookmark} 
                post={post}></SingleBlog>)  
            }
            
        </div>
    );
};

export default MainData;