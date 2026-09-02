import { Clock, Package, Receipt, ShieldCheck } from 'lucide-react'
import { useContext } from 'react'
import { IndividualContext } from '../../../../context/IndividualContext'
const StatsCards = () => {
  
  const { products } = useContext(IndividualContext)
  const totalPrice = products.reduce((total, product)=>{
    return total+Number(product.price)
  },0)
  
  const activeWarranties = products.filter((value) => {
    if (!value.warrantyExpiry) return false

    const expiryDate = new Date(value.warrantyExpiry).getTime()
    const warrantyTimeLeft = expiryDate - Date.now()
    const daysLeft = warrantyTimeLeft / (1000 * 60 * 60 * 24)
    return daysLeft > 30
}).length

  const expiringSoon = products.filter((value) => {
    if (!value.warrantyExpiry) return false

    const expiryDate = new Date(value.warrantyExpiry).getTime()
    const warrantyTimeLeft = expiryDate - Date.now()
    const daysLeft = warrantyTimeLeft / (1000 * 60 * 60 * 24)
    return daysLeft > 0 && daysLeft < 30
}).length

  const cards = [
    {
      id: 1,
      icon: Package,
      title: "Total Products",
      number: products.length,
      subTitle: "Registered products",
      background:"bg-[#0b3438]",
      text:"text-[#0bd0d6]"
    },
    {
      id: 2,
      icon: Receipt,
      title: "Total Value",
      number: "₹ " + totalPrice,
      subTitle: "Across all products",
      background:"bg-[#0d2842]",
      text:"text-[#0586ff]"
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Active Warranties",
      number: activeWarranties,
      subTitle: "Currently Active",
      background:"bg-[#241840]",
      text:"text-[#8d5cff]"
    },
    {
      id: 4,
      icon: Clock,
      title: "Expiring Soon",
      number: expiringSoon,
      subTitle: "Next 30 days",
      background:"bg-[#713B08]",
      text:"text-[#f57b07]"
    },

  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-5 py-3'>
          {cards.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.id} className='flex-1 min-w-0 bg-[#08121E] border border-[#1A2631] rounded-xl p-4'>
                <div className='flex items-center gap-2'>
                  <div>
                  <span><Icon className={`${value.background} ${value.text} p-1.5 rounded-lg`} size={42}/></span>
                </div>
                <div className='flex flex-col gap-0.5'>
                  <h3 className='text-zinc-300'>{value.title}</h3>
                  <h1 className='text-white text-2xl'>{value.number}</h1>
                  <p className='text-xs text-zinc-400'>{value.subTitle}</p>
                </div>
                </div>
              </div>
            )
          })}
        </div>
  )
}

export default StatsCards
