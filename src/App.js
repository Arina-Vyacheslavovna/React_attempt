import React, { useEffect, useState } from 'react'
import {Login} from './Components/Login'
import {Logout} from './Components/Logout'
import {useSelector, useDispatch} from 'react-redux'
import {getUserAction, selectUser} from './features/userReducer'
import './App.css'


export const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserAction())
  },[dispatch])
  
  return (
    <div>
      {(user) ? <Logout/> : <Login/>}
    </div>
   
  );
}

