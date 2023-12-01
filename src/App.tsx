import { useEffect, useState } from 'react'
import axios from 'axios'
import type { User } from './types'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])

  const getUsers = async () => {
    try {
      const response = await axios.get('/users')
      setUsers(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.company}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
