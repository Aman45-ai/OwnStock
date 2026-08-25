import { FileText, Folder, ShieldCheck } from 'lucide-react'
import React from 'react'

const DocumentContent = () => {
    const cards = [
    {
        id: 1,
        title: "Total Documents",
        number: 24,
        subTitle: "All documents",
        icon: Folder,
        background: "bg-[#064C4C]",
    },
    {
        id: 2,
        title: "Invoices",
        number: 10,
        subTitle: "Invoice & receipts",
        icon: FileText,
        background: "bg-[#073A70]",
    },
    {
        id: 3,
        title: "Warranties",
        number: 8,
        subTitle: "Warranty documents",
        icon: ShieldCheck,
        background: "bg-[#57370B]",
    },
    {
        id: 4,
        title: "Others",
        number: 6,
        subTitle: "Other documents",
        icon: FileText,
        background: "bg-[#3B1468]",
    },
]
  return (
    <div className='px-5 py-3'>
      <div className='flex-1 mx-auto '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-5'>
            {cards.map((value)=>{
                const Icon = value.icon
                return(
                    <div key={value.id} className=' flex items-center min-h-28 border border-zinc-900 rounded-lg gap-2.5 py-3 px-5'>
                        <>
                            <Icon className={`${value.background} text-white p-1.5 h-10 w-10 rounded-lg`}/>
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
    </div>
  )
}

export default DocumentContent
