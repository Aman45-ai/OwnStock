import { ArrowRight } from 'lucide-react'
import product from '../../../../assets/product.png'

const RecentProducts = () => {

    const products = [
        {
            id: 1,
            name: "MacBook Pro 16”",
            category: "Electronics",
            brand: "Apple",
            price: "₹1,20,000",
            addedOn: "18 May 2025",
            warranty: "May 2027",
        },
        {
            id: 2,
            name: "iPhone 17 Pro",
            category: "Electronics",
            brand: "Apple",
            price: "₹89,900",
            addedOn: "10 May 2025",
            warranty: "Sept 2028",
        },
        {
            id: 3,
            name: "Sony A7 IV",
            category: "Electronics",
            brand: "Sony",
            price: "₹2,35,900",
            addedOn: "02 May 2025",
            warranty: "Feb 2027",
        },
    ]

    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold">Recent Products </h2>
                <button className="text-zinc-300 text-sm border border-zinc-800 rounded-lg px-3 py-1.5 hover:text-white hover:border-zinc-600 transition-all cursor-pointer"> View all</button>
            </div>
            <div>
                {products.map((value) => (
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
