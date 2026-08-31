import { Search } from 'lucide-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { IndividualContext } from '../../../context/IndividualContext'

const ProductBar = () => {
    const {products} = useContext(IndividualContext)
    const navigate = useNavigate()
    const { register } = useForm()
    return (
        <div className='text-white px-5 py-3'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-4xl font-bold'>My Products</h1>
                    <p className='text-sm text-zinc-400 pt-1'>Manage and track all your registered products in one place.</p>
                </div>
                <>
                    <button className='bg-[#13AEA8] px-5 py-2 rounded-lg text-lg cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(0,222,218,0.25)] transition-all duration-300' onClick={()=>{
                        navigate('/individual/new-product')
                    }}>Add Product</button>
                </>
            </div>
            <div className={products.length===0?"hidden":"block"}>
                <div className='py-4 flex flex-1 items-center gap-5'>
                <div className='w-full max-w-125 flex justify-center items-center border border-[#474d61] px-2 py-1 rounded-sm gap-2'>
                    <Search size={18} className='text-zinc-500' />
                    <input type="text" placeholder='Search products, warranties, documents' {...register("search")} className='placeholder:text-zinc-500 w-full bg-transparent text-white focus:outline-none' />
                </div>
                <div className='border rounded-sm border-[#474d61] px-2 py-1 cursor-pointer'>
                    <select name="categories" id="categories" defaultValue="all" className='bg-[#0F1218] text-white focus:outline-none cursor-pointer'>
                        <option value="all" disabled className="bg-[#0F1218] text-white">All Categories</option>
                        <option value="television" className="bg-[#0F1218] text-white ">Television</option>
                        <option value="laptop" className="bg-[#0F1218] text-white ">Laptop</option>
                        <option value="kitchen" className="bg-[#0F1218] text-white ">Kitchen Appliances</option>
                        <option value="mobile" className="bg-[#0F1218] text-white ">Mobile</option>
                        <option value="others" className="bg-[#0F1218] text-white ">Others</option>
                    </select>
                </div>
                <div className='border rounded-sm border-[#474d61] px-2 py-1 cursor-pointer'>
                    <select name="status" id="status"  defaultValue="all" className='bg-[#0F1218] text-white focus:outline-none cursor-pointer'>
                        <option value="all" disabled className="bg-[#0F1218] text-white ">All Status</option>
                        <option value="active" className="bg-[#0F1218] text-white ">Active</option>
                        <option value="expiring" className="bg-[#0F1218] text-white ">Expiring Soon</option>
                        <option value="expired" className="bg-[#0F1218] text-white ">Expired</option>
                    </select>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ProductBar
