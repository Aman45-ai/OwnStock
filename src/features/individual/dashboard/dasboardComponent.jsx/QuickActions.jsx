import {
  ArrowRight,
  FileText,
  Plus,
  Shield,
  ShieldCheck
} from 'lucide-react'

const QuickActions = () => {

  const actions = [
    {
      id: 1,
      title: "Add New Product",
      subTitle: "Register a new product",
      icon: Plus,
      iconBg: "bg-[#064C4C]",
      iconColor: "text-[#00D9A1]",
    },
    {
      id: 2,
      title: "Add Document",
      subTitle: "Upload bills, receipts etc.",
      icon: FileText,
      iconBg: "bg-[#3B1468]",
      iconColor: "text-[#9B5CFF]",
    },
    {
      id: 3,
      title: "Manage Warranties",
      subTitle: "View and track warranties",
      icon: ShieldCheck,
      iconBg: "bg-[#57370B]",
      iconColor: "text-[#E07D00]",
    },
    {
      id: 4,
      title: "Explore Insurance",
      subTitle: "Protect your products",
      icon: Shield,
      iconBg: "bg-[#073A70]",
      iconColor: "text-[#0078FF]",
    },
  ]

  return (
    <div className="bg-[#0B121D] border border-zinc-800 rounded-xl p-4">
      <div className="pb-3 border-b border-zinc-800">
        <h2 className="text-white text-lg font-semibold"> Quick Actions</h2>
      </div>
      <div className="pt-3 space-y-2">
        {actions.map((value) => {
          const Icon = value.icon
          return (
            <div key={value.id} className="flex items-center gap-3 bg-[#111B28] border border-zinc-800 rounded-lg p-2.5 hover:border-zinc-600 transition-all cursor-pointer" >

              <div className={`${value.iconBg} ${value.iconColor} p-2.5 rounded-lg`}>
                <Icon size={22} />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-sm font-medium"> {value.title} </h3>
                <p className="text-zinc-500 text-xs mt-0.5"> {value.subTitle} </p>
              </div>
              <ArrowRight size={19} className="text-zinc-500" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuickActions