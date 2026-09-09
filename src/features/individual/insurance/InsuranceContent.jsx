import {
    ArrowRight,
    Calendar,
    Ellipsis,
    Eye,
    File,
    FileText,
    Search,
    Shield,
    ShieldCheck
} from 'lucide-react'

import { useForm } from 'react-hook-form'
import { IndividualContext } from '../../../context/IndividualContext'
import product from '../../../assets/product.png'
import { useContext, useState } from 'react'
import { PolicyStatus } from '../../../utils/PolicyStatus'
import { useNavigate } from 'react-router-dom'


const InsuranceContent = () => {
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState("All")



    const navigate = useNavigate()
    const { insurance } = useContext(IndividualContext)
    const { register } = useForm()

    const activeInsurance = insurance.filter((values) => {
        return PolicyStatus(values).status === "Active"
    })

    const expiringInsurance = insurance.filter((values) => {
        return PolicyStatus(values).status === "Expiring Soon"
    })

    const expiredInsurance = insurance.filter((values) => {
        return PolicyStatus(values).status === "Expired"
    })

    const insuranceToShow = insurance.filter((values)=>{
        const searchInsuranceFilter = values.name.toLowerCase().includes(search)
        const statusInsuranceFilter = status==="All" || PolicyStatus(values).status.toLowerCase() === status
        return searchInsuranceFilter && statusInsuranceFilter
    })

        let empty = (
        <div className="w-full max-w-full mx-auto col-span-full mt-5">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B121D] px-6 py-16 text-center">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#13AEA8]/10 blur-3xl rounded-full"></div>
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#123337] border border-[#1B5555] flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(19,174,168,0.12)]">
                        <File size={30} className="text-[#13AEA8]" />
                    </div>
                    <h1 className="text-3xl font-semibold text-white"> No Insurance Policies Yet</h1>
                    <p className="text-zinc-500 text-sm max-w-md mt-2 leading-6">Add your insurance policies and keep all your coverage details, expiry dates, and renewals organized in one place.</p>
                    <button className="mt-7 inline-flex items-center gap-2 text-white bg-[#13AEA8] hover:bg-[#0fa39e] font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(19,174,168,0.25)]" onClick={() => {
                        navigate('/individual/add-insurance')
                    }}
                    >
                        <File size={18} />
                        Add Insurance
                    </button>
                    <p className="text-xs text-zinc-600 mt-4">PDF, JPG or PNG · Securely stored</p>
                </div>
            </div>
        </div>
    )

    let misMatchFilter = (
        <div className="w-full max-w-[70vw] mx-auto col-span-full mt-5 mb-5">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B121D] px-6 py-16 text-center">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#13AEA8]/10 blur-3xl rounded-full"></div>
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#123337] border border-[#1B5555] flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(19,174,168,0.12)]">
                        <File size={30} className="text-[#13AEA8]" />
                    </div>
                    <h1 className="text-3xl font-semibold text-white"> No Insurance Policy Found</h1>
                </div>
            </div>
        </div>
    )


    const cards = [
        {
            id: 1,
            title: "Total Policies",
            number: insurance.length,
            subTitle: "All insurance policies",
            icon: Shield,
            text: "text-[#00D9A1]",
            background: "bg-[#064C4C]",
        },
        {
            id: 2,
            title: "Active Policies",
            number: activeInsurance.length,
            subTitle: "Currently Active",
            icon: ShieldCheck,
            text: "text-[#0078FF]",
            background: "bg-[#073A70]",
        },
        {
            id: 3,
            title: "Expiring Soon",
            number: expiringInsurance.length,
            subTitle: "In next 30 days",
            icon: Calendar,
            text: "text-[#E07D00]",
            background: "bg-[#57370B]",
        },
        {
            id: 4,
            title: "Expired",
            number: expiredInsurance.length,
            subTitle: "Policies expired",
            icon: FileText,
            text: "text-[#1400FF]",
            background: "bg-[#1F1460]",
        },
    ]


    return (
        <div className='px-5 py-3'>
            {insurance.length===0?empty:""}
            <div className='flex-1 mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-5'>
                    {insurance.length===0?"hidden":
                    cards.map((value) => {
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

            <div className={`grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5 ${insurance.length===0?"hidden":"block"}`}>
                <div className='lg:col-span-3 bg-[#0B121D] border border-zinc-800 rounded-xl overflow-hidden'>
                    <div className='flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 p-4 border-b border-zinc-800'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <ShieldCheck size={20} className='text-[#13AEA8]' />
                                <h2 className='text-white font-semibold text-lg'> Active Coverage </h2>
                            </div>
                            <p className='text-zinc-500 text-sm mt-1'>Your active insurance policies </p>
                        </div>
                        
                    </div>

                    <div className='p-3 space-y-2'>
                        {activeInsurance.map((value) => {
                            const formattedWarrantyExpiryDate = new Date(value.expiryDate).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric"
                                })
                            const { daysLeft } = PolicyStatus(value)
                                
                            return (
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
                                            <p className='text-white mt-1'> ₹ {value.amount} </p>
                                        </div>

                                        <div className='hidden md:block min-w-28'>
                                            <p className='text-zinc-500 text-xs'> Expires on </p>
                                            <p className='text-white mt-1'> {formattedWarrantyExpiryDate} </p>
                                        </div>

                                        <div className='hidden sm:block text-right'>
                                            <span className='inline-block bg-[#063B2E] text-[#00D9A1] px-3 py-1 rounded-full text-xs'> Active </span>
                                            <p className='text-[#00D9A1] text-xs mt-2'> {daysLeft} days left</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>

                <div className='lg:col-span-2 bg-[#0B121D] border border-zinc-800 rounded-xl overflow-hidden'>
                    <div className='px-5 py-4 border-b border-zinc-800'>
                        <div className='flex items-center gap-2'>
                            <Calendar size={20} className='text-[#13AEA8]' />
                            <h2 className='text-white font-semibold text-lg'> Upcoming Renewals </h2>
                        </div>
                        <p className='text-zinc-500 text-sm mt-1'> Policies expiring soon </p>
                    </div>
                    <div className='p-3 space-y-2'>
                        {expiringInsurance.map((value) => {
                            const { daysLeft } = PolicyStatus(value)
                            return(
                                <div key={value.id} className='flex items-center gap-3 border border-zinc-800 bg-[#0E1722] rounded-lg p-3'>
                                <div className='w-14 h-14 shrink-0 rounded-lg bg-[#1A222C] p-1.5'>
                                    <img src={product} alt='' className='w-full h-full object-contain rounded-md' />
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <h3 className='text-white font-medium truncate'> {value.product} </h3>
                                    <p className='text-zinc-400 text-sm truncate mt-1'>{value.name}</p>
                                    <p className='text-zinc-500 text-xs mt-1'> {value.expiryDate} </p>
                                </div>
                                <div className='text-right'>
                                    <p className='text-[#E07D00] text-sm whitespace-nowrap'>{daysLeft} days left</p>
                                </div>
                                <ArrowRight size={18} className='text-zinc-500' />
                            </div>
                            )
                        })}
                    </div>
                    
                </div>
            </div>

            <div className={`mt-5 bg-[#0B121D] border border-zinc-800 rounded-xl overflow-hidden ${insurance.length===0?"hidden":"block"}`}>
                <div className='flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 p-4 border-b border-zinc-800'>
                    <h2 className='text-white text-lg font-semibold whitespace-nowrap'> All Insurance Policies </h2>
                    <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1 justify-end'>
                        <div className='flex items-center gap-2 border border-zinc-800 bg-[#0D1521] px-2.5 py-2 rounded-lg w-full max-w-85'>
                            <Search size={18} className='text-zinc-500' />
                            <input type='text' placeholder='Search by product or provider...' {...register('searchfilter')} className='bg-transparent outline-none text-white placeholder:text-zinc-600 text-sm w-full' onChange={(e)=>{
                                setSearch(e.target.value.toLowerCase())
                            }}/>
                        </div>
                        <select className='border border-zinc-800 bg-[#0D1521] text-zinc-300 px-3 py-2 rounded-lg text-sm cursor-pointer outline-none' onChange={(e)=>{
                            setStatus(e.target.value.toLowerCase())
                        }}>
                            <option value='All' className='bg-[#0D1521]'> All Status </option>
                            <option value='Active' className='bg-[#0D1521]'> Active </option>
                            <option value='Expiring Soon' className='bg-[#0D1521]'> Expiring Soon </option>
                            <option value='Expired'className='bg-[#0D1521]'> Expired </option>
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
                {insuranceToShow.length===0?misMatchFilter:
                insuranceToShow.map((value) => {
                    const { status } = PolicyStatus(value)
                    return (
                        <div key={value.id} className='grid grid-cols-[1.5fr_1.1fr_1.2fr_1fr_1fr_1fr_0.8fr_0.5fr] gap-3 items-center px-5 py-3 border-b border-zinc-800 hover:bg-[#0E1722] transition-colors' >
                            <div className='flex items-center gap-3 min-w-0'>
                                <div className='w-11 h-11  rounded-lg bg-[#1A222C] p-1 flex justify-center items-center'>
                                    <img src={product} alt='' className='w-full h-full object-contain rounded-md' />
                                </div>
                                <div className='min-w-0'>
                                    <p className='text-white text-sm truncate'> {value.product} </p>

                                </div>
                            </div>
                            <p className='text-zinc-300 text-sm'>{value.name}</p>
                            <p className='text-zinc-400 text-sm'>{value.policy}</p>
                            <p className='text-zinc-300 text-sm'>{value.amount}</p>
                            <p className='text-zinc-400 text-sm'>{value.startDate}</p>
                            <p className='text-zinc-300 text-sm'>{value.expiryDate}</p>
                            <div>
                                <span className={status === "Active" ? 'bg-[#063B2E] text-[#00D9A1] px-3 py-1 rounded-full text-xs' : status === "Expiring Soon" ? 'bg-[#57370B] text-[#E07D00] px-3 py-1 rounded-full text-xs' : 'bg-[#570b0b] text-[#e00000] px-3 py-1 rounded-full text-xs'} > {status} </span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <button className='border border-zinc-800 p-2 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-600 cursor-pointer'> <Eye size={16} /> </button>
                                <button className='border border-zinc-800 p-2 rounded-lg text-zinc-400 hover:text-white hover:border-zinc-600 cursor-pointer'><Ellipsis size={16} /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default InsuranceContent