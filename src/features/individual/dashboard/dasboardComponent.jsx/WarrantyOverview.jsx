import { Check, Clock, X } from 'lucide-react'
import { useContext } from 'react'
import { IndividualContext } from '../../../../context/IndividualContext'
import { Warranty } from '../../../../utils/Warranty'

const WarrantyOverview = () => {

    const { products } = useContext(IndividualContext)

    const warranties = products.filter((value) => {
        return value.warrantyExpiry
    })

    const activeWarranties = warranties.filter((value) => {
        return Warranty(value).status === "Active"
    })

    const expiredWarranties = warranties.filter((value) => {
        return Warranty(value).status === "Expired"
    })

    const expiringWarranties = warranties.filter((value) => {
        return Warranty(value).status === "Expiring Soon"
    })

    const totalWarranties = warranties.length

    const activePercentage = totalWarranties === 0
        ? 0
        : Math.round((activeWarranties.length / totalWarranties) * 100)

    const stats = [
        {
            id: 1,
            title: "Active",
            number: activeWarranties.length,
            icon: Check,
            text: "text-[#00D9A1]",
            background: "bg-[#064C4C]",
        },
        {
            id: 2,
            title: "Expired",
            number: expiredWarranties.length,
            icon: X,
            text: "text-red-400",
            background: "bg-red-950",
        },
        {
            id: 3,
            title: "Expiring Soon",
            number: expiringWarranties.length,
            icon: Clock,
            text: "text-[#E07D00]",
            background: "bg-[#57370B]",
        },
    ]

    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold"> Warranty Overview </h2>
            </div>

            <div className="flex items-center gap-6 py-5">
                <div className="relative w-32 h-32 shrink-0">
                    <div className="w-full h-full rounded-full border-14 border-zinc-700 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-2xl text-white font-bold"> {activePercentage}% </h1>
                            <p className="text-zinc-500 text-xs"> Active </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                            <div key={value} className={`h-7 w-1.5 rounded-full ${value <= Math.round((activeWarranties.length / (totalWarranties || 1)) * 10) ? "bg-[#13AEA8]" : "bg-zinc-700"}`} />
                        ))}
                    </div>

                    <p className="text-white text-sm font-medium"> {activeWarranties.length} of {totalWarranties} warranties </p>
                    <p className="text-zinc-500 text-sm"> are active </p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
                {stats.map((value) => {
                    const Icon = value.icon

                    return (
                        <div key={value.id} className={`${value.background} bg-opacity-30 border border-zinc-800 rounded-lg p-3 text-center`} >
                            <Icon size={18} className={`${value.text} mx-auto mb-1`} />
                            <h3 className="text-white text-lg font-semibold"> {value.number} </h3>
                            <p className={`${value.text} text-xs`}> {value.title} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WarrantyOverview