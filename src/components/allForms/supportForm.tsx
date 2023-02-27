import { Box, Typography, TextField, Autocomplete, Button } from '@mui/material'
import styles from './allforms.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import * as yup from 'yup'
// import { Formik, ErrorMessage, FormikProps } from 'formik'
import { Formik, ErrorMessage } from 'formik'
import { allCountries, subjects } from 'logic'
import axios from 'axios'
// import { useRef, useEffect } from 'react'
import config from 'const'

interface Props {
  loading: boolean
  setLoading: (value: boolean) => void
  setSuccess: (value: boolean) => void
  setFailure: (value: boolean) => void
}

interface FormProps {
  subject: string
  name: string
  lastName: string
  email: string
  message: string
  phone: string
  country: {
    label: string
    code: string
    phone: string
  }
}

const validationSchema = yup.object({
  subject: yup
    .string()
    .equals(subjects.slice(1), 'Subject must be one of the options')
    .required('Subject is required'),
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  message: yup
    .string()
    .min(10, 'Invalid length')
    .required('Message is required'),
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

const SupportForm = ({
  loading,
  setLoading,
  setSuccess,
  setFailure
}: Props): JSX.Element => {
  const initialValue: FormProps = {
    subject: 'Select a subject',
    name: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
    country: allCountries[60]
  }

  // const ref = useRef<FormikProps<FormProps> | null>(null)

  // useEffect(() => {
  //   if (!loading) {
  //     fetch('https://api.ipregistry.co/?key=10auylyu4tjkh2xd')
  //       .then(function (response) {
  //         return response.json()
  //       })
  //       .then(function (payload) {
  //         const country = allCountries.find(
  //           c => c.code === payload.location.country.code
  //         )
  //         if (country) {
  //           ref.current?.setFieldValue('country', country)
  //         }
  //       })
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   }
  // }, [loading])

  return (
    <>
      <Box className={styles['form-container']}>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          // innerRef={formik => (ref.current = formik)}
          onSubmit={async (values, actions) => {
            setLoading(true)
            await axios
              .post(
                'https://bspaycoapi-qa.payco.net.ve/api/v1/email',
                {
                  From: 'noreply@lukapay.io',
                  To: 'support@lukapay.io',
                  Subject: `Contacto Landing - Cliente: ${values.name} ${values.lastName}`,
                  Body: `
                        El cliente ${values.name} ${values.lastName} ha enviado un mensaje de soporte con el siguiente contenido:<br/><br/>
                        País: ${values.country.label},<br/>
                        Correo: ${values.email},<br/>
                        Teléfono: ${values.country.phone}${values.phone},<br/>
                        Tipo: ${values.subject},<br/>
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
                setLoading(false)
                setSuccess(true)
                actions.resetForm()
              })
              .catch(error => {
                setFailure(true)
                console.log(error)
              })
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <Box className={styles['input-container']}>
                <Autocomplete
                  disablePortal
                  disableClearable={true}
                  value={formik.values.subject}
                  onChange={(e, newValue) =>
                    formik.setFieldValue('subject', newValue)
                  }
                  options={subjects}
                  renderInput={params => (
                    <TextField
                      {...params}
                      name={'subject'}
                      variant="standard"
                      label="Subject"
                      error={
                        formik.touched.subject && Boolean(formik.errors.subject)
                      }
                    />
                  )}
                  popupIcon={
                    <KeyboardArrowDownIcon sx={{ fontSize: '15px' }} />
                  }
                />
                <ErrorMessage
                  name={'subject'}
                  component={'div'}
                  className={styles.error}
                />
              </Box>
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
                          <img
                            src={`${config.UrlBaseImg}supportFlags/${option.code.toLocaleUpperCase()}.png`}
                            style={{
                              maxWidth: '25px',
                              maxHeight: '18px',
                              width: '25px',
                              height: '18px',
                              objectFit: 'cover',
                              borderRadius: '4px'
                            }}
                            alt="Flag"
                            loading="lazy"
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
                              <img
                                src={`${config.UrlBaseImg}supportFlags/${formik.values.country.code.toLocaleUpperCase()}.png`}
                                style={{
                                  maxWidth: '25px',
                                  maxHeight: '18px',
                                  width: '25px',
                                  height: '18px',
                                  objectFit: 'cover',
                                  borderRadius: '4px',
                                  marginRight: '10px'
                                }}
                                loading="lazy"
                                alt="Flag"
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
                          if (e.target.value.length <= 11) {
                            formik.handleChange(e)
                          }
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
    </>
  )
}

export default SupportForm
