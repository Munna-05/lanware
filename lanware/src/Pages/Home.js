import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import HomeComponent from '../Components/HomeComponent'
import Posts from '../Components/Posts'
import {io} from 'socket.io-client'
import { useState } from 'react'
const Home = () => {
    const [socket,setSocket]=useState(null)
    const currentUser = localStorage.getItem('currentUser')

    useEffect(()=>{
        
        setSocket(io("http://localhost:5000"))
        // console.log(currentUser)
    },[])

    useEffect(()=>{
        socket?.emit('newUser',currentUser)
    },[socket,currentUser])
   
    const posts = [{
        key: '1',
        name: 'Mohan',
        fullname: 'Mohan lal',
        profilepic: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mohanlal_Viswanathan_BNC.jpg/640px-Mohanlal_Viswanathan_BNC.jpg",
        postpic: 'https://www.filmibeat.com/img/2020/03/lucifer-turns-one-factors-that-made-the-mohanlal-starrer-special-1-1585412927.jpg'
    },
    {
        kay:'2',
        name:"Mammootty",
        fullname:"Mammootty",
        profilepic:'https://pbs.twimg.com/profile_images/1303394749618028544/evM6BXQ1_400x400.jpg',
        postpic:'https://images.indianexpress.com/2022/10/Rorschach-Review-1200.jpg'
    }]
    return (
        <div>

            <Navbar socket={socket}/>
            
            {
                posts.map((details)=>{
                    return(
                        <>
                        <Posts currentUser={currentUser} key={details.key} socket={socket} name={details.name} fullname={details.fullname} profilepic={details.profilepic} postpic={details.postpic}  />
                        </>
                    )
                })
            }



        </div>
    )
}

export default Home