import React from 'react'
import { useState } from 'react'

const Posts = (props) => {
    const [like, setLike] = useState(false)
    const [comment, setComment] = useState(false)
    const [share, setShare] = useState(false)
    const [follow,setFollow] = useState(false)


    
    const likeHandler = () => {
        setLike(!like)
        console.log('user liked your post')
        props.socket.emit('sendNotification',{
            senderName : props.currentUser,
            receiverName:props.fullname
        })
    }
    const commentHandler = () => {
        setComment(!comment)
        console.log('user commented on your post')
    }
    const shareHandler =()=>{
        setShare(!share)
        console.log('user shared your post')
    }
    const followHandler = () =>{
        setFollow(!follow)
        console.log('user follows you')
    }
  return (
    <div>
        <div className='w-1/4 
            bg-gradient-to-r from-sky-100 to-blue-100
            shadow shadow-lg shadow-slate-700 mx-auto rounded-lg my-2 pb-4' style={{ height: "auto" }}>
                    <div className='flex justify-between'>
                        <div className='flex'> 

                        <div className='rounded-full bg-cover mt-2 mx-2 h-10 w-10'style={{backgroundImage:`url(${props.profilepic})`}}></div>
                        <label htmlFor="" className='pl-3 pt-2 mt-2 text-slate-600 text-md capitalize'>{props.fullname}</label>

                        </div>
                        
                     {follow?
                        <button onClick={followHandler} className='mx-5 text-white border bg-blue-500 rounded-full px-2 hover:bg-blue-500 hover:border-blue-500 
                     
                        hover:text-white mt-4
                        ' style={{ fontSize: '0.8em' }}>followed</button>
                    :
                    <button onClick={followHandler} className='mx-5 text-slate-500 border border-slate-500 rounded-full px-2 hover:bg-blue-500 hover:border-blue-500 
                     
                    hover:text-white mt-4
                    ' style={{ fontSize: '0.8em' }}>follow</button>
                    }


                    </div>
                    <div className='w-fit h-fit  mt-3'><img className='' src={props.postpic} alt="" /></div>
                    <div className='flex mt-5 px-3 justify-between'>

                        {like ?
                            <button onClick={likeHandler} className='mx-1 px-2 text-red-500 text-sm capitalize hover:text-red-600 hover:scale-110 hover:duration-200'>liked</button>
                            :
                            <button onClick={likeHandler} className='mx-1 px-2 text-slate-500 text-sm capitalize hover:text-blue-600 hover:scale-110 hover:duration-200'>like</button>

                        }
                        {comment ?
                            <button onClick={commentHandler} className='mx-1 px-2 text-red-500 text-sm capitalize hover:text-red-600 hover:scale-110 hover:duration-200'>commented</button>
                            :
                            <button onClick={commentHandler} className='mx-1 px-2 text-slate-500 text-sm capitalize hover:text-blue-600 hover:scale-110 hover:duration-200'>comment</button>
                        }

                        {share?
                        <button onClick={shareHandler} className='mx-1 px-2 text-red-500 text-sm capitalize hover:text-red-600 hover:scale-110 hover:duration-200'>shared</button>
                            :
                        <button onClick={shareHandler} className='mx-1 px-2 text-slate-500 text-sm capitalize hover:text-blue-600 hover:scale-110 hover:duration-200'>share</button>


                        }
                    </div>
                </div>

    </div>
  )
}

export default Posts