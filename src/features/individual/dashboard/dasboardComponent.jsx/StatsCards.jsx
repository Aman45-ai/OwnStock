import { Clock, Package, Receipt, ShieldCheck } from 'lucide-react'

const StatsCards = () => {
  const cards = [
    {
      id: 1,
      icon: Package,
      title: "Total Products",
      number: 12,
      subTitle: "Registered products",
      background:"bg-[#0A6366]"
    },
    {
      id: 2,
      icon: Receipt,
      title: "Total Value",
      number: "₹ 2,45,000",
      subTitle: "Across all products",
      background:"bg-[#096165]"
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Active Warranties",
      number: 8,
      subTitle: "Currently Active",
      background:"bg-[#513591]"
    },
    {
      id: 4,
      icon: Clock,
      title: "Expiring Soon",
      number: 3,
      subTitle: "Next 30 days",
      background:"bg-[#713B08]"
    },

  ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-5 py-3'>
          {cards.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.id} className='flex-1 min-w-0 bg-[#08121E] border border-[#1A2631] rounded-xl p-4'>
                <div>
                  <span><Icon className={`${value.background} p-1.5 rounded-lg text-white`} size={38}/></span>
                </div>
                <div className='flex flex-col gap-0.5'>
                  <h3 className='text-zinc-300'>{value.title}</h3>
                  <h1 className='text-white text-2xl'>{value.number}</h1>
                  <p className='text-xs text-zinc-400'>{value.subTitle}</p>
                </div>
              </div>
            )
          })}
        </div>
  )
}

export default StatsCards
