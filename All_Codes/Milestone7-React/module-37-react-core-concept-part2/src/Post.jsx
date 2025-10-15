

export default function Post({post}) {
  const {id,title,body} = post
  return (
    <div className="cards">
      <h3 className="individual">ID: {id}</h3>
      <h4 className="individual">Title: {title}</h4>
      <p className="individual">Body: {body}</p>
    </div>
  )
}