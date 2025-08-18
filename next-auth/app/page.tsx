"use client"

import { SessionProvider, useSession } from "next-auth/react"

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <SessionProvider>
      <RealHome/>
      </SessionProvider>
    </div>
  );
}


export function RealHome(){
  const {status} = useSession();
  return (
    <div>
      {status==='authenticated' ? 'U are signed in' : 'u are not signed in'}
    </div>
  )
}