import Home from './home'
import styles from './aboutUs.module.css'
import { Box } from '@mui/material'
import Experience from './experience'
import OurCulture from './ourCulture'
import Mision from './mision'
import Ready from 'components/ready'
import Layout from 'components/layaouts/abousUs'
import Footer from 'components/footer'

const AboutUs = (): JSX.Element => {
  return (
    <Box className={styles.content}>
      <Home />
      <Experience />
      <OurCulture />
      <Mision />
      <Layout className={styles.layout}>
        <Box className={styles.contentReadyFoter}>
          <Ready aboutUs />
        </Box>
        <Footer />
      </Layout>
    </Box>
  )
}

export default AboutUs
