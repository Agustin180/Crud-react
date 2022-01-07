import React, { useState } from 'react';
import './App.css';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUseForm';

const App = () => {
  /* DATA */
  const usersData = [
    { id: uuidv4(), name: "Jorge", username: "jorgemaster" },
    { id: uuidv4(), name: "Felipe", username: "felpz" },
    { id: uuidv4(), name: "Alex", username: "evilafm" },
  ];


  /* HOOKS */
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  /* ADD USERS */
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  /* DELETE USERS */
  const deleteUser = (id) => {
    const arrfilter = users.filter(user => user.id !== id)
    setUsers(arrfilter);
  }

  /* EDIT USERS */
  const [editing, setEditing] = useState(false)

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user)))

  }

  console.log(users)


  return (
    <div className="App">

      <h1 className='general-title' id="app_title">CRUD App with Hooks</h1>

      <div className='general_content'>

        <div className='general-add'>
          {
            editing ? (
              <div>
                <h2 className='general-title'>Edit user</h2>
                <EditUserForm updateUser={updateUser} currentUser={currentUser}/>
              </div>
            ) : (
              <div>
                <h2 className='general-title'>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div>
          <h2 className='general-title'>View users</h2>

          <UserTable 
          deleteUser={deleteUser} 
          users={users} 
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
