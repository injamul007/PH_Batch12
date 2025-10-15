import { use } from "react"
import Post from "./Post"

export default function Posts({userPosts}) {
  const userposts = use(userPosts)
  return (
    <div className="card">
      <h2>All Posts are here: {userposts.length}</h2>
      {
        userposts.map(post => <Post key={post.id} post={post}></Post>)
      }
    </div>
  )
}