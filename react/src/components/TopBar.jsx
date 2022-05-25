import React from 'react'
import { useSelector } from 'react-redux'

export default function TopBar() {
  const name = useSelector((state) => state.user.userInfo.name)
  return (
    <div
      style={{
        width: '100%',
        height: '5vh',
        background: 'lightblue',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '30px',
        boxSizing: 'border-box',
      }}
    >
      {name}
    </div>
  )
}
