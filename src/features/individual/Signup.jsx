import React, { useEffect } from 'react'
import { LockKeyhole, Mail, ShieldCheck, User } from 'lucide-react'
import logo from '../../assets/logo.png'
import loginImage from '../../assets/loginImage.png'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const Signup = () => {
    const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm()
    const password = watch("password")
    const confirmPassword = watch("confirmPassword")
    const onSubmit = (data) => {
        console.log(data)
        toast.success("Account created successfully!")
    }
    useEffect(() => {
        if (confirmPassword) {
            trigger("confirmPassword")
        }
    }, [password, confirmPassword, trigger])
    return (

        <form className='bg-[#000309] px-5 py-5 min-h-dvh flex justify-between items-center' onSubmit={handleSubmit(onSubmit)}>
            <div className='lg:flex justify-center items-stretch w-full max-w-350 mx-auto border border-[#14181E] '>
                <div className='h-[92vh] w-1/2 hidden lg:block border-r border-[#14181E] rounded-2xl'>
                    <img src={loginImage} alt="loginSideImage" className='w-full h-full object-contain ' />
                </div>
                <div className='lg:w-1/2 bg-[#060B11] flex items-center '>
                    <div className='w-full max-w-105 mx-auto px-8'>
                        <div className='h-20 flex items-center justify-center py-2'>
                            <img src={logo} alt="" className='h-full w-auto object-cover' />
                        </div>
                        <div className='flex flex-col justify-center items-center py-5'>
                            <h1 className='text-3xl md:text-4xl font-semibold text-white '>Create Your Account</h1>
                            <p className='text-sm text-zinc-400 pt-2'>Join OwnStock and start your journey</p>
                        </div>
                        <div>

                            <div className='py-2'>
                                <p className='text-sm text-zinc-200 py-2'>Name</p>
                                <div className='text-white flex items-center border border-zinc-800 px-2 py-3 gap-1.5 rounded-lg w-full bg-[#0F1218]'>
                                    <User />
                                    <input type="text" placeholder='Enter your full name' {...register("name", {
                                        required: "Name is required!",
                                        minLength: {
                                            value: 3,
                                            message: "Name must be of 3 CHARACTERS"
                                        },
                                        pattern: {
                                            value: /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                                            message: "Name can contain letters and spaces only"
                                        }
                                    })} className='w-full px-2 focus:outline-none text-base' />
                                </div>

                                {errors.name && (<p className="text-red-400 text-xs"> {errors.name.message} </p>)}

                                <p className='text-sm text-zinc-200 py-2'>Email</p>
                                <div className='text-white flex items-center border border-zinc-800 px-2 py-3 gap-1.5 rounded-lg w-full bg-[#0F1218]'>
                                    <Mail />
                                    <input type="email" placeholder='Enter your email' {...register("email", {
                                        required: "Email is required!",
                                        validate: (value) => {
                                            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "Enter a valid email address"
                                        }
                                    })} className='w-full px-2 focus:outline-none text-base' />
                                </div>

                                {errors.email && (<p className="text-red-400 text-xs"> {errors.email.message} </p>)}

                                <div className='lg:flex items-center justify-center gap-5'>
                                    <div className='py-2'>
                                        <p className='text-sm text-zinc-200 py-2'>Password</p>
                                        <div className='text-white flex items-center border border-zinc-800 px-2 py-3 gap-1.5 rounded-lg w-full bg-[#0F1218]'>
                                            <LockKeyhole />
                                            <input type="password" placeholder='Enter your password' {...register("password", {
                                                required: "Password is required!",
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                    message: "Password must contain 8+ characters, uppercase, lowercase, number and special character"
                                                }
                                            })} className='w-full px-2 focus:outline-none text-base' />
                                        </div>
                                        {errors.password && (<p className="text-red-400 text-xs"> {errors.password.message} </p>)}
                                    </div>

                                    <div className='py-2'>
                                        <p className='text-sm text-zinc-200 py-2'>Confirm Password</p>
                                        <div className='text-white flex items-center border border-zinc-800 px-2 py-3 gap-1.5 rounded-lg w-full bg-[#0F1218]'>
                                            <LockKeyhole />
                                            <input type="password" placeholder='Enter your confirm password' {...register("confirmPassword", {
                                                required: "Confirm Password is required!",
                                                validate: (value) =>
                                                    value === password || "Passwords do not match"
                                            })} className='w-full px-2 focus:outline-none text-base' />
                                        </div>
                                        {errors.confirmPassword && (<p className="text-red-400 text-xs"> {errors.confirmPassword.message} </p>)}
                                    </div>

                                </div>
                                <div className='py-4 w-full flex justify-center items-center'>
                                    <button className='bg-[#01b0ad]  hover:shadow-[0_20px_35px_rgba(0,222,218,0.25)] w-full text-white py-3 text-xl cursor-pointer rounded-lg '>Sign up</button>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='text-xs text-gray-400'>
                                    Already have an account?{" "}
                                    <Link to="/individual/login" className="text-base text-[#00d5d8] cursor-pointer"
                                    >Login </Link>
                                </p>
                            </div>
                        </div>

                        <div className='py-4'>
                            <div className="border border-[#006b63] rounded-xl px-5 py-4 flex items-center gap-4 bg-[#003d3c30]">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-[#003d3c] flex items-center justify-center">
                                    <ShieldCheck size={24} className="text-[#00deda]" />
                                </div>
                                <div>
                                    <h3 className="text-white text-sm font-medium"> Your data is safe with us </h3>

                                    <p className="text-zinc-400 text-xs leading-relaxed mt-1"> We use industry-standard encryption <br /> to protect your information. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Signup
