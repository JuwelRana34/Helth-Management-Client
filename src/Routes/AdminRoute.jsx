import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate } from 'react-router'
import Loading from '../components/Loading'

function AdminRoute({children}) {
    const {isAdmin ,loading} = useContext(AuthContext)
    if(loading) return <div> <Loading/> </div>
    if(!isAdmin)return 
  return (
   children
  )
}

export default AdminRoute