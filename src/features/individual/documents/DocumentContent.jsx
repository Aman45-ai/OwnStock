import { FileText, Folder, Search, ShieldCheck } from 'lucide-react'
import { useForm } from 'react-hook-form'
import React from 'react'

const DocumentContent = () => {
    const { register } = useForm()
    const cards = [
        {
            id: 1,
            title: "Total Documents",
            number: 24,
            subTitle: "All documents",
            icon: Folder,
            text: "text-[#00D9A1]",
            background: "bg-[#064C4C]",
        },
        {
            id: 2,
            title: "Invoices",
            number: 10,
            subTitle: "Invoice & receipts",
            icon: FileText,
            text: "text-[#0078FF]",
            background: "bg-[#073A70]",
        },
        {
            id: 3,
            title: "Warranties",
            number: 8,
            subTitle: "Warranty documents",
            icon: ShieldCheck,
            text: "text-[#E07D00]",
            background: "bg-[#57370B]",
        },
        {
            id: 4,
            title: "Others",
            number: 6,
            subTitle: "Other documents",
            icon: FileText,
            text: "text-[#7400FF]",
            background: "bg-[#3B1468]",
        },
    ]

    const documents = [
        {
            id: 1,
            name: "MacBook Air M3 Invoice",
            type: "Invoice",
            product: "MacBook Air M3",
            date: "12 Jan 2026",
            fileType: "PDF",
            fileSize: "1.2 MB",
        },
        {
            id: 2,
            name: "iPhone 16 Pro Warranty",
            type: "Warranty",
            product: "iPhone 16 Pro",
            date: "05 Feb 2026",
            fileType: "PDF",
            fileSize: "856 KB",
        },
        {
            id: 3,
            name: "Sony Bravia Purchase Receipt",
            type: "Receipt",
            product: "Bravia 55 inch 4K TV",
            date: "18 Nov 2025",
            fileType: "JPG",
            fileSize: "2.4 MB",
        },
    ]

    return (
        <div className='px-5 py-3'>
            <div className='flex-1 mx-auto '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-5'>
                    {cards.map((value) => {
                        const Icon = value.icon
                        return (
                            <div key={value.id} className=' flex items-center min-h-28 border border-zinc-900 rounded-lg gap-2.5 py-3 px-5 bg-[#0B121D]'>
                                <>
                                    <Icon className={`${value.background} ${value.text} p-1.5 h-10 w-10 rounded-lg`} />
                                </>
                                <div className='flex flex-col justify-center gap-0.5'>
                                    <h3 className='text-lg text-zinc-400'>{value.title}</h3>
                                    <h1 className='text-3xl text-white font-bold'>{value.number}</h1>
                                    <h4 className='text-zinc-500'>{value.subTitle}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <div className='pt-5'>
                    <div className='flex justify-between items-center bg-[#0C131D] p-2 border-b border-zinc-800 rounded-t-lg'>
                        <div className='flex items-center gap-2 border border-zinc-800 px-2 py-1.5 rounded-sm '>
                            <Search size={20} className='text-zinc-500' />
                            <input type="text" placeholder='Search by name or product...' {...register("search")} className='placeholder:text-zinc-600 text-sm min-w-50 focus:outline-none text-white' />
                        </div>
                        <div className='flex items-center gap-5'>
                            <div>
                                <select name="type" id="type" className='border border-zinc-800 text-zinc-300 px-2 py-1 rounded-sm cursor-pointer text-sm'>
                                    <option value="all" className='bg-black'>All Types</option>
                                    <option value="invoice" className='bg-black'>Invoice</option>
                                    <option value="warranty" className='bg-black'>Warranty</option>
                                    <option value="receipt" className='bg-black'>Receipt</option>
                                </select>
                            </div>
                            <div>
                                <select name="sort" id="sort" className='border border-zinc-800 text-zinc-300 px-2 py-1 rounded-sm cursor-pointer text-sm'>
                                    <option value="all" className='bg-black'>Sort: Newest First</option>
                                    <option value="invoice" className='bg-black'>Sort: Oldest First</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-[2fr_1.5fr_1fr_1.2fr_0.8fr_0.8fr] items-center text-zinc-500 text-sm bg-[#0C131D] px-4 py-3 border-b border-zinc-800 rounded-b-lg'>
                    <p>DOCUMENT</p>
                    <p>RELATED PRODUCT</p>
                    <p>TYPE</p>
                    <p>UPLOADED ON</p>
                    <p>SIZE</p>
                    <p className='text-right'>ACTIONS</p>
                </div>

                <div>
                    {documents.map((value) => {
                        return (
                            <div key={value.id} className='grid grid-cols-[2fr_1.5fr_1fr_1.2fr_0.8fr_0.8fr] items-center px-4 py-4 border-b border-zinc-800 hover:bg-[#0C131D] transition-colors'>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-[#073A70] text-[#0078FF] p-2 rounded-lg'><FileText size={18} /></div>
                                    <div>
                                        <p className='text-white text-sm font-medium'>{value.name}</p>
                                        <p className='text-zinc-600 text-xs'>{value.fileType}</p>
                                    </div>
                                </div>
                                <p className='text-zinc-300 text-sm'>{value.product}</p>
                                <span className='w-fit bg-[#073A70] text-[#0078FF] text-xs px-2.5 py-1 rounded-full'>{value.type}</span>
                                <p className='text-zinc-400 text-sm'>{value.date}</p>
                                <p className='text-zinc-400 text-sm'>{value.fileSize}</p>
                                <div className='flex justify-end gap-2'>
                                    <button className='text-zinc-400 hover:text-white cursor-pointer transition-colors'>View</button>
                                    <button className='text-zinc-400 hover:text-[#13AEA8] cursor-pointer transition-colors'>Download</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DocumentContent