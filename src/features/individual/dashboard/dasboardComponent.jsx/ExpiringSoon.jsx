import { useContext } from 'react'
import product from '../../../../assets/product.png'
import { IndividualContext } from '../../../../context/IndividualContext'
import { Package } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const ExpiringSoon = () => {

    const { products } = useContext(IndividualContext)
    const navigate = useNavigate()
    const getDaysLeft = (value) =>{
        const expiryDate = new Date(value.warrantyExpiry).getTime()
        const warrantyTimeLeft = expiryDate - Date.now()
        const daysLeft = Math.floor(warrantyTimeLeft / (1000 * 60 * 60 * 24))

        return daysLeft
    }

    const expiringSoon = products.filter((value) => {
        if (!value.warrantyExpiry) return false
            
            const daysLeft = getDaysLeft(value)
            return daysLeft > 0 && daysLeft < 30
    })
    
    .map((value) => {
        const daysLeft = getDaysLeft(value)

        return {
            ...value,
            daysLeft
        }
    })

    let empty = (
        <div className="w-full max-w-[70vw] mx-auto col-span-full mt-5">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0B121D] px-6 py-16 text-center">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#13AEA8]/10 blur-3xl rounded-full"></div>
                <div className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#123337] border border-[#1B5555] flex items-center justify-center mb-5 shadow-[0_0_35px_rgba(19,174,168,0.12)]">
                        <Package size={30} className="text-[#13AEA8]" />
                    </div>
                    <h1 className="text-3xl font-semibold text-white"> No Products <br />Yet</h1>
                    
                </div>
            </div>
        </div>
    )



    return (
        <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h2 className="text-white text-lg font-semibold mb-1"> Expiring Soon</h2>
            </div>
            <div>
                {products.length === 0 ? empty :
                expiringSoon.map((value) => {
                    return (
                        <div key={value.id} className="flex items-center gap-3 py-3 border-b border-zinc-800 last:border-b-0" >
                            <div className="w-12 h-12 shrink-0 bg-zinc-800 rounded-lg overflow-hidden">
                                <img src={product} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white text-sm font-medium truncate">{value.name} </h3>
                                <p className="text-zinc-500 text-xs mt-1"> {value.category}</p>
                            </div>
                            <div className=" text-[#e07b00] bg-[#2a1700] text-xs font-medium border px-3 py-1 rounded-lg text-center">
                                <p className=""> Expires in</p>
                                <p className="text-sm">{value.daysLeft}  days</p>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default ExpiringSoon
