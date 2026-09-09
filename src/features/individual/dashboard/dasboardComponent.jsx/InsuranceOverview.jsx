import { ArrowRight, ShieldCheck } from 'lucide-react'
import { useContext } from 'react'
import { IndividualContext } from '../../../../context/IndividualContext'
import { PolicyStatus } from '../../../../utils/PolicyStatus'
import { useNavigate } from 'react-router-dom'

const InsuranceOverview = () => {
    const navigate = useNavigate();
    const { insurance } = useContext(IndividualContext)

    const activeInsurance = insurance.filter((value) => {
        return PolicyStatus(value).status === "Active"
    })

    const upcomingPolicies = insurance.filter((value) => {
        return PolicyStatus(value).status !== "Expired"
    }).sort((a, b) => {
        return new Date(a.expiryDate) - new Date(b.expiryDate)
    })

    const nextRenewal = upcomingPolicies[0]

    const totalCoverage = activeInsurance.reduce((total, value) => {
        return total + Number(value.amount || 0)
    }, 0)

    const providers = new Set(insurance.map((value) => value.provider))

    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold"> Insurance Overview </h2>

            </div>

            <div className="flex items-center gap-3 py-4 border-b border-zinc-800">
                <div className="bg-[#064C4C] text-[#00D9A1] p-3 rounded-lg">
                    <ShieldCheck size={28} />
                </div>
                <div>
                    <p className="text-zinc-400 text-sm"> Active Policies </p>
                    <h1 className="text-white text-2xl font-bold"> {activeInsurance.length} </h1>
                    <p className="text-zinc-500 text-xs"> Total active policies </p>
                </div>
            </div>

            <div className="space-y-3 py-4">
                <div className="flex justify-between items-center">
                    <p className="text-zinc-400 text-sm"> Total Coverage </p>
                    <p className="text-[#00D9A1] font-medium"> ₹{totalCoverage.toLocaleString("en-IN")} </p>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-zinc-400 text-sm"> Next Renewal </p>
                    <p className="text-[#E07D00] font-medium">
                        {nextRenewal
                            ? new Date(nextRenewal.expiryDate).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric"
                            })
                            : "No upcoming renewal"
                        }
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-zinc-400 text-sm">Insurance Providers </p>
                    <p className="text-white font-medium"> {providers.size}</p>
                </div>
            </div>

            <button className="flex items-center justify-center gap-2 w-full border border-[#078F8A] text-[#13AEA8] rounded-lg py-2 hover:bg-[#064C4C] transition-all cursor-pointer" onClick={() => {
                navigate('/individual/insurance')
            }}>
                <span> View All Policies </span>
                <ArrowRight size={18} />
            </button>
        </div>
    )
}

export default InsuranceOverview