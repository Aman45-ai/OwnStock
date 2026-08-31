import {
  ArrowLeft,
  Calendar,
  FileText,
  Package,
  ShieldCheck,
  Store
} from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { IndividualContext } from '../../../context/IndividualContext'

const AddInsurance = () => {
  const navigate = useNavigate()
  const { insurance, setInsurance } = useContext(IndividualContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    setInsurance([...insurance, data])
    navigate('/individual/insurance')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-[#0A111D] text-white" >
      <div className="px-6 py-5 border-b border-zinc-800">
        <div className="flex items-center gap-4 max-w-5xl mx-auto">
          <button type="button" onClick={() => navigate(-1)} className="p-2 rounded-xl border border-zinc-700 text-zinc-400 hover:text-[#13AEA8] hover:border-[#13AEA8] transition-all duration-200 cursor-pointer" >
            <ArrowLeft size={22} />
          </button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight"> Add Insurance </h1>
            <p className="text-sm text-zinc-500 mt-1"> Add an insurance policy and keep your coverage details organized. </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-[#0F1825] border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-800 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#003C3D] text-[#13AEA8]">
              <ShieldCheck size={21} />
            </div>
            <div>
              <h2 className="font-semibold text-lg">Insurance Information </h2>
              <p className="text-xs text-zinc-500 mt-0.5"> Enter the details of your insurance policy.</p>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center gap-2 text-sm text-zinc-300 mb-2">
                  <Package size={15} className="text-zinc-500" /> Product </label>
                <select {...register("product", {
                    required: "Product is required!"
                  })}
                  defaultValue=""
                  className="w-full bg-[#0D1521] border border-zinc-700
                  rounded-lg px-3 py-2.5 text-white
                  focus:outline-none focus:border-[#13AEA8]
                  transition-colors cursor-pointer"
                >
                  <option value="" disabled> Select product</option>
                  <option value="Laptop"> Laptop </option>
                  <option value="Mobile"> Mobile </option>
                  <option value="Television"> Television </option>
                  <option value="Kitchen Appliance"> Kitchen Appliance </option>
                  <option value="Others"> Others </option>
                </select>
                {errors.product && (
                  <p className="text-red-400 text-xs mt-1">{errors.product.message} </p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-zinc-300 mb-2">
                  <Store size={15} className="text-zinc-500" /> Insurance Provider
                </label>
                <input
                  type="text"
                  placeholder="e.g. AppleCare+, HDFC ERGO"
                  {...register("name", {
                    required: "Insurance provider is required!",
                    minLength: {
                      value: 3,
                      message: "Provider must be at least 3 characters"
                    }
                  })}
                  className="w-full bg-[#0D1521] border border-zinc-700
                  rounded-lg px-3 py-2.5 text-white
                  placeholder:text-zinc-600
                  focus:outline-none focus:border-[#13AEA8]
                  transition-colors cursor-pointer"
                />

                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}

              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-zinc-300 mb-2">
                  <FileText size={15} className="text-zinc-500" /> Policy Number
                </label>
                <input type="text" placeholder="e.g. ACPL123456789"
                  {...register("policy", {
                    required: "Policy number is required!"
                  })}
                  className="w-full bg-[#0D1521] border border-zinc-700 rounded-lg px-3 py-2.5 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8] transition-colors cursor-pointer" />
                {errors.policy && (
                  <p className="text-red-400 text-xs mt-1"> {errors.policy.message} </p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-zinc-300 mb-2">
                  <ShieldCheck size={15} className="text-zinc-500" /> Coverage Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-zinc-500"> ₹ </span>
                  <input type="number" placeholder="e.g. 114000"{...register("amount", {
                      required: "Coverage amount is required!"
                    })} className="w-full bg-[#0D1521] border border-zinc-700 px-7 py-2.5 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#13AEA8]
                    transition-colors cursor-pointer"
                  />
                </div>
                {errors.amount && (
                  <p className="text-red-400 text-xs mt-1">{errors.amount.message} </p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-zinc-300 mb-2">
                  <Calendar size={15} className="text-zinc-500" />Start Date
                </label>
                <input type="date" {...register("startDate", {
                    required: "Start date is required!"
                  })} className="w-full bg-[#0D1521] border border-zinc-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#13AEA8] transition-colors cursor-pointer" />
                {errors.startDate && (
                  <p className="text-red-400 text-xs mt-1"> {errors.startDate.message} </p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm text-zinc-300 mb-2">
                  <Calendar size={15} className="text-zinc-500" /> Expiry Date
                </label>
                <input type="date" {...register("expiryDate", {
                    required: "Expiry date is required!"
                  })} className="w-full bg-[#0D1521] border border-zinc-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-[#13AEA8] transition-colors cursor-pointer" />
                {errors.expiryDate && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.expiryDate.message}
                  </p>
                )}
              </div>
              
            </div>
            <div className="mt-6">
              <label className="flex items-center gap-2 text-sm text-zinc-300 mb-2">
                <FileText size={15} className="text-zinc-500" /> Insurance Policy Document
              </label>
              <div className="border border-dashed border-zinc-700 rounded-xl p-8 text-center bg-[#0D1521] hover:border-[#13AEA8] transition-colors cursor-pointer"
              >
                <FileText size={32} className="mx-auto text-zinc-600" />
                <p className="text-sm text-zinc-400 mt-3">  Upload your insurance policy document </p>
                <p className="text-xs text-zinc-600 mt-1">  PDF, JPG or PNG</p>
              </div>
            </div>
           
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-zinc-800">
              <button type="button" onClick={() => navigate(-1)} className="px-6 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-whitetransition-all duration-200 cursor-pointer" > Cancel
              </button>
              <button type="submit" className="px-7 py-2.5 rounded-lg
                bg-[#13AEA8] text-white font-medium hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(0,222,218,0.18)] transition-all duration-300 cursor-pointer" > Add Insurance
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddInsurance