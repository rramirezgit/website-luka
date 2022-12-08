import { useEffect } from 'react'
import clsx from 'clsx'
import lukaCSS from 'styles/luka.module.css'
import carouselCSS from './carousel.module.css'
import carouselArrow from 'assets/carousel-arrow.svg'

interface CarouselProps {
  children: JSX.Element[]
}

const Carousel = ({ children }: CarouselProps): JSX.Element => {
  const checkViewPort = (): void => {
    for (let index = 0; index < children.length; index++) {
      const card = document.getElementById(`${children[index].key ?? ''}`)?.getBoundingClientRect()
      if (card) {
        const selector = document.getElementById(`selector-${children[index].key ?? ''}`)
        if (
          card.top >= 0 &&
          card.left >= 0 &&
          card.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          card.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
          selector?.classList.add(carouselCSS['carousel-selector--active'])
        } else {
          selector?.classList.remove(carouselCSS['carousel-selector--active'])
        }
      }
    }
  }
  const clickLeft = (): void => {
    const carousel = document.getElementById('carousel')
    carousel?.scrollBy({
      left: -330
    })
    setTimeout(() => {
      checkViewPort()
    }, 400)
  }
  const clickRight = (): void => {
    const carousel = document.getElementById('carousel')
    carousel?.scrollBy({
      left: 330
    })
    setTimeout(() => {
      checkViewPort()
    }, 400)
  }
  useEffect(() => {
    checkViewPort()
  }, [])
  return (
    <div>
      <div onScroll={() => checkViewPort()} draggable={false} id='carousel' className={clsx(lukaCSS['flex-row'], carouselCSS.container)}>
        {children}
      </div>
      <div className={clsx(lukaCSS['flex-row'], lukaCSS['vertical-horizontal-center'], carouselCSS['button-container'])}>
        <figure className={carouselCSS.figure} onClick={() => clickLeft()}>
          <img className={clsx(carouselCSS.img, lukaCSS.pointer)} src={carouselArrow} alt={'Back'}/>
        </figure>
        {
          children.map((child) => {
            return (
                <div key={child.key} id={`selector-${child.key ?? ''}`} className={clsx(carouselCSS['carousel-selector'], lukaCSS.pointer)}></div>
            )
          })
        }
        <figure className={carouselCSS.figure}>
          <img className={clsx(carouselCSS['img--invert'], lukaCSS.pointer)} src={carouselArrow} alt={'Forward'} onClick={() => clickRight()}/>
        </figure>
      </div>
    </div>
  )
}

export default Carousel
