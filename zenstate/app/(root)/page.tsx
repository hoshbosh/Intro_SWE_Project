import Stopwatch from '@/components/Stopwatch'
import React from 'react'
import { UserButton } from "@clerk/nextjs"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import Link from 'next/link'
import WeekForm from '@/components/weeklypoints/weeklypoints'
import Leaderboard from '@/components/Leaderboard/Leaderboard'

export default function Home() {
  return (
    <div>
      <Navbar />
      <BackgroundGradientAnimation>
        <div style={{ position: 'absolute', bottom: '250px', left: '20px', zIndex: 999 }}>
          <WeekForm />
        </div>
        <div style={{ position: 'absolute', bottom: '250px', right: '80px', zIndex: 999 }}>
          <Leaderboard />
        </div>

      </BackgroundGradientAnimation>
      <Footer />
    </div>
  ) 
}
