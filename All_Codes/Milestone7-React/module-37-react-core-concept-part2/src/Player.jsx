

export default function Player({player}) {
  const {id,name,username,email,phone,website} = player;
  return (
    <div className="cards">
      <h3>ID: {id}</h3>
      <h3>Name: {name}</h3>
      <h4>Username: {username}</h4>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  )
}