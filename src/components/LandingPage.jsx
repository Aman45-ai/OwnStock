import React from 'react'
import logo from '../assets/logo.png'
import hero from '../assets/hero.png'
import lgHero from '../assets/lgHero.png'
import { ArrowRightCircleIcon, ShieldCheck, ShieldUser, Store, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='bg-[#000308] px-3 py-5 min-h-dvh md:px-8 lg:px-12 lg:py-10 '>
            <div className='max-w-8xl mx-auto'>
                <div className='max-w-8xl mx-auto'>
                    <div className='flex justify-between items-center  '>
                        <img src={logo} alt="" className='w-15 h-auto md:w-20 lg:w-25' />
                        <div className='text-white flex  items-center border border-[#204035] px-2 py-1 rounded-lg gap-1'>
                            <ShieldCheck size={16} />
                            <span className='text-xs md:text-sm'>Secure · Trusted</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between py-2 md:py-10' >
                        <div className='w-1/2'>
                            <h1 className='text-white text-4xl font-semibold md:text-5xl lg:text-8xl '>Manage. <br />Track. <br />Own with <br /><span className='text-[#019F8F]'>Confidence</span></h1>
                            <p className='text-zinc-400 text-xs leading-relaxed py-2 lg:text-lg'>Register, manage and protect your products, <br /> warranties, insurance and important <br /> documents - all in secure place.</p>
                        </div>
                        <div className='w-1/2 block md:hidden'>
                            <img src={hero} alt="" className='w-full md:h-[60vh] object-contain' />
                        </div>
                        <div className='w-1/2 hidden md:block'>
                            <img src={lgHero} alt="" className='w-full  object-contain' />
                        </div>
                    </div>
                    <>
                        <p className='text-white flex justify-center items-center text-xs'> Choose how you want to continue  </p>
                    </>
                    <div className='py-5 flex flex-col gap-5 md:flex-row md:items-stretch justify-center items-center lg:gap-6'>
                        <Link className=' flex flex-1 min-w-0 justify-center items-center gap-5 py-3 px-1 border border-[#038d7f] rounded-xl' to="/individual/login">
                            <div className='shrink-0'>
                                <User size={36} className='bg-[#038d7f] p-2 rounded-xl text-white' />
                            </div>
                            <div className='min-w-0 flex-1'>
                                <h3 className='text-lg font-semibold text-white '>I'm an Individual</h3>
                                <p className='text-zinc-400 text-xs'>Manage my personal products, warranty, insurance and documents.</p>
                            </div>
                        </Link>
                        <div className=' flex justify-center flex-1 min-w-0 items-center gap-5 py-3 px-2 border border-[#C78601] rounded-xl'>
                            <div className='shrink-0'>
                                <Store size={36} className='bg-[#C78601] p-2 rounded-xl text-white' />
                            </div>
                            <div className='min-w-0 flex-1'>
                                <h3 className='text-lg font-semibold text-white'>I'm a Shopkeeper</h3>
                                <p className='text-zinc-400 text-xs'>Manage inventory, sales, customers and grow your business.</p>
                            </div>
                            <button className='shrink-0 '>
                                <ArrowRightCircleIcon size={50} className='p-2 rounded-xl text-[#d79002]' />
                            </button>


                        </div>
                        <div className=' flex flex-1 min-w-0 justify-center items-center gap-5 py-3 px-2 border border-[#4020A0] rounded-xl'>
                            <div className='shrink-0'>
                                <ShieldUser size={36} className='bg-[#4020A0] p-2 rounded-xl text-white' />
                            </div>
                            <div className='min-w-0 flex-1'>
                                <h3 className='text-lg font-semibold text-white'>Admin Login</h3>
                                <p className='text-zinc-400 text-xs'>Secure admin access for system management and control.</p>
                            </div>
                            <button className='shrink-0 '>
                                <ArrowRightCircleIcon size={50} className='p-2 rounded-xl text-[#4d21d2]' />
                            </button>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LandingPage
