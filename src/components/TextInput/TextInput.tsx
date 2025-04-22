import React from 'react'

import clsx from 'clsx'
import './TextInput.css'
type InputProps={
  label:string,
  className?:string,type:'text'|'password'|'email'|'phone'}
  & React.InputHTMLAttributes<HTMLInputElement>;
export const TextInput = ({label,className,type='text',...props}:InputProps )=> {
  return (
    <div className='text-input'>
    <span className='text-input__label'>{label}</span>
    <input className={clsx('text-input__input',{className:className})} type='type' {...props}/>
    </div>
  )
}



