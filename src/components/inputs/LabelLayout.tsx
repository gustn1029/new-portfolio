import { LabelLayoutProps } from '../../types'
import ErrorToolTip from '../tooltip/ErrorToolTip'

const LabelLayout = ({children, errors, inputId, label}:LabelLayoutProps) => {
  return (
    <label className={`relative block`} htmlFor={inputId}>
        <span>{label}</span>
        {children}
        {errors && errors.message && errors.message.message && (
            <ErrorToolTip message={errors.message.message} />
          )}
    </label>
  )
}

export default LabelLayout