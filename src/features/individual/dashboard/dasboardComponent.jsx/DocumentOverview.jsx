import { FileText } from 'lucide-react'
import { useContext } from 'react'
import { IndividualContext } from '../../../../context/IndividualContext'
import { useNavigate } from 'react-router-dom'
const DocumentOverview = () => {
    const navigate = useNavigate()
    const { documents } = useContext(IndividualContext)
    let empty = (
        <div className="w-full max-w-[70vw] mx-auto col-span-full mt-5">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B121D] px-6 py-16 text-center">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#13AEA8]/10 blur-3xl rounded-full"></div>
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#123337] border border-[#1B5555] flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(19,174,168,0.12)]">
                        <FileText size={30} className="text-[#13AEA8]" />
                    </div>
                    <h1 className="text-3xl font-semibold text-white"> No Documents Yet</h1>
                </div>
            </div>
        </div>
    )
    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold"> Documents Overview </h2>
                <button className="text-zinc-300 text-sm border border-zinc-800 rounded-lg px-3 py-1.5 hover:text-[#09e6f6] hover:border-[#09e6f67c] transition-all cursor-pointer" onClick={() => {
                    navigate('/individual/documents')
                }}> View all </button>
            </div>
            <div className={`${documents.length === 0 ? "hidden" : "block"}`}>
                <div className="flex justify-between items-center pt-3">
                    <span className="text-zinc-400 text-sm"> Total Documents </span>
                    <span className="text-white bg-[#151E2A] border border-zinc-800 rounded-lg px-3 py-1.5 text-sm font-medium"> {documents.length} </span>
                </div>
            </div>
            <div>
                {documents.length === 0 ? empty :
                    documents.slice(-4).toReversed().map((value) => {
                        return (
                            <div key={value.id} className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-b-0" >
                                <div className="flex items-center gap-1">
                                    <div className={`p-2 rounded-lg ${value.type === "Receipt" ? "text-[#09e6f6] bg-[#052734f0]" : value.type === "Invoice" ? "text-[#6c09f6] bg-[#181238f0]" : "text-[#0980f6] bg-[#122338f0]"}`}> <FileText size={20} /> </div>
                                    <div>
                                        <h3 className="text-white text-sm font-medium"> {value.name} </h3>
                                        <p className="text-zinc-500 text-xs mt-0.5"> {value.product} </p>
                                    </div>
                                </div>
                                <div className={`${value.type === "Receipt" ? "border border-[#014c52]" : value.type === "Invoice" ? "border border-[#2d037b]" : "border border-[#02256c]"} rounded-lg px-2 py-1`}>
                                    <span className="text-zinc-200 text-sm font-medium"> {value.type} </span>
                                </div>
                            </div>
                        )
                    })}
            </div>


        </div>
    )
}

export default DocumentOverview
