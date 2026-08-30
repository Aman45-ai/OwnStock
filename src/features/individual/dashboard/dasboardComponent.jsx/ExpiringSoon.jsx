import product from '../../../../assets/product.png'

const ExpiringSoon = () => {

    const products = [
        {
            id: 1,
            name: "Bose QuietComfort 45",
            category: "Electronics",
            expiry: "12 days",
            date: "01 Jun 2025",
        },
        {
            id: 2,
            name: "Dell XPS 13",
            category: "Electronics",
            expiry: "18 days",
            date: "07 Jun 2025",
        },
        {
            id: 3,
            name: "Dyson V15 Detect",
            category: "Home Appliance",
            expiry: "25 days",
            date: "14 Jun 2025",
        },
    ]

    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold"> Expiring Soon</h2>
                <button className="text-zinc-300 text-sm border border-zinc-800 rounded-lg px-3 py-1.5 hover:text-white hover:border-zinc-600 transition-all cursor-pointer"> View all</button>
            </div>
            <div>
                {products.map((value) => (
                    <div key={value.id} className="flex items-center gap-3 py-3 border-b border-zinc-800 last:border-b-0" >
                        <div className="w-12 h-12 shrink-0 bg-zinc-800 rounded-lg overflow-hidden">
                            <img src={product} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="text-white text-sm font-medium truncate">{value.name} </h3>
                            <p className="text-zinc-500 text-xs mt-1"> {value.category}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[#E07D00] text-sm font-medium"> Expires in {value.expiry} </p>
                            <p className="text-zinc-500 text-xs mt-1"> {value.date} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExpiringSoon
