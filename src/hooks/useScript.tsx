import { useEffect } from 'react'

interface Props {
  url: string
  id: string
  async?: boolean
  crossOrigin?: string
}

const useScript = ({ url, id, async = true, crossOrigin = 'anonymous' }: Props): any => {
  useEffect(() => {
    const iframes = Array.from(document.body.getElementsByTagName('iframe'))
    if (iframes.length > 0) {
      iframes.forEach((iframe) => {
        iframe.style.display = 'block'
      })
    }
    const script = document.createElement('script')
    script.src = url
    script.async = async
    script.id = id
    script.crossOrigin = crossOrigin
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
      const iframes = Array.from(document.body.getElementsByTagName('iframe'))
      iframes.forEach((iframe) => {
        iframe.style.display = 'none'
      })
    }
  }, [url, id, async, crossOrigin])
}

export default useScript
