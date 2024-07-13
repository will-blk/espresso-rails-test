import React, { useCallback, useState } from "react"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import Header from "../Header"

const NewForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const handleNameChange = useCallback((event) => {
    setName(event.target.value)
  }, [])

  const handleEmailChange = useCallback((event) => {
    setEmail(event.target.value)
  }, [])

  const handleRoleChange = useCallback((event) => {
    setRole(event.target.value)
  }, [])

  const handleSubmit = useCallback(() => {

  }, [])

  return (
    <React.Fragment>
      <Header/>
      <h2>Novo Usuário</h2>
      <FormControl fullWidth onSubmit={handleSubmit} autoComplete="off">
        <TextField id="outlined-basic" label="Email" sx={{mb: 3}} variant="outlined" required onChange={handleEmailChange} value={email}/>
        <TextField id="outlined-basic" label="Nome" sx={{mb: 3}} variant="outlined" required onChange={handleNameChange} value={name}/>
        <Select labelId="role-label" id="role-select" value={role} onChange={handleRoleChange} required>
          <MenuItem value='employee'>Empregado</MenuItem>
          <MenuItem value='admin'>Admin</MenuItem>
        </Select>
        <Button variant="outlined" size="medium" type="submit">Registrar</Button>
        </FormControl>
    </React.Fragment>
  )
}

export default NewForm
