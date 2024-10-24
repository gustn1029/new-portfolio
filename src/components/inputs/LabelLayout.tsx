import { LabelLayoutProps } from '../../types'

const LabelLayout = ({children, inputId, label}:LabelLayoutProps) => {
  return (
    <label className={`relative flex flex-col gap-[5px]`} htmlFor={inputId}>
        <span className='text-gray-500 ml-[20px]'>{label}</span>
        {children}
    </label>
  )
}

export default LabelLayout