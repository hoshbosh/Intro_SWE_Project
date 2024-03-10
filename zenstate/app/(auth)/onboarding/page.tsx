import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import NavbarUser from '@/components/NavbarUser'
import Footer from '@/components/Footer'
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation'

export default function onboarding() {
  return (
    <div>
        <NavbarUser />
        <BackgroundGradientAnimation />
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