import './loading.css'

interface Props {
  size: number
  firstColor: string
  secondColor: string
  border: number
}

const Loading = ({ size, firstColor, secondColor, border }: Props): JSX.Element => {
  const bodyStyles = document.body.style
  if (size) {
    bodyStyles.setProperty('--size', `${size}px`)
  }
  if (firstColor) {
    bodyStyles.setProperty('--first-border-color', firstColor)
  }
  if (secondColor) {
    bodyStyles.setProperty('--second-border-color', secondColor)
  }
  if (border) {
    bodyStyles.setProperty('--border-size', `${border}px`)
  }
  return (
    <div className="loading inside">
      <div></div>
    </div>
  )
}

export default Loading
