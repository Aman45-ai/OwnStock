import logo from '../../assets/logo.png'
import { File, Home, LogOut, Menu, Package2, ShieldCheck, X } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { IndividualContext } from '../../context/IndividualContext'

const DashboardSidebar = () => {

    const navigate = useNavigate()
    const { setCurrentUser } = useContext(IndividualContext)
    const [isOpen, setIsOpen] = useState(false)

    const sidebarItems = [
        {
            id: 1,
            icon: Home,
            Name: "Dashboard",
            path: "/individual/dashboard"
        },
        {
            id: 2,
            icon: Package2,
            Name: "My Products",
            path: "/individual/products"
        },
        {
            id: 3,
            icon: File,
            Name: "Documents",
            path: "/individual/documents"
        },
        {
            id: 4,
            icon: ShieldCheck,
            Name: "Insurance",
            path: "/individual/insurance"
        },
    ]

    const handleLogout = () => {
        setCurrentUser(null)
        localStorage.removeItem("currentUser")
        navigate('/individual/login')
    }

    return (
        <div className='lg:h-full lg:self-stretch'>
            <button
                onClick={() => setIsOpen(true)}
                className='lg:hidden fixed top-4 left-4 z-40  text-white hover:text-[#00deda] transition-all cursor-pointer bg-[#0a0b0e]'>                <Menu size={22} />
            </button >

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className='lg:hidden fixed inset-0 bg-black/60 z-40'
                ></div>
            )
            }

            <aside className={`fixed top-0 left-0 lg:h-full  w-55 bg-[#000206] px-1 py-2 border-r border-zinc-700 z-50 flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 lg:transition-none`}>

                <div className='relative h-25 flex items-center justify-center py-5'>
                    <img src={logo} alt="" className='h-full w-auto object-cover' />

                    <button
                        onClick={() => setIsOpen(false)}
                        className='lg:hidden absolute right-2 text-zinc-400 hover:text-white transition-all cursor-pointer'
                    >
                        <X size={22} />
                    </button>
                </div>

                <div className='flex-1'>
                    {sidebarItems.map((items) => {
                        const Icons = items.icon

                        return (
                            <NavLink
                                key={items.id}
                                to={items.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => {
                                    return `flex items-center justify-start gap-3 p-3 ${isActive ? "bg-[#003241] text-[#00deda] border-l-4 border-[#00deda] rounded-lg" : "text-zinc-400 hover:text-white hover:bg-[#0B121D] rounded-lg"} transition-all`
                                }}
                            >
                                <span><Icons size={22} /></span>
                                <p className='text-base'>{items.Name}</p>
                            </NavLink>
                        )
                    })}
                </div>

                <button
                    onClick={handleLogout}
                    className='flex items-center justify-start gap-3 p-3 text-zinc-400 hover:text-red-400 hover:bg-red-950/30 rounded-lg transition-all cursor-pointer'
                >
                    <span><LogOut size={22} /></span>
                    <p className='text-base'>Logout</p>
                </button>

            </aside>
        </div>
    )
}

export default DashboardSidebar