import React from 'react'

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

const Button = ({text, className, id}: ButtonProps) => {
  return (
    <a className={`${className ?? ""} cta-wrapper `} >
        <div className='cta-button group'>
           <div className='bg-circle'>
                <p className='text text-center'>{text}</p>
                <div className='arrow-wrapper'>
                     <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
           </div>
        </div>
    </a>
  )
}

export default Button
