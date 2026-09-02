import { ArrowRight, Package } from 'lucide-react'
import product from '../../../../assets/product.png'
import { useContext } from 'react'
import { IndividualContext } from '../../../../context/IndividualContext'
import { useNavigate } from 'react-router-dom'

const RecentProducts = () => {
    const navigate = useNavigate()
    const {products} = useContext(IndividualContext)

    let empty = (
        <div className="w-full max-w-[70vw] mx-auto col-span-full mt-5">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B121D] px-6 py-16 text-center">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#13AEA8]/10 blur-3xl rounded-full"></div>
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#123337] border border-[#1B5555] flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(19,174,168,0.12)]">
                        <Package size={30} className="text-[#13AEA8]" />
                    </div>
                    <h1 className="text-3xl font-semibold text-white"> No Products Yet</h1>
                    <button className="mt-7 inline-flex items-center gap-2 text-white bg-[#13AEA8] hover:bg-[#0fa39e] font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(19,174,168,0.25)]" onClick={() => {
                        navigate('/individual/new-product')
                    }}
                    >
                        <Package size={18} />
                        Add Products
                    </button>
                </div>
            </div>
        </div>
    )

    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold">Recent Products </h2>
                <button className="text-zinc-300 text-sm border border-zinc-800 rounded-lg px-3 py-1.5 hover:text-[#09e6f6] hover:border-[#09e6f67c] transition-all cursor-pointer" onClick={()=>{
                    navigate('/individual/products')
                }}> View all</button>
            </div>
            <div>
                {products.length==0?empty:
                products.slice(-2).toReversed().map((value) => (
                    <div key={value.id} className="flex items-center gap-4 py-3 border-b border-zinc-800 last:border-b-0" >
                        <div className="w-16 h-16 shrink-0 bg-zinc-800 rounded-lg overflow-hidden">
                            <img src={product} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white font-medium">{value.name}</h3>
                            <p className="text-zinc-500 text-sm mt-1">{value.category} • {value.brand} </p>
                        </div>

                        <div className="w-32">
                            <p className="text-zinc-200">₹ {value.price} </p>
                            <p className="text-zinc-500 text-xs mt-1"> Added on {value.addedOn} </p>
                        </div>
                        <div className="bg-[#06383A] border border-[#07585A] rounded-lg px-3 py-2 w-fit flex flex-col items-center justify-center">
                            <p className="text-[#13AEA8] text-xs"> Warranty till
                            </p>
                            <p className="text-[#13AEA8] text-sm font-medium"> {value.warrantyExpiry || "N.A."} </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RecentProducts
