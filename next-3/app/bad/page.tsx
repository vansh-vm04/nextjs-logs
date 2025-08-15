"use client"

import { useState } from "react"

export default function Bad(){
    const [count,setCount] = useState(0);
    return (
        <div>
            I am a bad Page {"  "}
            <button className="border-2 border-white" onClick={()=>setCount(p=>p+1)}>Click me {count}</button>
        </div>
    )
}