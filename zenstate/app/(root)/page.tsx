import Stopwatch from '@/components/Stopwatch'
import React from 'react'
import { UserButton } from "@clerk/nextjs"
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <Footer />
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
