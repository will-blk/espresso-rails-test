import React, { useCallback, useState } from "react"
import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material"

const NewForm = (props) => {
  const { company } = props
  const token = document.querySelector('meta[name="csrf-token"]').content

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

  const handleSubmit = useCallback(async () => {
    try {
     const response = await fetch(`/companies/${company.id}/users`,{
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            name: name,
            email: email,
            role: role
          }
        })
      })
      const json = await response.json()

      if(response.status === 201) {
        alert(json.message)
        setName('')
        setEmail('')
        setRole('')
      }
      else {
        alert(json.errors)
      }
    }
    catch(error) {
      console.error(error)
    }
  }, [name, email, role, company, token])

  return (
    <React.Fragment>
      <h2>Novo Usuário</h2>
      <FormControl fullWidth autoComplete="off">
        <TextField id="outlined-basic" label="Email" sx={{mb: 3}} variant="outlined" required onChange={handleEmailChange} value={email}/>
        <TextField id="outlined-basic" label="Nome" sx={{mb: 3}} variant="outlined" required onChange={handleNameChange} value={name}/>
        <Select labelId="role-label" id="role-select" value={role} onChange={handleRoleChange} required>
          <MenuItem value='employee'>Empregado</MenuItem>
          <MenuItem value='admin'>Admin</MenuItem>
        </Select>
        <Button variant="outlined" size="medium" onClick={handleSubmit}>Registrar</Button>
      </FormControl>
    </React.Fragment>
  )
}

export default NewForm
