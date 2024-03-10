import Stopwatch from '@/components/Stopwatch'
import React from 'react'
import { UserButton } from "@clerk/nextjs"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <BackgroundGradientAnimation />
      <Footer />
    </div>
  ) 
}