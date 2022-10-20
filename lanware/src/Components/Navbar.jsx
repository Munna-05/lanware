import React, { useState } from 'react'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

const Navbar = ({socket}) => {
      
      const [notifications,setNotifications] = useState([])
    useEffect(()=>{
      setTimeout(() => {
        socket?.on('getNotification',data=>{
          setNotifications((prev)=>[...prev,data])
          
        })
      }, 1000);
    },[socket])
    console.log(notifications)
  return (
    <div>
        <div className='flex justify-between w-5/6 mx-auto py-5 mb-16 bg-gradient-to-r from-sky-200 to-blue-200 px-4 rounded mt-1'>
            <div className='font-bold text-slate-700' >WEB APP</div>
            <div className='px-3'>
                <button className='mx-6'>Notifications</button>
                {/* <button className='mx-6'>O</button>
                <button className='mx-6'>O</button> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar