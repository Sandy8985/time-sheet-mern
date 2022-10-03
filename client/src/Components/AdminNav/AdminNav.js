import React from 'react'
import '../Homenav/Homenav.css'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useAdminLogout } from '../../hooks/useAdminLogout'

const Homenav = () => {
  const {alogout} = useAdminLogout()
  const {user} = useAuthContext()

  const handleClick = ()=>{
    alogout();
  }
  return (
    <div>
        {!user && (
          <div className="nav">
          <h1>INKPROG</h1>
          <h2>TIMESHEET AND ATTENDANCE MANAGMENT SOFTWARE</h2>
        </div>
        )}

        {user && (
          <div className="navbar">
          <h1>INKPROG</h1>
          <div className="menu">
            <button onClick={handleClick}>signout</button>
          </div>
        </div>
         )}
    </div>
  )
}

export default Homenav