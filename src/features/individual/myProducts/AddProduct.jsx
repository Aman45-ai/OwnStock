import { ArrowLeft, Calendar, FileText, Package, ShieldCheck, Store } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { IndividualContext } from '../../../context/IndividualContext'

const AddProduct = () => {
    const navigate = useNavigate()
    const {products,setProducts} = useContext(IndividualContext)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        setProducts([...products,data])
        navigate('/individual/products')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='min-h-screen bg-[#0A111D] text-white'>


            <div className='flex px-5 py-4 items-center gap-3'>
                <button type='button' onClick={() => navigate(-1)} className='border border-zinc-600 rounded-xl p-1.5 cursor-pointer hover:border-[#13AEA8] hover:text-[#13AEA8] transition-all duration-200'>
                    <ArrowLeft size={24} />
                </button>

                <div>
                    <h1 className='text-3xl font-bold'> Add Product </h1>
                    <p className='text-sm text-zinc-400 mt-1'> Register a new product and keep track of its warranty. </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 py-3 max-w-350 mx-auto'>
                <div className='bg-[#0F1825] border border-zinc-800 rounded-xl p-5'>
                    <div className='flex items-center gap-3 mb-5'>
                        <div className='bg-[#003C3D] text-[#13AEA8] p-2 rounded-lg'> <Package size={20} /> </div>
                        <div>
                            <h2 className='font-semibold text-lg'>Product Information </h2>
                            <p className='text-xs text-zinc-500'> Basic details about your product </p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-sm text-zinc-300'>Product Name</label>
                            <input
                                type='text'
                                placeholder='e.g. MacBook Air M3'
                                {...register('name', {
                                    required: 'Product name is required!',
                                    minLength: {
                                        value: 3,
                                        message: 'Product name must be at least 3 characters'
                                    }
                                })}
                                className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8] transition-colors'
                            />
                            {errors.name && (<p className='text-red-400 text-xs mt-1'> {errors.name.message} </p>
                            )}
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='text-sm text-zinc-300'> Brand </label>
                                <input
                                    type='text'
                                    placeholder='e.g. Apple'
                                    {...register('brand', {
                                        required: 'Brand is required'
                                    })}
                                    className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8]'
                                />
                                {errors.brand && ( <p className='text-red-400 text-xs mt-1'>{errors.brand.message} </p> )}
                            </div>

                            <div>
                                <label className='text-sm text-zinc-300'>
                                    Category
                                </label>

                                <select
                                    {...register('category', {
                                        required: 'Please select a category'
                                    })}
                                    className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white focus:outline-none focus:border-[#13AEA8]'
                                >
                                    <option value=''>Select category</option>
                                    <option value='laptop'>Laptop</option>
                                    <option value='mobile'>Mobile</option>
                                    <option value='television'>Television</option>
                                    <option value='kitchen'>Kitchen Appliances</option>
                                    <option value='others'>Others</option>
                                </select>

                                {errors.category && ( <p className='text-red-400 text-xs mt-1'> {errors.category.message} </p> )}
                            </div>
                        </div>
                        <div> <label className='text-sm text-zinc-300'> Purchase Price </label>

                            <div className='flex items-center mt-1'>
                                <span className='bg-[#131D2A] border border-r-0 border-zinc-700 rounded-l-lg px-3 py-2 text-zinc-400'> ₹ </span>

                                <input type='number'  placeholder='114900'{...register('price', {
                                        required: 'Purchase price is required'
                                    })}
                                    className='bg-[#0D1521] border border-zinc-700 rounded-r-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8]'
                                />
                            </div>
                            {errors.price && (<p className='text-red-400 text-xs mt-1'> {errors.price.message}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className='bg-[#0F1825] border border-zinc-800 rounded-xl p-5'>
                    <div className='flex items-center gap-3 mb-5'>
                        <div className='bg-[#003C3D] text-[#13AEA8] p-2 rounded-lg'> <Store size={20} /> </div>
                        <div>
                            <h2 className='font-semibold text-lg'> Purchase Details </h2>
                            <p className='text-xs text-zinc-500'> Where and when you purchased it</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-sm text-zinc-300'> Purchase Date </label>
                            <div className='relative mt-1'>
                                <Calendar size={18} className='absolute left-3 top-2.5 text-zinc-500' />
                                <input
                                    type='date'
                                    {...register('purchaseDate', {
                                        required: 'Purchase date is required'
                                    })} className='bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 pl-10 pr-3 text-white focus:outline-none focus:border-[#13AEA8]'
                                />
                            </div>

                            {errors.purchaseDate && ( <p className='text-red-400 text-xs mt-1'> {errors.purchaseDate.message}</p>)}
                        </div>
                        <div>
                            <label className='text-sm text-zinc-300'> Store / Seller </label>

                            <input type='text' placeholder='e.g. Amazon, Croma, Apple Store'  {...register('seller')} className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8]'
                            />
                        </div>
                        <div>
                            <label className='text-sm text-zinc-300'> Invoice Number</label>

                            <input type='text' placeholder='e.g. INV-2026-00124' {...register('invoiceNumber')} className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8]'
                            />
                        </div>
                    </div>
                </div>

                <div className='bg-[#0F1825] border border-zinc-800 rounded-xl p-5'>
                    <div className='flex items-center gap-3 mb-5'>
                        <div className='bg-[#19315A] text-blue-400 p-2 rounded-lg'>
                            <ShieldCheck size={20} />
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg'> Warranty Information </h2>
                            <p className='text-xs text-zinc-500'> Keep your warranty details organized </p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                                <label className='text-sm text-zinc-300'> Warranty Start </label>
                                <input type='date' {...register('warrantyStart')} className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white focus:outline-none focus:border-[#13AEA8]'/>
                            </div>
                            <div>
                                <label className='text-sm text-zinc-300'> Warranty Expiry </label>
                                <input type='date' {...register('warrantyExpiry')}  className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white focus:outline-none focus:border-[#13AEA8]'
                                />
                            </div>
                        </div>
                        <div>
                            <label className='text-sm text-zinc-300'> Warranty Provider</label>

                            <input type='text' placeholder='e.g. Apple, Samsung, Sony' {...register('warrantyProvider')} className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8]'
                            />
                        </div>
                    </div>
                </div>

                <div className='bg-[#0F1825] border border-zinc-800 rounded-xl p-5'>
                    <div className='flex items-center gap-3 mb-5'>
                        <div className='bg-[#332A17] text-yellow-500 p-2 rounded-lg'>
                            <FileText size={20} />
                        </div>
                        <div>
                            <h2 className='font-semibold text-lg'> Product Identification </h2>

                            <p className='text-xs text-zinc-500'> Unique information for your product</p>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <div>
                            <label className='text-sm text-zinc-300'>Serial Number</label>

                            <input type='text' placeholder='Enter serial number' {...register('serialNumber')} className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8]' />
                        </div>
                        <div>
                            <label className='text-sm text-zinc-300'> Model Number </label>

                            <input type='text' placeholder='Enter model number' {...register('modelNumber')}className='mt-1 bg-[#0D1521] border border-zinc-700 rounded-lg w-full py-2 px-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8]' />
                        </div>
                        <div>
                            <label className='text-sm text-zinc-300'>
                                Invoice / Warranty Document
                            </label>
                            <div className='mt-1 border border-dashed border-zinc-700 rounded-lg p-5 text-center bg-[#0D1521] hover:border-[#13AEA8] transition-colors cursor-pointer'>
                                <FileText className='mx-auto text-zinc-500'size={28}/>
                                <p className='text-sm text-zinc-400 mt-2'>
                                    Upload invoice or warranty document
                                </p>

                                <p className='text-xs text-zinc-600 mt-1'> PDF, JPG or PNG </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-350 mx-auto px-5 py-5 flex justify-end gap-3'>
                <button type='button' onClick={() => navigate(-1)} className='px-6 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-[#131D2A] transition-colors cursor-pointer' >
                    Cancel
                </button>
                <button type='submit' className='px-6 py-2.5 rounded-lg bg-[#13AEA8] text-[#001B1A] font-semibold hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(0,222,218,0.2)] transition-all duration-300 cursor-pointer' > Add Product</button>
            </div>
        </form>
    )
}

export default AddProduct