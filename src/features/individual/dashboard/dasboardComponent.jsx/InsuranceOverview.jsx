import { ArrowRight, ShieldCheck } from 'lucide-react'

const InsuranceOverview = () => {

    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold"> Insurance Overview </h2>
                <button className="text-zinc-300 text-sm border border-zinc-800 rounded-lg px-3 py-1.5 hover:text-white hover:border-zinc-600 transition-all cursor-pointer">View all </button>
            </div>
            <div className="flex items-center gap-3 py-4 border-b border-zinc-800">
                <div className="bg-[#064C4C] text-[#00D9A1] p-3 rounded-lg">
                    <ShieldCheck size={28} />
                </div>
                <div>
                    <p className="text-zinc-400 text-sm"> Active Policies </p>
                    <h1 className="text-white text-2xl font-bold"> 3 </h1>
                    <p className="text-zinc-500 text-xs"> Total active policies </p>
                </div>
            </div>
            <div className="space-y-3 py-4">
                <div className="flex justify-between items-center">
                    <p className="text-zinc-400 text-sm"> Total Coverage </p>
                    <p className="text-[#00D9A1] font-medium"> ₹5,20,000 </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-zinc-400 text-sm"> Next Renewal </p>
                    <p className="text-[#E07D00] font-medium">12 Jun 2025 </p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-zinc-400 text-sm">Insurance Providers </p>
                    <p className="text-white font-medium"> 2</p>
                </div>
            </div>
            <button className="flex items-center justify-center gap-2 w-full border border-[#078F8A] text-[#13AEA8] rounded-lg py-2 hover:bg-[#064C4C] transition-all cursor-pointer">
                <span> View All Policies </span>
                <ArrowRight size={18} />
            </button>

        </div>
    )
}

export default InsuranceOverview
