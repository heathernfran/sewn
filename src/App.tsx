import { useEffect, useState } from 'react'
import axios from 'axios'
import type { User } from './types'
import './App.css'

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User | null>()

  const getUsers = async () => {
    try {
      const response = await axios.get('/users')
      setUsers(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleCurrentUser = async (id: string) => {
    try {
      const response = await axios.get(`/users/${id}`)
      setCurrentUser(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleBack = () => {
    setCurrentUser(null)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const renderCurrentUser = () =>
    currentUser && (
      <>
        <button onClick={handleBack}>Back to all users</button>
        <h1>
          {currentUser.firstName} {currentUser.lastName}
        </h1>
        <h2>Company</h2>
        <p>{currentUser.company}</p>
        <h2>Email</h2>
        <p>{currentUser.email}</p>
        <h2>Phone number</h2>
        <p>{currentUser.phoneNumber}</p>
      </>
    )

  const renderTable = () => (
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
            <tr key={user.id} onClick={() => handleCurrentUser(user.id)}>
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

  return currentUser ? renderCurrentUser() : renderTable()
}

export default App
