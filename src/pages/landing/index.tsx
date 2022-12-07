import { Button, TextField } from '@mui/material'
import clsx from 'clsx'
import luka from 'styles/luka.module.css'

const Landing = (): JSX.Element => {
  return (
    <div className={clsx(luka['flex-column'], luka.prueba)}>
      <Button variant="contained">{'Hello World'}</Button>
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  )
}

export default Landing
