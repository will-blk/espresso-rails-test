import React, { useCallback, useState } from "react"
import { Button, FormControl, TextField } from "@mui/material"

const NewForm = () => {
  const [lastDigits, setlastDigits] = useState('')

  const handlelastDigitsChange = useCallback((event) => {
    setlastDigits(event.target.value)
  }, [])

  const handleSubmit = useCallback(() => {

  }, [])

  return (
    <React.Fragment>
      <h2>Novo Cartão</h2>
      <FormControl fullWidth onSubmit={handleSubmit} autoComplete="off">
        <TextField id="outlined-basic" label="Last 4" sx={{mb: 3}} variant="outlined" required onChange={handlelastDigitsChange} value={lastDigits}/>
        <Button variant="outlined" size="medium" type="submit">Registrar</Button>
      </FormControl>
    </React.Fragment>
  )
}

export default NewForm
