import { Box } from '@mui/material'
import { FooterListProps } from '../footer.interface'
import FooterBox from './FooterBox'

const FooterList = ({ texts }: FooterListProps): JSX.Element => {
  return (
    <Box
      sx={
        {
          display: 'flex',
          flexDirection: 'column',
          margin: {
            xs: '15px 15px',
            md: '20px 20px'
          }
        }
      }
    >
      {
        texts.map((text) => (
          <FooterBox
            key={text.text}
            title={text.title}
            text={text.text}
            id={text.id}
          />
        ))
      }
    </Box>
  )
}

export default FooterList
