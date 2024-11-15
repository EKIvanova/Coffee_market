import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axiosInstance';

export default function MainPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axiosInstance('/posts')
       .then((res) => res.json())
       .then(setPosts);
    }, []);

  return (
    <div>
    {posts.map((post) => (
        <ItemCard
          user={user} key={post.id} post={post} onDelete={() => handleDeletePost(post.id)}
        />
      ))}
      </div>
  )
}
