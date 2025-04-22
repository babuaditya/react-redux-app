import React, { useState } from 'react'
import './Login.css'
import { TextInput } from '../TextInput'
import { AppleIcon, GoogleIcon } from '../Icons'
import { Divider } from '../Divider'
export const Login = () => {
  const [email,setEmail]=useState("")
  return (
    <div className='login'>
      <div className='login-form'>
        <TextInput label='email' type='email' placeholder="user@example.com" />
        <TextInput label='password' type='password' placeholder="password" />
      <div className='relative'>
        <Divider/>
        <div className='absolute top-[-10px] left-[32%] font-normal  px-1 bg-primary text-primary-text'>
        OR Continue With 
        </div>
      </div>
      <div className='login-form__social-media'>
        <div className='flex gap-6'>
          <GoogleIcon height={24} width={24}/>
          <AppleIcon height={24} width={24}/>
        </div>
      </div>

        <div className=' mt-8 text-sm font-light text-primary-text  '>
          <p className=' text-justify'>Join the club of developers making things work — breaking limits, fixing bugs, and turning ideas into reality one line of code at a time. </p>
        </div>
      </div>

    </div>
  )
}



