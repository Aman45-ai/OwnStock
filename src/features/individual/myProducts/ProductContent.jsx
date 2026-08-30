import { useContext } from 'react'
import product from '../../../assets/product.png'
import { IndividualContext } from '../../../context/IndividualContext'
import { useNavigate } from 'react-router-dom'

const ProductContent = () => {
    const { products } = useContext(IndividualContext)
    const navigate = useNavigate()
    const today = Date.now()
    let empty =(
            <div className='w-full max-w-[70vw] mx-auto col-span-full'>
                <div className="px-4 py-12 mb-4 text-sm  rounded-lg bg-[#362c0042] border border-[#5e2d08] text-center font-medium flex flex-col justify-center items-center gap-2">
                    <h1 className='text-4xl w-full text-[#f96c00]'>No Products Found</h1>
                    <p className='text-2xl py-2 text-amber-50'>"Add your first product..."</p>
                    <button className='bg-[#13AEA8] max-w-50 text-white px-5 py-2 rounded-lg text-lg cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(0,222,218,0.25)] transition-all duration-300' onClick={() => {
                        navigate('/individual/new-product')
                    }}>Add Product</button>
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
                    const formattedWarrantyDate = new Date(values.warrantyExpiry).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    })
                    let warrantyStatus
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

                    return (
                        <div key={values.id} className='border border-zinc-700 rounded-2xl px-4 hover:-translate-y-1 duration-300 transition-all cursor-pointer'>
                            <div className='w-full max-w-80 mx-auto'>
                                <div className='flex items-center gap-2 py-2'>
                                    <div className='w-30'>
                                        <img src={product} alt="" className='w-full rounded-2xl' />
                                    </div>
                                    <div>
                                        <h3 className='text-white text-lg'>{values.name}</h3>
                                        <p className='text-zinc-500 text-sm'>{values.brand}</p>
                                        <h1 className='text-[#08b6a8] text-xl'>₹ {values.price}</h1>
                                        <h1>{warrantyStatus}</h1>
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
