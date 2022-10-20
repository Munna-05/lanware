import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = () => {
    const [username,setUsername] = useState('')
    const [user,setUser] = useState('')
    const navigate = useNavigate()
    // console.log(user)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(username.length>0){
            console.log(username)
            navigate('/home')
            localStorage.setItem('currentUser',username)
        }else{
            toast.error("Enter a Valid Password",{autoClose:1000,position:toast.POSITION.TOP_CENTER});
        }
    }
    return (
        <div>
            <ToastContainer />
            <script defer src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js"></script>
            <div className="flex flex-col h-screen bg-gradient-to-b from-sky-200 to-blue-200">
                <div className="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
                    <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg">
                        <div className="text-center mb-4">
                            <h6 className="font-semibold text-[#063970] text-xl">Login</h6>
                        </div>
                        <form className="space-y-5" method="POST">
                            <div>
                                <input id="text" type="text" onChange={(e)=>setUsername(e.target.value)} className="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            </div>



                            <button type="submit" onClick={handleSubmit} className="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default LoginComponent;