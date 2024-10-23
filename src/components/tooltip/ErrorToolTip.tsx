const ErrorToolTip = ({message}:{message: string}) => {
  return (
    <em className='absolute text-red-500 left-[20px] bottom-[-25px] text-[0.85rem]'>{message}</em>
  )
}

export default ErrorToolTip