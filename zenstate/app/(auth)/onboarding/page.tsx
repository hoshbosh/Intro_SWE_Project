import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/components/Footer'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'
import WeekForm from '@/components/weeklypoints/weeklypoints'
import Leaderboard from '@/components/Leaderboard/Leaderboard'

export default function onboarding() {
  return (
    <div>
        <NavbarUser />
        <BackgroundGradientAnimation />
        <div style={{ position: 'absolute', bottom: '250px', left: '20px', zIndex: 999 }}>
          <WeekForm />
        </div>
        <div style={{ position: 'absolute', bottom: '250px', right: '80px', zIndex: 999 }}>
          <Leaderboard />
        </div>
        <Footer />
    </div>
  )
}

// async function Page() {
//     return (
//         <main>
//             <h1 className="head-text">Onboarding</h1>
//         </main>
//     )
// }

// export default Page;
