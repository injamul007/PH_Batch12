import { use } from "react"


export default function Users({fetchUsers}) {
  const userData = use(fetchUsers)
  return (
    <div className='card'>
      <h3>Users: {userData.length}</h3>
    </div>
  )
}