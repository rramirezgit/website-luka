import { Box, Button, Typography } from '@mui/material'
import styles from './ready.module.css'

const Ready = (): JSX.Element => {
  return (
    <Box
      className={styles.content}
      sx={{
        height: {
          xs: '395px',
          md: '406px'
        },
        padding: {
          xs: '30px',
          md: '90px'
        }
      }}
    >
      <Typography
        classes={{ root: styles.title }}
        sx={{
          fontSize: {
            xs: '30.153px',
            sm: '50.6667px',
            md: '56.6667px'
          }
        }}
      >
        Ready, get set, go!
      </Typography>
      <Typography
        classes={{ root: styles.subtitle }}
        sx={{
          fontSize: {
            xs: '12px',
            sm: '21.3333px',
            md: '24px'
          }
        }}
      >
        Let’s explore how we may help you or just apply online and start using
        our service in matter of minutes.
      </Typography>

      <Box
        sx={{
          marginTop: {
            xs: '10px'
          },
          display: 'flex',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          gap: {
            xs: '10px',
            md: '40px'
          }
        }}
      >
        <Button variant={'contained'} color={'primary'} size={'large'}>
          Contact sales
        </Button>
        <Button variant={'outlined'} color={'secondary'} size={'large'}>
          Apply online
        </Button>
      </Box>
    </Box>
  )
}

export default Ready
