import Stopwatch from '@/components/Stopwatch'
import React from 'react'
import Navbar from '../../components/Navbar'
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

// const page = () => {
//   return (
//     <>
//       <navbar />
//       <Stopwatch />
//     </>
//   )
// }

// export default page
