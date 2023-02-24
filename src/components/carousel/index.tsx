import clsx from 'clsx'
import lukaCSS from 'styles/luka.module.css'
import carouselCSS from './carousel.module.css'
import config from 'const'
import { Box } from '@mui/material'

interface CarouselProps {
  children: JSX.Element[]
  id: string
  width: string
  height?: string
  buttonsMargin?: number
}

const Carousel = ({
  children,
  id,
  width,
  height = 'auto',
  buttonsMargin = 0
}: CarouselProps): JSX.Element => {
  const checkViewPort = (): void => {
    for (let index = 0; index < children.length; index++) {
      const card = document
        .getElementById(`${children[index].key ?? ''}`)
        ?.getBoundingClientRect()
      if (card) {
        const selector = document.getElementById(
          `selector-${children[index].key ?? ''}`
        )
        if (
          card.left >= 0 &&
          card.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        ) {
          selector?.classList.add(carouselCSS['carousel-selector--active'])
        } else {
          selector?.classList.remove(carouselCSS['carousel-selector--active'])
        }
      }
    }
  }
  const clickLeft = (): void => {
    const carousel = document.getElementById(`carousel-${id}`)
    carousel?.scrollBy({
      left: -parseInt(width)
    })
    setTimeout(() => {
      checkViewPort()
    }, 400)
  }
  const clickRight = (): void => {
    const carousel = document.getElementById(`carousel-${id}`)
    carousel?.scrollBy({
      left: parseInt(width)
    })
    setTimeout(() => {
      checkViewPort()
    }, 400)
  }

  return (
    <Box>
      <Box
        onScroll={() => checkViewPort()}
        onMouseEnter={() => checkViewPort()}
        onMouseLeave={() => checkViewPort()}
        draggable={false}
        id={`carousel-${id}`}
        className={clsx(lukaCSS['flex-row'], carouselCSS.container)}
        sx={{
          alignItems: {
            xs: 'center',
            md: 'center'
          },
          height: height !== 'auto' ? `${height}px` : height,
          justifyContent: {
            xs: 'flex-start',
            carousel: 'space-between'
          },
          width: {
            xs: '100vw'
          },
          maxWidth: {
            md: '1300px'
          },
          zIndex: '99'
        }}
      >
        {children}
      </Box>
      <Box
        className={lukaCSS['vertical-horizontal-center']}
        sx={{
          display: {
            xs: 'flex',
            carousel: 'none'
          },
          marginTop: `${buttonsMargin}px`
        }}
      >
        <Box
          component={'figure'}
          className={carouselCSS.figure}
          onClick={() => clickLeft()}
        >
          <img
            className={clsx(carouselCSS.img, lukaCSS.pointer)}
            src={`${config.UrlBaseImg}carousel/carousel-arrow.svg`}
            alt={'Back'}
          />
        </Box>
        {children.map(child => {
          return (
            <Box
              key={child.key}
              id={`selector-${child.key ?? ''}`}
              className={clsx(
                carouselCSS['carousel-selector'],
                lukaCSS.pointer
              )}
            ></Box>
          )
        })}
        <Box component={'figure'} className={carouselCSS.figure}>
          <img
            className={clsx(carouselCSS['img--invert'], lukaCSS.pointer)}
            src={`${config.UrlBaseImg}carousel/carousel-arrow.svg`}
            alt={'Forward'}
            onClick={() => clickRight()}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Carousel
