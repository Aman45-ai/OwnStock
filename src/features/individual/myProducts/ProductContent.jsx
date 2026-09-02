import { useContext } from 'react'
import product from '../../../assets/product.png'
import { IndividualContext } from '../../../context/IndividualContext'
import { useNavigate } from 'react-router-dom'
import { Package } from 'lucide-react'

const ProductContent = () => {
    const { products } = useContext(IndividualContext)
    const navigate = useNavigate()
    const today = Date.now()
    let empty = (
        <div className="w-full max-w-[70vw] mx-auto col-span-full mt-5">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B121D] px-6 py-16 text-center">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#13AEA8]/10 blur-3xl rounded-full"></div>
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#123337] border border-[#1B5555] flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(19,174,168,0.12)]">
                        <Package size={30} className="text-[#13AEA8]" />
                    </div>
                    <h1 className="text-3xl font-semibold text-white"> No Products Yet</h1>
                    <p className="text-zinc-500 text-sm max-w-md mt-2 leading-6">Organize your products, track warranty coverage, and keep every purchase detail at your fingertips.</p>
                    <button className="mt-7 inline-flex items-center gap-2 text-white bg-[#13AEA8] hover:bg-[#0fa39e] font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(19,174,168,0.25)]" onClick={() => {
                        navigate('/individual/new-product')
                    }}
                    >
                        <Package size={18} />
                        Add Products
                    </button>
                    <p className="text-xs text-zinc-600 mt-4">PDF, JPG or PNG · Securely stored</p>
                </div>
            </div>
        </div>
    )
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 py-2 gap-7'>
            {products.length === 0 ? empty
                :
                products.map((values) => {
                    const formattedPurchaseDate = new Date(values.purchaseDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    })
                    const formattedWarrantyDate = values.warrantyExpiry
                        ? new Date(values.warrantyExpiry).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        })
                        : "N.A."
                    let warrantyStatus
                    if (values.warrantyExpiry) {
                        const expiryDate = new Date(values.warrantyExpiry).getTime()
                        const warrantyTimeLeft = expiryDate - today
                        const daysLeft = warrantyTimeLeft / (1000 * 60 * 60 * 24)
                        if (daysLeft > 0 && daysLeft <= 30) {
                            warrantyStatus = "Expiring Soon"
                        } else if (daysLeft > 30) {
                            warrantyStatus = "Active"
                        } else {
                            warrantyStatus = "Expired"
                        }
                    }


                    return (
                        <div key={values.id} className='border border-zinc-900 rounded-2xl px-4 hover:-translate-y-1 hover:border-[#0d9ca1] duration-300 transition-all cursor-pointer'>
                            <div className='w-full max-w-80 mx-auto'>
                                <div className='flex items-center gap-2 py-2'>
                                    <div className='w-30'>
                                        <img src={product} alt="" className='w-full rounded-2xl' />
                                    </div>
                                    <div>
                                        <h3 className='text-white text-lg'>{values.name}</h3>
                                        <p className='text-zinc-500 text-sm'>{values.brand}</p>
                                        <h1 className='text-[#00e6fb] text-xl'>₹ {values.price}</h1>
                                        <h1 className={`${warrantyStatus=="Active"?"text-[#04a597] text-sm border-[#015f58] bg-[#015f5944]": warrantyStatus=="Expiring Soon"?"text-[#ED7707] text-sm border-[#c36002] bg-[#442203]":warrantyStatus=="Expired"?"text-[#ff2020] text-sm border-[#c30202] bg-[#44030380]":"text-zinc-500  text-xs"} border w-fit px-2 py-0.5 mt-1.5 rounded-2xl`}>{warrantyStatus || "N.A."}</h1>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center gap-2 border-t border-zinc-700 px-4 py-2'>
                                    <div className='text-sm'>
                                        <h3 className='text-zinc-400'>Purchased on</h3>
                                        <span className='text-zinc-300 font-semibold'>{formattedPurchaseDate}</span>
                                    </div>
                                    <div className='text-sm' >
                                        <h3 className='text-zinc-400'>Warranty till</h3>
                                        <span className='text-zinc-300 font-semibold'>{formattedWarrantyDate}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductContent
