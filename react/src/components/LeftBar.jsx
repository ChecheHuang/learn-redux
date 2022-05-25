import React from 'react'
import { useSelector } from 'react-redux'

export default function LeftBar() {
  const name = useSelector((state) => state.user.userInfo.name)
  return (
    <div
      style={{
        background: 'pink',
        width: '20vw',
        height: '95vh',
        textAlign: 'center',
        lineHeight: '95vh',
      }}
    >
      {name}
    </div>
  )
}
