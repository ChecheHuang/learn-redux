import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//todo 第三階段
import { updateUser2 } from '../redux/userSlice'
//todo 第二階段
// import { updateUser } from '../redux/apiCalls'
//todo 第一階段
// import { addHello, remove, update } from '../redux/userSlice'

import './center.scss'
export default function Center() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { userInfo, pending, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  function handleUpdate(e) {
    e.preventDefault()
    //todo 第一階段
    // dispatch(update({ name, email }))
    // dispatch(addHello({ name, email }))
    //todo第二階段
    // updateUser({ name, email }, dispatch)
    //todo第三階段
    dispatch(updateUser2({ name, email }))
  }
  function handleDelete(e) {
    e.preventDefault()
    //todo 第一階段
    // dispatch(remove())
  }
  return (
    <div className="center">
      <form>
        <div>
          <label htmlFor="">user</label>
          <input
            placeholder={userInfo.name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">account</label>
          <input
            placeholder={userInfo.email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="text"
          />
        </div>
        <button disabled={pending} onClick={handleUpdate}>
          更新
        </button>
        {error && <span>something went wrong!!</span>}
        {pending === false && <span>Account has been updated!!</span>}
        <button
          style={{ background: 'white', color: 'black' }}
          onClick={handleDelete}
        >
          刪除
        </button>
      </form>
    </div>
  )
}
