import { useState } from "react";

function Users() {
  const [users,setUsers] = useState([]);
  const [ user,setUser ] = useState('');

  const loadAllData = () => {
    fetch('/api/users')
    .then(res=>res.json())
    .then(data=>{
      setUsers(data);
    })
  }

  const handleAddUser = () =>{
    fetch('/api/users',{
      method: "POST",
      body:JSON.stringify({user}),
      headers:{
        'content-type':'application/json'
      }
    })
    loadAllData();
  }
  
  const handleDelete = (id) => {
    fetch(`api/users/${id}`,{
      method: 'DELETE'
    })
  }

  return (
    <div>
      <h1>All Users</h1>
      <br />
      <input onChange={e=>setUser(e.target.value)} type="text" />
      <br />
      <button onClick={handleAddUser}>Add User</button>
      <hr />
      <button onClick={loadAllData}>Load Users</button>
      {
        users.map(user=>{
          return(
            <div key={user.id}>
              <h3>{user.id}:{user.name}</h3>
              <button onClick={()=>handleDelete(user.id)}>
                Delete
              </button>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default Users;