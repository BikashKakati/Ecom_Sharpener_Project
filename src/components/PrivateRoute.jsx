import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const {userToken} = useAuthContext();
  return (
    <>
    {
        userToken ? (children) : <Navigate to="/login"/>
    }
    </>
  )
}

export default PrivateRoute