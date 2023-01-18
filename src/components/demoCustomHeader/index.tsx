import brush from 'assets/demoLink/brush.png'
import logoLuka from 'assets/footer/luka.png'
import tooltip from 'assets/demoLink/tooltip.png'
import { Box } from '@mui/material'
import { getCssVar } from 'theme'

interface Props {
  customization: () => void
}

const DemoCustomHeader = ({ customization }: Props): JSX.Element => {
  return (
    <Box
      sx={
        {
          width: '80%',
          padding: '45px 0 25px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 auto'
        }
      }
    >
      <Box
        component={'figure'}
        sx={
          {
            width: '85px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }
      >
        <img src={logoLuka} alt='Logo' style={{ maxWidth: '100%' }} />
      </Box>
      <Box
        sx={
          {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: getCssVar('--primary-buttons'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }
        }
        onClick={customization}
      >
        <img src={brush} alt='Logo' style={{ width: '29px', height: '29px' }} />
        <Box
          sx={
            {
              position: 'absolute',
              width: '110px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              top: '25px',
              left: '-75px'
            }
          }
        >
          <img src={tooltip} alt={'Personaliza'} style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default DemoCustomHeader
