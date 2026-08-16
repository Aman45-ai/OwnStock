import React from 'react'
import logo from '../assets/logo.png'
import hero from '../assets/hero.png'
import { ArrowRightCircleIcon, ShieldCheck, ShieldUser, Store, User } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className='bg-[#000308] px-3 py-5 min-h-dvh'>
      <div className='flex justify-between items-center'>
        <img src={logo} alt="" className='w-15 h-auto'/>
        <div className='text-white flex  items-center border border-[#204035] px-2 py-1 rounded-lg gap-1'>
            <ShieldCheck size={16}/>
            <span className='text-xs'>Secure · Trusted</span>
        </div>
      </div>
      <div className='flex items-center justify-between py-2' >
        <div className='w-1/2'>
            <h1 className='text-white text-4xl font-semibold'>Manage. Track. <br />Own with <span className='text-[#019F8F]'>Confidence</span></h1>
            <p className='text-zinc-400 text-xs'>Register, manage and protect your products, warranties, insurance and important documents - all in secure place.</p>
        </div>
        <div className='w-1/2'>
            <img src={hero} alt="" />
        </div>
      </div>
      <>
        <p className='text-white flex justify-center items-center text-xs'> Choose how you want to continue  </p>
      </>
      <div className='py-5 flex flex-col gap-5'>
        <div className=' flex justify-center items-center gap-5 py-3 px-2 border border-[#038d7f] rounded-xl'>
            <div className='w-[10%]'>
                <User size={36} className='bg-[#038d7f] p-2 rounded-xl text-white'/>
            </div>
            <div className='w-[75%]'>
                <h3 className='text-lg font-semibold text-white'>I'm an Individual</h3>
                <p className='text-zinc-400 text-xs'>Manage my personal products, warranty, insurance and documents.</p>
            </div>
            <button className='w-[15%] '>
                <ArrowRightCircleIcon size={50} className='p-2 rounded-xl text-[#01b8a6]'/>
            </button>
            
            
        </div>
        <div className=' flex justify-center items-center gap-5 py-3 px-2 border border-[#C78601] rounded-xl'>
            <div className='w-[10%]'>
                <Store size={36} className='bg-[#C78601] p-2 rounded-xl text-white'/>
            </div>
            <div className='w-[75%]'>
                <h3 className='text-lg font-semibold text-white'>I'm a Shopkeeper</h3>
                <p className='text-zinc-400 text-xs'>Manage inventory, sales, customers and grow your business.</p>
            </div>
            <button className='w-[15%] '>
                <ArrowRightCircleIcon size={50} className='p-2 rounded-xl text-[#d79002]'/>
            </button>
            
            
        </div>
        <div className=' flex justify-center items-center gap-5 py-3 px-2 border border-[#4020A0] rounded-xl'>
            <div className='w-[10%]'>
                <ShieldUser size={36} className='bg-[#4020A0] p-2 rounded-xl text-white'/>
            </div>
            <div className='w-[75%]'>
                <h3 className='text-lg font-semibold text-white'>Admin Login</h3>
                <p className='text-zinc-400 text-xs'>Secure admin access for system management and control.</p>
            </div>
            <button className='w-[15%] '>
                <ArrowRightCircleIcon size={50} className='p-2 rounded-xl text-[#4d21d2]'/>
            </button>
            
            
        </div>
      </div>
    </div>
  )
}

export default LandingPage
