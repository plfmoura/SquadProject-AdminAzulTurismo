import React from 'react'
import UserContent from './UserContent'
import UserPurchase from './UserPurchase'
import './selectedUser.css'

export default function SelectedUser() {
  return (
    <div className='SelectedUser-container'>
      <h1>Usuarios cadastrados</h1>
      <main className='selectedUser-content'>
        <UserContent />
        <UserPurchase />
      </main>
    </div>
  )
}
