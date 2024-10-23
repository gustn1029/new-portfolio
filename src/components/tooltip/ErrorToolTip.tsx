import React from 'react'

const ErrorToolTip = ({message}:{message: string}) => {
  return (
    <em className='absolute text-red-500 lef-[5px] bottom-0 text-[0.8rem]'>{message}</em>
  )
}

export default ErrorToolTip