'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Spinner from "@/components/ui/spinner";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useAuth } from '@/app/components/providers/AuthWrapper';
import { Button } from "@/components/ui/button";
import Image from "next/image";
// eslint-disable-next-line
interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    const { setUserEmail } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        if (!email && !password) {
            setError('Please enter email and password')
            return false
        }
        if (!email) {
            setError('Please enter email')
            return false
        }
        if (!password) {
            setError('Please enter password')
            return false
        }
        setError('')
        return true
    }

    const handleLogin = async () => {
        if (!validateForm()) return

        try {
            setIsLoading(true)
            setError('')
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
                email: email,
                password: password
            })

            const { token, email:userEmail } = response.data[0]
            
            // Store data in localStorage
            localStorage.setItem('jwt_token', token)
            localStorage.setItem('user_email', userEmail)

            // Update context
            setUserEmail(userEmail)

            // Redirect to dashboard
            window.location.href = '/'
        } catch (error) {
            console.error('Login failed:', error)
            setError('Login failed. Please check your credentials.')
        } finally {
            setIsLoading(false)
        }
    }

  return (<div className="w-screen h-screen flex items-center justify-center">
    {/* Top-left logo */}
    {/* <div className="absolute top-5 left-5">
    <Image 
        src={process.env.NEXT_PUBLIC_PLATFORM_LOGO_URL || ''} 
        alt="Company Logo" 
        className="!h-12 !w-auto"
        width={100}
        height={100}
    />
    </div> */}
    <div className="w-[30rem] flex flex-col justify-center">
        <div className="flex flex-col gap-1.5 mb-8">
            <div className="text-[28px] font-semibold text-[#1C1C1E]">Login</div>
            <div className="text-lg font-medium text-[#7F7F80]">
                Login with your work email.
            </div>
        </div>
        <div className="flex flex-col gap-2 mb-8">
        <div className="text-sm font-medium text-[#7F7F80]">Work Mail</div>
          <Input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2 mb-8">
            <div className="text-sm font-medium text-[#7F7F80]">Password</div>
            <div className="relative">
                <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="enter your password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-black"
                >
                    {showPassword ? (
                        <EyeOffIcon className="h-5 w-5" />
                    ) : (
                        <EyeIcon className="h-5 w-5" />
                    )}
                </button>
            </div>
        </div>
        {error && (
            <div className="text-red-500 text-sm mb-2">{error}</div>
        )}
        <Button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? (
                <Spinner className="!flex-row" label="Logging in..." />
            ) : (
                'Continue'
            )}
        </Button>
        <div className="text-lg text-blue-500 ml-auto mt-4 cursor-pointer">Forgot password?</div>
    </div>
    
  </div>);
};

export default LoginPage;
