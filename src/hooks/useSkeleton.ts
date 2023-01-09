import { useEffect, useState } from 'react'

const useSkeleton = (idList: string[]): any => {
  const [skeleton, setSkeleton] = useState(() =>
    idList.reduce((acc, id) => ({ ...acc, [id]: false }), {})
  )

  useEffect(() => {
    const images = idList.map(id => document.getElementById(id))
    images.forEach(image => {
      if (image) {
        image.addEventListener('load', ({ target }) => {
          const { id } = target as HTMLImageElement
          setSkeleton((prevState: any) => ({ ...prevState, [id]: true }))
        })
      }
    })
  }, [idList])

  return skeleton
}

export default useSkeleton
