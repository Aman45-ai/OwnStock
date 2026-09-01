import { ArrowRight } from 'lucide-react'
import product from '../../../../assets/product.png'
import { useContext } from 'react'
import { IndividualContext } from '../../../../context/IndividualContext'
import { useNavigate } from 'react-router-dom'

const RecentProducts = () => {
    const navigate = useNavigate()
    const {products} = useContext(IndividualContext)
    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold">Recent Products </h2>
                <button className="text-zinc-300 text-sm border border-zinc-800 rounded-lg px-3 py-1.5 hover:text-[#10e5de] hover:border-[#054c4a] transition-all cursor-pointer" onClick={()=>{
                    navigate('/individual/products')
                }}> View all</button>
            </div>
            <div>
                {products.slice(-2).toReversed().map((value) => (
                    <div key={value.id} className="flex items-center gap-4 py-3 border-b border-zinc-800 last:border-b-0" >
                        <div className="w-16 h-16 shrink-0 bg-zinc-800 rounded-lg overflow-hidden">
                            <img src={product} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white font-medium">{value.name}</h3>
                            <p className="text-zinc-500 text-sm mt-1">{value.category} • {value.brand} </p>
                        </div>

                        <div className="w-32">
                            <p className="text-zinc-200"> {value.price} </p>
                            <p className="text-zinc-500 text-xs mt-1"> Added on {value.addedOn} </p>
                        </div>
                        <div className="bg-[#06383A] border border-[#07585A] rounded-lg px-3 py-2 w-24">
                            <p className="text-[#13AEA8] text-xs"> Warranty till
                            </p>
                            <p className="text-[#13AEA8] text-sm font-medium"> {value.warranty} </p>
                        </div>
                        <ArrowRight size={20} className="text-zinc-500" />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RecentProducts
