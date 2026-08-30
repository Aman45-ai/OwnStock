import { FileText } from 'lucide-react'
const DocumentOverview = () => {
    const documents = [
        {
            id: 1,
            title: "Purchase Receipts",
            subTitle: "Bills and receipts",
            number: 12,
            icon: FileText,
            iconColor: "text-[#00D9A1]",
            iconBg: "bg-[#064C4C]",
        },
        {
            id: 2,
            title: "Warranty Documents",
            subTitle: "Warranty cards, manuals",
            number: 8,
            icon: FileText,
            iconColor: "text-red-400",
            iconBg: "bg-red-950",
        },
        {
            id: 3,
            title: "Insurance Documents",
            subTitle: "Policies and certificates",
            number: 4,
            icon: FileText,
            iconColor: "text-blue-400",
            iconBg: "bg-blue-950",
        },
        {
            id: 4,
            title: "Other Documents",
            subTitle: "Miscellaneous documents",
            number: 3,
            icon: FileText,
            iconColor: "text-blue-400",
            iconBg: "bg-blue-950",
        },
    ]
    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold"> Documents Overview </h2>
                <button className="text-zinc-300 text-sm border border-zinc-800 rounded-lg px-3 py-1.5 hover:text-white hover:border-zinc-600 transition-all cursor-pointer"> View all </button>
            </div>
            <div>
                {documents.map((value) => {
                    const Icon = value.icon
                    return (
                        <div key={value.id} className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-b-0" >
                            <div className="flex items-center gap-3">
                                <div className={`${value.iconBg} ${value.iconColor} p-2 rounded-lg`}> <Icon size={20} /> </div>
                                <div>
                                    <h3 className="text-white text-sm font-medium"> {value.title} </h3>
                                    <p className="text-zinc-500 text-xs mt-0.5"> {value.subTitle} </p>
                                </div>
                            </div>
                            <div className="bg-[#151E2A] border border-zinc-800 rounded-lg px-3 py-1.5">
                                <span className="text-zinc-200 text-sm font-medium"> {value.number} </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-between items-center pt-3">
                <span className="text-zinc-400 text-sm"> Total Documents </span>
                <span className="text-white bg-[#151E2A] border border-zinc-800 rounded-lg px-3 py-1.5 text-sm font-medium"> 27 </span>
            </div>
        </div>
    )
}

export default DocumentOverview
