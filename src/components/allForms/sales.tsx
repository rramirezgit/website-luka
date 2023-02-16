import {
  Box,
  Typography,
  TextField,
  Autocomplete,
  Button,
  Snackbar
} from '@mui/material'
import styles from './allforms.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import * as yup from 'yup'
import { Formik, ErrorMessage, FormikProps } from 'formik'
import { allCountries, transactions } from 'logic'
import Flag from 'react-world-flags'
import axios from 'axios'
import { useRef, useEffect, useState } from 'react'
import Slide, { SlideProps } from '@mui/material/Slide'
import Lottie from 'lottie-react'
import animationData from 'assets/check.json'
import animationErrorData from 'assets/x.json'

type TransitionProps = Omit<SlideProps, 'direction'>

interface FormProps {
  name: string
  lastName: string
  email: string
  website: string
  income: string
  phone: string
  message: string
  country: {
    label: string
    code: string
    phone: string
  }
}

const TransitionLeft = (props: TransitionProps): JSX.Element => {
  return <Slide {...props} direction="left" />
}

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  website: yup
    .string()
    .url('Enter a valid website'),
  message: yup
    .string()
    .min(10, 'Invalid length')
    .required('Message is required'),
  income: yup
    .string()
    .equals(transactions.slice(1), 'Expected income must be one of the options')
    .required('Expected income is required'),
  phone: yup
    .string()
    .matches(/^[0-9]*$/, 'Only numbers allowed')
    .required('Phone is required'),
  country: yup.object({
    code: yup.string().required(),
    phone: yup.string().required(),
    label: yup.string().required()
  })
})

const SalesForm = (): JSX.Element => {
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false)
  const initialValue: FormProps = {
    name: '',
    lastName: '',
    email: '',
    website: '',
    message: '',
    income: 'Select an option',
    phone: '',
    country: allCountries[60]
  }

  const ref = useRef<FormikProps<FormProps> | null>(null)

  useEffect(() => {
    fetch('https://api.ipregistry.co/?key=10auylyu4tjkh2xd')
      .then(function (response) {
        return response.json()
      })
      .then(function (payload) {
        const country = allCountries.find(
          c => c.code === payload.location.country.code
        )
        if (country) {
          ref.current?.setFieldValue('country', country)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (openSnackbar) {
      setTimeout(() => {
        setOpenSnackbar(false)
      }, 5000)
    }
  }, [openSnackbar])

  useEffect(() => {
    if (openErrorSnackbar) {
      setTimeout(() => {
        setOpenErrorSnackbar(false)
      }, 5000)
    }
  }, [openErrorSnackbar])

  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Contact our Sales Team</Typography>
      <Box className={styles['form-container']}>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          innerRef={formik => (ref.current = formik)}
          onSubmit={async (values, actions) => {
            await axios
              .post(
                'https://bspaycoapi-qa.payco.net.ve/api/v1/email',
                {
                  From: 'noreply@lukapay.io',
                  To: 'amena@lukapay.io',
                  Subject: `Contacto Landing - Cliente: ${values.name} ${values.lastName}`,
                  Body: `
                      El cliente ${values.name} ${values.lastName} ha enviado un mensaje a ventas con el siguiente contenido:<br/><br/>
                      País: ${values.country.label},<br/>
                      Correo ${values.email},<br/>
                      Teléfono: ${values.country.phone}${values.phone},<br/>
                      Sitio Web: ${values.website ? values.website : 'N/A'},<br/>
                      Expectativa (# de transacciones): ${values.income},<br/>
                      Mensaje: ${values.message}
                    `
                },
                {
                  auth: {
                    username: 'admin',
                    password: '12345678'
                  }
                }
              )
              .then(() => {
                setOpenSnackbar(true)
                actions.resetForm()
              })
              .catch(error => {
                setOpenErrorSnackbar(true)
                console.log(error)
              })
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <Box className={styles['input-container']}>
                <TextField
                  name={'name'}
                  fullWidth
                  variant="standard"
                  label={'Name'}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                />
                <ErrorMessage
                  name={'name'}
                  component={'div'}
                  className={styles.error}
                />
              </Box>
              <Box className={styles['input-container']}>
                <TextField
                  name={'lastName'}
                  fullWidth
                  variant="standard"
                  label={'Last Name'}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                />
                <ErrorMessage
                  name={'lastName'}
                  component={'div'}
                  className={styles.error}
                />
              </Box>
              <Box className={styles['input-container']}>
                <TextField
                  name={'email'}
                  fullWidth
                  variant="standard"
                  label={'Email'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
                <ErrorMessage
                  name={'email'}
                  component={'div'}
                  className={styles.error}
                />
              </Box>
              <Box className={styles['input-container']}>
                <TextField
                  name={'website'}
                  fullWidth
                  variant="standard"
                  label={'Website'}
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={formik.touched.website && Boolean(formik.errors.website)}
                />
                <ErrorMessage
                  name={'website'}
                  component={'div'}
                  className={styles.error}
                />
              </Box>
              <Box className={styles['input-container']}>
                <Autocomplete
                  disablePortal
                  disableClearable={true}
                  value={formik.values.income}
                  onChange={(e, newValue) =>
                    formik.setFieldValue('income', newValue)
                  }
                  options={transactions}
                  renderInput={params => (
                    <TextField
                      {...params}
                      name={'income'}
                      variant="standard"
                      label="Expected monthly transactions"
                      error={
                        formik.touched.income && Boolean(formik.errors.income)
                      }
                    />
                  )}
                  popupIcon={
                    <KeyboardArrowDownIcon sx={{ fontSize: '15px' }} />
                  }
                />
                <ErrorMessage
                  name={'income'}
                  component={'div'}
                  className={styles.error}
                />
              </Box>
              <Box className={styles['input-container']}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box
                    sx={{
                      width: '115px'
                    }}
                  >
                    <Autocomplete
                      disablePortal
                      fullWidth
                      value={formik.values.country}
                      disableClearable={true}
                      onChange={(e, newValue) =>
                        formik.setFieldValue('country', newValue)
                      }
                      options={allCountries}
                      getOptionLabel={option => `+ ${option.phone}`}
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ '& > img': { mr: 1, flexShrink: 0 } }}
                          {...props}
                        >
                          <Flag
                            code={option.code.toLowerCase()}
                            style={{
                              maxWidth: '25px',
                              maxHeight: '20px',
                              width: '25px',
                              height: '20px',
                              objectFit: 'cover',
                              borderRadius: '4px'
                            }}
                          />
                          <Typography sx={{ fontSize: '11px' }}>
                            +{option.phone}
                          </Typography>
                        </Box>
                      )}
                      renderInput={params => (
                        <TextField
                          {...params}
                          name={''}
                          variant="standard"
                          label="Phone"
                          fullWidth
                          error={
                            formik.touched.country &&
                            Boolean(formik.errors.country)
                          }
                          InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                              <Flag
                                code={formik.values.country.code.toLowerCase()}
                                style={{
                                  borderRadius: '8px',
                                  maxWidth: '25px',
                                  maxHeight: '17px',
                                  width: '100%',
                                  height: '100%',
                                  marginRight: '5px',
                                  objectFit: 'cover'
                                }}
                              />
                            )
                          }}
                        />
                      )}
                      popupIcon={
                        <KeyboardArrowDownIcon sx={{ fontSize: '15px' }} />
                      }
                    />
                    <ErrorMessage
                      name={'country'}
                      component={'div'}
                      className={styles.error}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: 'calc(100% - 125px)'
                    }}
                  >
                    <TextField
                      fullWidth
                      name={'phone'}
                      variant="standard"
                      value={formik.values.phone}
                      onChange={e => {
                        if (/^[0-9]*$/.test(e.target.value)) {
                          formik.handleChange(e)
                        }
                      }}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                    />
                    <ErrorMessage
                      name={'phone'}
                      component={'div'}
                      className={styles.error}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles['input-container']}>
                <TextField
                  name={'message'}
                  fullWidth
                  variant="outlined"
                  label={'Message'}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  rows={5}
                  multiline
                />
                <ErrorMessage
                  name={'message'}
                  component={'div'}
                  className={styles.error}
                />
              </Box>
              <Box className={styles['button-container']}>
                <Button
                  variant={'contained'}
                  color={'primary'}
                  sx={{
                    width: '150px',
                    height: '48px',
                    fontSize: '16px',
                    fontWeight: '600'
                  }}
                  type={'submit'}
                >
                  {'Send'}
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnackbar}
        TransitionComponent={TransitionLeft}
        className={styles['snackbar-container']}
      >
        <Box className={styles.snackbar}>
          <Box component={'figure'} className={styles.figure}>
            <Lottie
              animationData={animationData}
              loop={false}
              autoplay={true}
              className={styles.lottie}
              initialSegment={[0, 50]}
            />
          </Box>
          <Typography className={styles['snackbar-text']}>
            Message successfully sent
          </Typography>
        </Box>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openErrorSnackbar}
        TransitionComponent={TransitionLeft}
        className={styles['snackbar-container']}
      >
        <Box className={styles.snackbar}>
          <Box component={'figure'} className={styles.figure}>
            <Lottie
              animationData={animationErrorData}
              loop={false}
              autoplay={true}
              className={styles.lottie}
              initialSegment={[0, 50]}
            />
          </Box>
          <Typography className={styles['snackbar-text']}>
            Your message wasn&apos;t sent
          </Typography>
        </Box>
      </Snackbar>
    </Box>
  )
}

export default SalesForm
