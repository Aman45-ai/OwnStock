import React from 'react'
import logo from '../../../assets/logo.png'
import { File, Home, LoaderPinwheel, Package2, ShieldCheck } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const DashboardSidebar = () => {
    const sidebarItems = [
        {
            id:1,
            icon: Home,
            Name: "Dashboard",
            path:"/individual/dashboard"
        },
        {
            id:2,
            icon: Package2,
            Name: "My Products",
            path:"/individual/products"
        },
        {
            id:3,
            icon: LoaderPinwheel,
            Name: "Warranties",
            path:"/individual/warranties"
        },
        {
            id:4,
            icon: File,
            Name: "Documents",
            path:"/individual/documents"
        },
        {
            id:5,
            icon: ShieldCheck,
            Name: "Insurance",
            path:"/individual/insurance"
        },
    ]
    return (
        <div className='bg-[#000206] px-1 py-2 '>
            <div className='h-25 flex items-center justify-center py-5'>
                <img src={logo} alt="" className='h-full w-auto object-cover' />
            </div>
            <div>
                {sidebarItems.map((items)=>{
                    const Icons = items.icon
                    return (
                        <NavLink key={items.id} to={items.path} className={({ isActive })=>{ 
                            return `flex items-center justify-start gap-3 p-3  ${isActive?"bg-[#003241] text-[#00deda]  border-l-4 border-[#00deda] rounded-lg":"text-zinc-400"}`
                        }}>
                            <span><Icons size={22}/></span>
                            <p className='text-base'>{items.Name}</p>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default DashboardSidebar
