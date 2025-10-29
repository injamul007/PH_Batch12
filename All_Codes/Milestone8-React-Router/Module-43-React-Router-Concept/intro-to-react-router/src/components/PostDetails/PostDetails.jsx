import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
  const postDeatils = useLoaderData()
  // console.log(postDeatils)
  const {title, body} = postDeatils

  const navigate = useNavigate()

  // const handleNavigateGoBack = () => {
  //   navigate('/posts')
  // }
  
  return (
    <div>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
      <button onClick={()=> navigate('/posts')}>Go Back</button>
    </div>
  );
};

export default PostDetails;