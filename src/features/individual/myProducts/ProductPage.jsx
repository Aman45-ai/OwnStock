import React, { useContext } from 'react'
import { ArrowLeft, Pencil, Trash2, Package, CalendarDays, Tag, Hash, Store, IndianRupee, ShieldCheck, Upload, Download, MoreVertical, Wrench, Bell, Archive, FileText, Apple } from 'lucide-react'
import product from '../../../assets/product.png'
import { useNavigate, useParams } from 'react-router-dom'
import { IndividualContext } from '../../../context/IndividualContext'
import { Warranty } from '../../../utils/Warranty'

const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { products } = useContext(IndividualContext)
    const selectedProduct = products.find((value) => {
        return value.id == id
    })
    const formattedPurchaseDate = new Date(selectedProduct.purchaseDate).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric"
    })
    const formattedWarrantyStartDate = selectedProduct.warrantyExpiry
        ? new Date(selectedProduct.warrantyStart).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
        : "N.A."
    const formattedWarrantyExpiryDate = selectedProduct.warrantyExpiry
        ? new Date(selectedProduct.warrantyExpiry).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
        : "N.A."
    const coverage = (new Date(selectedProduct.warrantyExpiry).getTime() - new Date(selectedProduct.warrantyStart).getTime()) / (1000 * 60 * 60 * 24)
    const { status, daysLeft } = Warranty(selectedProduct)
    console.log(selectedProduct)
    return (
        <div className='bg-[#00070F] min-h-screen text-white'>
            <div className='max-w-[1600px] mx-auto px-5 py-5'>
                <div className='flex items-center justify-between mb-5'>
                    <button className='border border-zinc-600 rounded-xl p-1.5 cursor-pointer hover:border-[#13AEA8] hover:text-[#13AEA8] transition-all duration-200' onClick={()=>{
                        navigate(-1)
                    }}>
                        <ArrowLeft size={18} />
                    </button>

                    <div className='flex gap-2'>
                        <button disabled className='flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-800 bg-[#0b1119] text-sm hover:bg-zinc-900 transition disabled:cursor-not-allowed'>
                            <Pencil size={16} />
                            Edit Product
                        </button>
                        <button disabled className='flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-sm hover:bg-red-600 transition disabled:cursor-not-allowed'>
                            <Trash2 size={16} />
                            Delete Product
                        </button>
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-2xl font-semibold'>{selectedProduct.name}</h1>
                        <span className='px-2.5 py-1 rounded-full bg-zinc-800 text-xs text-zinc-300'>{selectedProduct.category}</span>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className='border border-zinc-800 rounded-xl bg-[#090F17] p-4'>
                        <div className='h-100 rounded-lg bg-[#070C13] border border-zinc-800 flex items-center justify-center'>
                            <img src={product} alt='MacBook Air M2' className='max-h-60 object-contain' />
                        </div>
                    </div>
                    <div className='border border-zinc-800 rounded-xl bg-[#090F17] p-5'>
                        <div className='flex items-center justify-between mb-5'>
                            <h2 className='text-lg font-semibold flex items-center gap-2'>
                                <Package size={18} />
                                Product Information
                            </h2>
                        </div>
                        <div className='space-y-0'>
                            <div className='flex items-center py-3 border-b border-zinc-800'>
                                <Apple size={17} className='text-zinc-500 mr-4' />
                                <span className='text-zinc-400 w-1/2'>Brand</span>
                                <span className='text-sm'>{selectedProduct.brand}</span>
                            </div>

                            <div className='flex items-center py-3 border-b border-zinc-800'>
                                <Package size={17} className='text-zinc-500 mr-4' />
                                <span className='text-zinc-400 w-1/2'>Model</span>
                                <span className='text-sm'>{selectedProduct.name}</span>
                            </div>

                            <div className='flex items-center py-3 border-b border-zinc-800'>
                                <Hash size={17} className='text-zinc-500 mr-4' />
                                <span className='text-zinc-400 w-1/2'>Serial Number</span>
                                <span className='text-sm'>{selectedProduct.serialNumber || "-"}</span>
                            </div>

                            <div className='flex items-center py-3 border-b border-zinc-800'>
                                <Tag size={17} className='text-zinc-500 mr-4' />
                                <span className='text-zinc-400 w-1/2'>Category</span>
                                <span className='text-sm'>{selectedProduct.category}</span>
                            </div>

                            <div className='flex items-center py-3 border-b border-zinc-800'>
                                <CalendarDays size={17} className='text-zinc-500 mr-4' />
                                <span className='text-zinc-400 w-1/2'>Purchase Date</span>
                                <span className='text-sm'>{formattedPurchaseDate}</span>
                            </div>

                            <div className='flex items-center py-3 border-b border-zinc-800'>
                                <IndianRupee size={17} className='text-zinc-500 mr-4' />
                                <span className='text-zinc-400 w-1/2'>Purchase Price</span>
                                <span className='text-sm'>{selectedProduct.price}</span>
                            </div>

                            <div className='flex items-center py-3'>
                                <Store size={17} className='text-zinc-500 mr-4' />
                                <span className='text-zinc-400 w-1/2'>Purchased From</span>
                                <span className='text-sm'>{selectedProduct.seller || "-"}</span>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 mt-4'>

                    <div className='border border-zinc-800 rounded-xl bg-[#090F17] p-5'>
                        <div className='flex items-center justify-between mb-5'>
                            <h2 className='text-lg font-semibold flex items-center gap-2'>
                                <ShieldCheck size={18} />
                                Warranty Information
                            </h2>
                            <button className='px-3 py-1.5 rounded-lg border border-zinc-700 text-xs  cursor-not-allowed '>
                                View Warranty Card
                            </button>
                        </div>

                        <div className='flex flex-col md:flex-row items-center gap-8'>

                            <div className={`w-36 h-36 rounded-full border-12 flex flex-col items-center justify-center ${status == "Expired" ? "border-red-500/80" : "border-emerald-500/80"}`}>
                                <span className='text-3xl font-semibold'>{daysLeft || "-" }</span>
                                <span className='text-xs text-zinc-500'>days left</span>
                            </div>

                            <div className='flex-1 w-full space-y-3'>
                                <div className='flex justify-between'>
                                    <span className='text-zinc-500 text-sm'>Status</span>
                                    <span className={`${status == "Active" ? "text-[#00ffe5]" : status == "Expiring Soon" ? "text-[#ED7707] " : status == "Expired" ? "text-[#ff2020] " : "text-zinc-500 "} font-semibold px-2 py-0.5 mt-1.5 rounded-2xl`}>
                                        {status}
                                    </span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='text-zinc-500 text-sm'>Warranty Start</span>
                                    <span className='text-sm'>{formattedWarrantyStartDate}</span>
                                </div>

                                <div className='flex justify-between'>
                                    <span className='text-zinc-500 text-sm'>Warranty End</span>
                                    <span className='text-sm'>{formattedWarrantyExpiryDate}</span>
                                </div>

                                <div className='flex justify-between'>
                                    <span className='text-zinc-500 text-sm'>Total Coverage(days)</span>
                                    <span className='text-sm'>{coverage || "N.A."}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='border border-zinc-800 rounded-xl bg-[#090F17] p-5'>
                        <h2 className='text-lg font-semibold mb-4'>Quick Actions</h2>

                        <div className='space-y-2'>
                            <button disabled className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#111824] text-sm hover:bg-zinc-800 transition disabled:cursor-not-allowed'>                                
                                <Wrench size={16} />
                                Add Repair Record
                            </button>

                            <button className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer bg-[#111824] text-sm hover:bg-zinc-800 transition' onClick={()=>{
                                navigate('/individual/upload-document')
                            }}>
                                <Upload size={16} />
                                Upload Document
                            </button>

                            <button disabled className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#111824] text-sm hover:bg-zinc-800 transition disabled:cursor-not-allowed'>
                                <Bell size={16} />
                                Set Reminder
                            </button>

                            <button disabled className='w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#111824] text-sm hover:bg-zinc-800 transition disabled:cursor-not-allowed'>
                                <Archive size={16} />
                                Move to Archive
                            </button>
                        </div>
                    </div>

                </div>

                <div className='opacity-50 pointer-events-none cursor-not-allowed'>
                    <div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 mt-4'>
                        <div className='border border-zinc-800 rounded-xl bg-[#090F17] p-5'>
                            <div className='flex items-center justify-between mb-4'>
                                <h2 className='text-lg font-semibold'>Documents</h2>
                                <button className='flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-700 text-xs hover:bg-zinc-800 transition '>
                                    <Upload size={14} />
                                    Upload Document
                                </button>
                            </div>

                            <div>

                                <div className='flex items-center gap-4 py-3 border-b border-zinc-800'>
                                    <div className='w-10 h-10 rounded-lg bg-red-500/15 flex items-center justify-center text-red-400'>
                                        <FileText size={19} />
                                    </div>

                                    <div className='flex-1'>
                                        <p className='text-sm'>Invoice</p>
                                        <p className='text-xs text-zinc-500'>invoice_macbook.pdf</p>
                                        <p className='text-xs text-zinc-600'>2.4 MB • Uploaded on 12 Aug 2024</p>
                                    </div>

                                    <Download size={17} className='text-zinc-500 cursor-pointer hover:text-white' />
                                    <MoreVertical size={17} className='text-zinc-500 cursor-pointer' />
                                </div>

                                <div className='flex items-center gap-4 py-3 border-b border-zinc-800'>
                                    <div className='w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400'>
                                        <FileText size={19} />
                                    </div>

                                    <div className='flex-1'>
                                        <p className='text-sm'>Warranty Card</p>
                                        <p className='text-xs text-zinc-500'>warranty_apple.pdf</p>
                                        <p className='text-xs text-zinc-600'>1.1 MB • Uploaded on 12 Aug 2024</p>
                                    </div>

                                    <Download size={17} className='text-zinc-500 cursor-pointer hover:text-white' />
                                    <MoreVertical size={17} className='text-zinc-500 cursor-pointer' />
                                </div>

                                <div className='flex items-center gap-4 py-3'>
                                    <div className='w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400'>
                                        <FileText size={19} />
                                    </div>

                                    <div className='flex-1'>
                                        <p className='text-sm'>User Manual</p>
                                        <p className='text-xs text-zinc-500'>macbook_air_manual.pdf</p>
                                        <p className='text-xs text-zinc-600'>3.8 MB • Uploaded on 13 Aug 2024</p>
                                    </div>

                                    <Download size={17} className='text-zinc-500 cursor-pointer hover:text-white' />
                                    <MoreVertical size={17} className='text-zinc-500 cursor-pointer' />
                                </div>

                            </div>
                        </div>

                        <div className='border border-zinc-800 rounded-xl bg-[#090F17] p-5'>
                            <div className='flex items-center justify-between mb-4'>
                                <h2 className='text-lg font-semibold'>Notes</h2>
                                <button className='px-3 py-1.5 rounded-lg border border-zinc-700 text-xs hover:bg-zinc-800 transition'>
                                    Edit
                                </button>
                            </div>

                            <div className='bg-[#111824] rounded-lg p-4 min-h-37.5'>
                                <p className='text-sm text-zinc-300 leading-6'>
                                    Bought during Independence Day sale.
                                    Comes with student discount.
                                    Keep the invoice safe for future claims.
                                </p>
                            </div>
                            <p className='text-xs text-zinc-600 mt-3'>
                                Last updated on 15 Aug 2024
                            </p>
                        </div>
                    </div>
                    <div className='border border-zinc-800 rounded-xl bg-[#090F17] p-5 mt-4'>
                        <div className='flex items-center justify-between mb-4'>
                            <h2 className='text-lg font-semibold flex items-center gap-2'>
                                <Wrench size={18} />
                                Repair History
                            </h2>

                            <button className='flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-700 text-xs hover:bg-zinc-800 transition'>
                                <Wrench size={14} />
                                Add Repair Record
                            </button>
                        </div>
                        <div className='border border-dashed border-zinc-800 rounded-lg min-h-37.5 flex flex-col items-center justify-center'>
                            <Wrench size={25} className='text-zinc-600 mb-2' />
                            <p className='text-sm text-zinc-400'>No repair records yet</p>
                            <p className='text-xs text-zinc-600 mt-1'>Add a repair record to keep track of servicing and repairs.</p>
                        </div>
                    </div>
                </div>
            </div>
            )
        </div>
    )
}

export default ProductDetails