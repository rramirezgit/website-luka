import { Box, Typography, TextField, Autocomplete, Button } from '@mui/material'
import styles from './info.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import * as yup from 'yup'
import { Formik, ErrorMessage } from 'formik'
import { allCountries } from 'logic'
import Flag from 'react-world-flags'

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

export const subjects = [
  'Select a subject',
  'Test 1',
  'Test 2',
  'Test 3',
  'Test 4'
]

const validationSchema = yup.object({
  subject: yup
    .string()
    .equals(subjects.slice(1), 'Subject must be one of the options')
    .required(),
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

const Info = (): JSX.Element => {
  const initialValue: FormProps = {
    subject: 'Select a subject',
    name: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
    country: allCountries[62]
  }
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>Submit a ticket</Typography>
      <Box className={styles['form-container']}>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values, actions)
            actions.setSubmitting(false)
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
                          console.log(e.target.value)
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
    </Box>
  )
}

export default Info
