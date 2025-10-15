

export default function Friend({friend}) {
  const {id,name,username,email,phone,website} = friend
  return (
    <div style={{border:'2px solid gold',borderRadius:'10px',marginBottom:'16px'}}>
      <h3>Friend No: {id}</h3>
      <h3>Name: {name}</h3>
      <h3>Username: {username}</h3>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Website: {website}</h3>
    </div>
  )
}