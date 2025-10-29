import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
  // console.log(post)
  const {id,title,body} = post

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/posts/${id}`)
  }

  return (
    <div style={{border: '2px solid black', marginBottom: '12px'}}>
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
      <Link to={`/posts/${id}`}><button>Show Details</button></Link>
      <button onClick={handleNavigate}>Details of: {id}</button>
    </div>
  );
};

export default Post;