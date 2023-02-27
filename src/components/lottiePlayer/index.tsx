import { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import config from 'const'

interface LottiePlayerProps {
  path: string
  [key: string]: any
}

const LottiePlayer = ({ path, ...props }: LottiePlayerProps): JSX.Element => {
  const [animation, setAnimation] = useState(null)

  useEffect(() => {
    void fetch(`${config.UrlBaseImg}${path}`)
      .then(res => res.json())
      .then(data => {
        setAnimation(data)
      })
  }, [])

  return <Lottie animationData={animation} {...props} />
}

export default LottiePlayer
