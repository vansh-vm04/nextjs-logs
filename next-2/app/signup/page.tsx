'use client'

import axios from "axios";
import { useRef, useState } from "react"

export default function SignUp(){
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const [message, setmessage] = useState('')
    const submit = async ()=>{
        const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/v1/signup`,{
            username:username?.current?.value,
            password:password?.current?.value
        })
        setmessage(response.data.message);
    }

    return(
        <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex items-center flex-col gap-4 max-w-[233px]">
            <span className="font-bold text-3xl text-blue-400">Please Sign Up</span>
            <input className="bg-gray-500 rounded-md p-2 text-white" ref={username} type='text' name='username'/>
            <input className="bg-gray-500 rounded-md p-2 text-white" ref={password} type='password' name='password'/>
            <span className="text-green-400 text-sm">{message}</span>
            <button onClick={submit} className="bg-blue-500 hover:cursor-pointer hover:bg-blue-300 rounded-md p-4 text-white border-1 border-blue-900">SignUp</button>
        </div>
        </div>
    )
}