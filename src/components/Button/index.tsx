import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
  className?: string
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  disabled,
  className
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type={type}
        title={title}
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
