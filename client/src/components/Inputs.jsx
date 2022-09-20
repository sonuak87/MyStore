import { Button } from '@mui/material'
import React from 'react'
const Buttons = (props) => {
  return (
    <Button variant="contained" onClick={props.onClick}>{props.name}</Button>
  )
}

export default Buttons