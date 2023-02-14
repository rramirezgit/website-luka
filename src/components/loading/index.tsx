import './loading.css'

interface Props {
  size: number
  border: number
  firstColor: string
  secondColor: string
}

const LoadingIcon = ({ size, firstColor, secondColor, border }: Props): JSX.Element => {
  const bodyStyles = document.body.style
  if (size) {
    bodyStyles.setProperty('--size', `${size}rem`)
  }
  if (firstColor) {
    bodyStyles.setProperty('--first-border-color', firstColor)
  }
  if (secondColor) {
    bodyStyles.setProperty('--second-border-color', secondColor)
  }
  if (border) {
    bodyStyles.setProperty('--border-size', `${border}rem`)
  }
  return (
    <div className="loading inside">
      <div></div>
    </div>
  )
}

export default LoadingIcon
