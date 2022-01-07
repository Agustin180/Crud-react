import React from 'react'

const UserTable = (props) => (

  <table className='general-users'>

    <thead>

      <tr className='general_subtitle'>

        <td className='general-subtitle'>Name</td>
        <td className='general-subtitle'>Username</td>
        <td className='general-subtitle'>Edit</td>
        <td className='general-subtitle'>Delete</td>
      </tr>
    </thead>

    <tbody>
      {props.users.length > 0 ?
        props.users.map(user => (
          <tr key={user.id}>
            <td className='general-subtitle'>{user.name}</td>
            <td className='general-subtitle'>{user.username}</td>
            <td>
              <button className="general-button" onClick={() => { props.editRow(user) }}>Edit</button>
            </td>
            <td>
              <button className="general-button" onClick={() => { props.deleteUser(user.id) }}>Delete</button>
            </td>
          </tr>
        )) : (
          <tr>
            <td className="general-subtitle">No users found</td>
          </tr>
        )
      }
    </tbody>
  </table>

)

export default UserTable;