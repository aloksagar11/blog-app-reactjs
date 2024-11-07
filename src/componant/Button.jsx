import React from 'react'


const Button = ({
    children,
    type='button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className ='',
    ...props
}) => {
  
  return (
    <button className={`px-4 py-2 border rounded-lg hover:bg-black ${bgColor} ${textColor}`}  type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
