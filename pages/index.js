// Next.js imports
import Head from 'next/head'

// Components
import NavBar from '../components/NavBar'
import Donators from '../components/Donators'
import ServerAd from '../components/ServerAd'
import Changelog from '../components/Changelog'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <section className='w-full'>
            <Head>
                <title>ProjectRP - GTA V | XBOX</title>
            </Head>
            <section className='flex flex-col items-center justify-center w-full bg-primary'>
                <NavBar
                    color='backdrop-blur'
                    list={[
                    { name: 'Home', href: '#', current: false },
                    { name: 'Donators', href: '#donators', current: false },
                    { name: 'Server Ad', href: '#advert', current: false },
                    { name: 'Changelog', href: '#changelog', current: false },
                    ]}
                    link={['Discord', 'https://discord.gg/ZmYusdMUj9']}
                    target='_blank'
                />
                <div>
                    <img src={'/bg.webp'} className="object-cover w-screen h-screen" />
                </div>
                <Donators />
                <ServerAd />
                <Changelog />
                <Footer />
            </section>
        </section>
    )
}
