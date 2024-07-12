import React, { useCallback, useState } from "react"
import PropTypes from "prop-types"
import { Button, TextField } from "@mui/material"
import Header from "../Header"

const NewForm = () => {
  const [name, setName] = useState('')
  const [cnpj, setCnpj] = useState('')

  const handleNameChange = useCallback((event) => {
    setName(event.target.value)
  }, [])

  const handleCnpjChange = useCallback((event) => {
    setCnpj(event.target.value)
  }, [])

  const handleSubmit = useCallback(() => {

  }, [])

  return (
    <React.Fragment>
      <Header/>
      <h2>New Company</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Nome" sx={{mb: 3}} fullWidth variant="outlined" required onChange={handleNameChange} value={name}/>
        <TextField id="outlined-basic" label="CNPJ" sx={{mb: 3}} fullWidth variant="outlined" required onChange={handleCnpjChange} value={cnpj}/>
        <Button variant="outlined" size="medium" type="submit">Register</Button>
      </form>
    </React.Fragment>
  )
}

NewForm.propTypes = {
  timestamp: PropTypes.string
};

export default NewForm
