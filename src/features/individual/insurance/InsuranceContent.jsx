import {
    ArrowRight,
    Calendar,
    Ellipsis,
    Eye,
    FileText,
    Search,
    Shield,
    ShieldCheck
} from 'lucide-react'

import { useForm } from 'react-hook-form'

import product from '../../../assets/product.png'

const InsuranceContent = () => {

    const { register } = useForm()

    const cards = [
        {
            id: 1,
            title: "Total Policies",
            number: 24,
            subTitle: "All insurance policies",
            icon: Shield,
            text: "text-[#00D9A1]",
            background: "bg-[#064C4C]",
        },
        {
            id: 2,
            title: "Active Policies",
            number: 10,
            subTitle: "Currently Active",
            icon: ShieldCheck,
            text: "text-[#0078FF]",
            background: "bg-[#073A70]",
        },
        {
            id: 3,
            title: "Expiring Soon",
            number: 8,
            subTitle: "In next 30 days",
            icon: Calendar,
            text: "text-[#E07D00]",
            background: "bg-[#57370B]",
        },
        {
            id: 4,
            title: "Expired",
            number: 6,
            subTitle: "Policies expired",
            icon: FileText,
            text: "text-[#1400FF]",
            background: "bg-[#1F1460]",
        },
    ]

    const activePolicies = [
        {
            id: 1,
            name: "MacBook Air M3",
            provider: "AppleCare+",
            policyNo: "ACPL123456789",
            coverage: "₹1,50,000",
            expiry: "15 May 2027",
            daysLeft: "365 days left",
            progress: "82%",
            category: "Laptop",
        },
        {
            id: 2,
            name: "iPhone 16 Pro",
            provider: "HDFC ERGO Mobile Protect",
            policyNo: "HDF123987654",
            coverage: "₹1,00,000",
            expiry: "10 Dec 2026",
            daysLeft: "203 days left",
            progress: "55%",
            category: "Mobile",
        },
        {
            id: 3,
            name: 'Sony Bravia 55" 4K TV',
            provider: "OneAssist Extended Warranty",
            policyNo: "OAPL564738291",
            coverage: "₹60,000",
            expiry: "28 Sep 2026",
            daysLeft: "130 days left",
            progress: "40%",
            category: "Television",
        },
    ]

    const upcomingRenewals = [
        {
            id: 1,
            name: 'Sony Bravia 55" 4K TV',
            provider: "OneAssist Extended Warranty",
            days: "18 days left",
            expiry: "28 Sep 2026",
        },
        {
            id: 2,
            name: "iPhone 16 Pro",
            provider: "HDFC ERGO Mobile Protect",
            days: "27 days left",
            expiry: "10 Dec 2026",
        },
        {
            id: 3,
            name: "LG Front Load Washer",
            provider: "LG Extended Warranty",
            days: "34 days left",
            expiry: "17 Dec 2026",
        },
    ]

    const policies = [
        {
            id: 1,
            name: "MacBook Air M3",
            category: "Laptop",
            provider: "AppleCare+",
            policyNo: "ACPL123456789",
            coverage: "₹1,50,000",
            startDate: "15 May 2024",
            expiryDate: "15 May 2027",
            status: "Active",
        },
        {
            id: 2,
            name: "iPhone 16 Pro",
            category: "Mobile",
            provider: "HDFC ERGO",
            policyNo: "HDF123987654",
            coverage: "₹1,00,000",
            startDate: "05 Feb 2026",
            expiryDate: "10 Dec 2026",
            status: "Active",
        },
        {
            id: 3,
            name: 'Sony Bravia 55" 4K TV',
            category: "Television",
            provider: "OneAssist",
            policyNo: "OAPL564738291",
            coverage: "₹60,000",
            startDate: "18 Nov 2025",
            expiryDate: "28 Sep 2026",
            status: "Active",
        },
        {
            id: 4,
            name: "Galaxy S25 Ultra",
            category: "Mobile",
            provider: "Samsung Care+",
            policyNo: "SAM987654321",
            coverage: "₹1,20,000",
            startDate: "22 Mar 2026",
            expiryDate: "22 Mar 2027",
            status: "Active",
        },
        {
            id: 5,
            name: "LG Front Load Washer",
            category: "Kitchen Appliances",
            provider: "LG Extended Warranty",
            policyNo: "LG123456789",
            coverage: "₹45,000",
            startDate: "10 Aug 2025",
            expiryDate: "17 Dec 2026",
            status: "Expiring Soon",
        },
    ]

    return (
        <div className='px-5 py-3'>
            <div className='flex-1 mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-5'>
                    {cards.map((value) => {
                        const Icon = value.icon
                        return (
                            <div key={value.id} className='flex items-center min-h-28 border border-zinc-800 rounded-lg gap-2.5 py-3 px-5 bg-[#0B121D]'>
                                <Icon className={`${value.background} ${value.text} p-1.5 h-10 w-10 rounded-lg`} />
                                <div className='flex flex-col justify-center gap-0.5'>
                                    <h3 className='text-zinc-400'> {value.title} </h3>
                                    <h1 className='text-3xl text-white font-bold'>{value.number}</h1>
                                    <h4 className='text-zinc-500'> {value.subTitle} </h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5'>
                <div className='lg:col-span-3 bg-[#0B121D] border border-zinc-800 rounded-xl overflow-hidden'>
                    <div className='flex justify-between items-center px-5 py-4 border-b border-zinc-800'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <ShieldCheck size={20} className='text-[#13AEA8]'/>
                                <h2 className='text-white font-semibold text-lg'> Active Coverage </h2>
                            </div>
                            <p className='text-zinc-500 text-sm mt-1'>Your active insurance policies </p>
                        </div>
                        <button className='border border-zinc-700 text-zinc-300 px-3 py-2 rounded-lg text-sm hover:border-[#13AEA8] hover:text-[#13AEA8] transition-all cursor-pointer'> View All Policies </button>
                    </div>

                    <div className='p-3 space-y-2'>
                        {activePolicies.map((value) => (
                            <div key={value.id} className='border border-zinc-800 bg-[#0E1722] rounded-lg p-3' >
                                <div className='flex items-center gap-4'>
                                    <div className='w-14 h-14 shrink-0 rounded-lg bg-[#1A222C] p-1.5'>
                                        <img src={product} alt='' className='w-full h-full object-contain rounded-md' />
                                    </div>

                                    <div className='flex-1 min-w-0'>
                                        <h3 className='text-white font-semibold truncate'> {value.name} </h3>
                                        <p className='text-[#13AEA8] text-sm'> {value.provider} </p>
                                        <p className='text-zinc-500 text-xs mt-1'> Policy No. {value.policyNo} </p>
                                    </div>
                                    <div className='hidden sm:block min-w-28'>
                                        <p className='text-zinc-500 text-xs'> Coverage Amount </p>
                                        <p className='text-white mt-1'> {value.coverage} </p>
                                    </div>

                                    <div className='hidden md:block min-w-28'>
                                        <p className='text-zinc-500 text-xs'> Expires on </p>
                                        <p className='text-white mt-1'> {value.expiry} </p>
                                    </div>

                                    <div className='hidden sm:block text-right'>
                                        <span className='inline-block bg-[#063B2E] text-[#00D9A1] px-3 py-1 rounded-full text-xs'> Active </span>
                                        <p className='text-[#00D9A1] text-xs mt-2'> {value.daysLeft} </p>
                                    </div>
                                    <ArrowRight size={18} className='text-zinc-500' />

                                </div>

                                <div className='flex items-center gap-3 mt-3'>
                                    <div className='h-1.5 bg-[#18212C] rounded-full flex-1 overflow-hidden'>
                                        <div className='h-full bg-[#13AEA8] rounded-full' style={{  width: value.progress }} />
                                    </div>
                                    <span className='text-zinc-500 text-xs whitespace-nowrap'>{value.progress} of coverage period completed </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='w-full border-t border-zinc-800 py-3 text-[#13AEA8] text-sm flex items-center justify-center gap-2 hover:bg-[#0E1722] transition-all cursor-pointer'> View All Active Policies <ArrowRight size={17} /> </button>
                </div>

                <div className='lg:col-span-2 bg-[#0B121D] border border-zinc-800 rounded-xl overflow-hidden'>
                    <div className='px-5 py-4 border-b border-zinc-800'>
                        <div className='flex items-center gap-2'>
                            <Calendar size={20} className='text-[#13AEA8]'/>
                            <h2 className='text-white font-semibold text-lg'> Upcoming Renewals </h2>
                        </div>
                        <p className='text-zinc-500 text-sm mt-1'> Policies expiring soon </p>
                    </div>
                    <div className='p-3 space-y-2'>
                        {upcomingRenewals.map((value) => (
                            <div key={value.id} className='flex items-center gap-3 border border-zinc-800 bg-[#0E1722] rounded-lg p-3'>
                                <div className='w-14 h-14 shrink-0 rounded-lg bg-[#1A222C] p-1.5'>
                                    <img src={product} alt='' className='w-full h-full object-contain rounded-md' />
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <h3 className='text-white font-medium truncate'> {value.name} </h3>
                                    <p className='text-zinc-400 text-sm truncate mt-1'>{value.provider}</p>
                                    <p className='text-zinc-500 text-xs mt-1'> {value.expiry} </p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-[#E07D00] text-sm whitespace-nowrap'>{value.days}</p>
                                </div>
                                <ArrowRight size={18} className='text-zinc-500' />
                            </div>
                        ))}
                    </div>
                    <button className='w-full border-t border-zinc-800 py-3 text-[#13AEA8] text-sm flex items-center justify-center gap-2 hover:bg-[#0E1722] transition-all cursor-pointer'> View All Renewals<ArrowRight size={17} /> </button>
                </div>
            </div>

            <div className='mt-5 bg-[#0B121D] border border-zinc-800 rounded-xl overflow-hidden'>
                <div className='flex justify-between items-center gap-4 p-4 border-b border-zinc-800'>
                    <h2 className='text-white text-lg font-semibold whitespace-nowrap'> All Insurance Policies </h2>
                    <div className='flex items-center gap-3 flex-1 justify-end'>
                        <div className='flex items-center gap-2 border border-zinc-800 bg-[#0D1521] px-2.5 py-2 rounded-lg w-full max-w-85'>
                            <Search size={18} className='text-zinc-500' />
                            <input type='text' placeholder='Search by product or provider...' {...register('search')} className='bg-transparent outline-none text-white placeholder:text-zinc-600 text-sm w-full'/>

                        </div>
                        <select className='border border-zinc-800 bg-[#0D1521] text-zinc-300 px-3 py-2 rounded-lg text-sm cursor-pointer outline-none'>
                            <option className='bg-[#0D1521]'> All Status </option>
                            <option className='bg-[#0D1521]'> Active </option>
                            <option className='bg-[#0D1521]'> Expiring Soon </option>
                            <option className='bg-[#0D1521]'> Expired </option>
                        </select>

                        <select className='border border-zinc-800 bg-[#0D1521] text-zinc-300 px-3 py-2 rounded-lg text-sm cursor-pointer outline-none' >
                            <option className='bg-[#0D1521]'>Sort: Expiry Date (Earliest)</option>
                            <option className='bg-[#0D1521]'>Sort: Expiry Date (Latest)</option>
                            <option className='bg-[#0D1521]'>Sort: Product Name</option>
                        </select>
                    </div>
                </div>

                <div className='grid grid-cols-[1.5fr_1.1fr_1.2fr_1fr_1fr_1fr_0.8fr_0.5fr] gap-3 px-5 py-3 bg-[#0C131D] border-b border-zinc-800 text-zinc-500 text-xs'>
                    <p>PRODUCT</p>
                    <p>PROVIDER</p>
                    <p>POLICY NUMBER</p>
                    <p>COVERAGE AMOUNT</p>
                    <p>START DATE</p>
                    <p>EXPIRY DATE</p>
                    <p>STATUS</p>
                    <p>ACTIONS</p>
                </div>
                {policies.map((value) => (
                    <div key={value.id} className='grid grid-cols-[1.5fr_1.1fr_1.2fr_1fr_1fr_1fr_0.8fr_0.5fr] gap-3 items-center px-5 py-3 border-b border-zinc-800 hover:bg-[#0E1722] transition-colors' >
                        <div className='flex items-center gap-3 min-w-0'>
                            <div className='w-11 h-11 shrink-0 rounded-lg bg-[#1A222C] p-1'>
                                <img src={product} alt='' className='w-full h-full object-contain rounded-md' />
                            </div>
                            <div className='min-w-0'>
                                <p className='text-white text-sm truncate'> {value.name} </p>
                                <p className='text-zinc-500 text-xs mt-0.5'> {value.category} </p>
                            </div>
                        </div>

                        <p className='text-zinc-300 text-sm'>{value.provider}</p>
                        <p className='text-zinc-400 text-sm'>{value.policyNo} </p>
                        <p className='text-zinc-300 text-sm'> {value.coverage}</p>
                        <p className='text-zinc-400 text-sm'> {value.startDate} </p>
                        <p className='text-zinc-300 text-sm'> {value.expiryDate} </p>
                        <div>
                            <span
                                className={
                                    value.status === "Active"
                                        ? 'bg-[#063B2E] text-[#00D9A1] px-3 py-1 rounded-full text-xs'
                                        : 'bg-[#57370B] text-[#E07D00] px-3 py-1 rounded-full text-xs'
                                }
                            > {value.status}</span>

                        </div>
                        <div className='flex items-center gap-2'>
                            <button className='border border-zinc-800 p-2 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-600 cursor-pointer'> <Eye size={16} /> </button>
                            <button className='border border-zinc-800 p-2 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-600 cursor-pointer'><Ellipsis size={16} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InsuranceContent