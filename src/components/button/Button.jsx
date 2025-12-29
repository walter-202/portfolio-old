import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  const buttonClasses = [
    'themed-button',
    `themed-button--${variant}`,
    `themed-button--${size}`,
    className,
    disabled && 'themed-button--disabled',
    loading && 'themed-button--loading'
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      <div className="themed-button__container">
        <span className="themed-button__bg"></span>
        <span className="themed-button__border"></span>
        <span className="themed-button__content">
          {loading ? (
            <span className="themed-button__spinner"></span>
          ) : (
            children
          )}
        </span>
      </div>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default Button