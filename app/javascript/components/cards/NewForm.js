import React, { useCallback, useState } from "react"
import { Button, FormControl, TextField } from "@mui/material"

const NewForm = () => {
  const [lastDigits, setlastDigits] = useState('1234')
  const token = document.querySelector('meta[name="csrf-token"]').content

  const handlelastDigitsChange = useCallback((event) => {
    setlastDigits(event.target.value)
  }, [])

  const handleSubmit = useCallback(async () => {
    try {
     const response = await fetch(`/users/${1}/cards.json`,{
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          card: { last4: lastDigits }
        })
      })
      const json = await response.json()

      if(response.status === 200) {
        alert(json.message)
      }
      else {
        alert(json.errors)
      }
    }
    catch(error) {
      console.error(error)
    }
  }, [])

  return (
    <React.Fragment>
      <h2>Novo Cartão</h2>
      <FormControl fullWidth autoComplete="off">
        <TextField id="outlined-basic" label="Last 4" sx={{mb: 3}} variant="outlined" required onChange={handlelastDigitsChange} value={lastDigits}/>
        <Button variant="outlined" size="medium" type="submit" onClick={handleSubmit}>Registrar</Button>
      </FormControl>
    </React.Fragment>
  )
}

export default NewForm
