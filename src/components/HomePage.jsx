import React, {useState, useEffect} from 'react'

export default function homePage() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() =>{
        fetch('https://responsible-knowledgeable-restaurant.glitch.me/blog/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    },[])

    return (   
        <>
            <h1 className="text-center"> Welcome to Neyts Blog</h1>
            {posts.map( post => <PostCard key={post.id} post={post} />)}
        </>
        
  )
}
