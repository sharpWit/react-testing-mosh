import React from 'react'
import './style.css'
import UsersList from './Components/UsersList'

const users = [
  1, 2, 3, 4
]


function App() {
  return (
    <UsersList users={users} />
  )
}

export default App;
