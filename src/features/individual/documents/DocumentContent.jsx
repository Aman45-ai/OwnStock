import { Download, FileText, Folder, Search, ShieldCheck, View,  } from 'lucide-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { IndividualContext } from '../../../context/IndividualContext'
import { useNavigate } from 'react-router-dom'


const DocumentContent = () => {
    const navigate = useNavigate()
    const { register } = useForm()
    const { documents } = useContext(IndividualContext)

    const cards = [
        {
            id: 1,
            title: "Total Documents",
            number: documents.length,
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

    let empty = (
        <div className="w-full max-w-[70vw] mx-auto col-span-full mt-5">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B121D] px-6 py-16 text-center">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#13AEA8]/10 blur-3xl rounded-full"></div>
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#123337] border border-[#1B5555] flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(19,174,168,0.12)]">
                        <FileText size={30} className="text-[#13AEA8]" />
                    </div>
                    <h1 className="text-3xl font-semibold text-white"> No Documents Yet</h1>
                    <p className="text-zinc-500 text-sm max-w-md mt-2 leading-6">Keep your invoices, receipts and warranty documents organized in one secure place.</p>
                    <button className="mt-7 inline-flex items-center gap-2 bg-[#13AEA8] hover:bg-[#0fa39e] text-white font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(19,174,168,0.25)]" onClick={() => {
                        navigate('/individual/upload-document')
                    }}
                    >
                        <FileText size={18} />
                        Upload Document
                    </button>
                    <p className="text-xs text-zinc-600 mt-4">PDF, JPG or PNG · Securely stored</p>
                </div>
            </div>
        </div>
    )

    return (
        <div className='px-5 py-3'>
            <div className='flex-1 mx-auto '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-5'>
                    {documents.length === 0 ? empty :
                        cards.map((value) => {
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
            <div className={documents.length === 0 ? "hidden" : "block"}>
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
                <div className='grid grid-cols-[2fr_1.5fr_1fr_1.2fr_0.8fr_0.8fr] items-center text-zinc-500 text-sm bg-[#0C131D] px-4 py-3 border-b border-zinc-800 rounded-b-lg '>
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
                            <div key={value.id} className='grid grid-cols-[2fr_1.5fr_1fr_1.2fr_0.8fr_0.8fr] items-center px-4 py-4 border-b border-zinc-800 hover:bg-[#0C131D] transition-colors '>
                                <div className='flex items-center gap-3'>
                                    <div className={`${value.type==="Receipt" ? "text-[#09e6f6] bg-[#052734f0]" : value.type==="Invoice"?"text-[#6c09f6] bg-[#181238f0]":"text-[#0980f6] bg-[#122338f0]"} p-2 rounded-lg`}><FileText size={18} /></div>
                                    <div>
                                        <p className='text-white text-sm font-medium'>{value.name}</p>
                                    </div>
                                </div>
                                <p className='text-zinc-300 text-sm'>{value.product}</p>
                                <span className={`${value.type==="Receipt" ? "border border-[#014c52]": value.type==="Invoice"?"border border-[#2d037b]":"border border-[#02256c]"} rounded-lg px-2 py-1 text-zinc-300 w-fit`}>{value.type}</span>
                                <p className='text-zinc-400 text-sm'>{new Date(value.uploadedOn).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric"
                                })}</p>
                                <p className='text-zinc-400 text-sm'>{value.fileSize || "—"}</p>
                                <div className='flex justify-end gap-2'>
                                    <button className='text-zinc-400 hover:text-white cursor-pointer transition-colors'><View /></button>
                                    <button className='text-zinc-400 hover:text-[#13AEA8] cursor-pointer transition-colors'><Download /></button>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default DocumentContent