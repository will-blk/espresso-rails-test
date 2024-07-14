import React, { useCallback, useMemo } from "react";
import CustomTable from "../CustomTable";
import { Button } from "@mui/base";
import { TableCell } from "@mui/material";

const List = (props) => {
  const token = document.querySelector('meta[name="csrf-token"]').content
  const { open_statements, completed_statements } = props

  const handleArchive = useCallback(async (event) => {
    try {
      const response = await fetch(`/statements/${event.target.id}/archive.json`,{
         method: "PATCH",
         headers: {
           "X-CSRF-Token": token,
           "Content-Type": "application/json"
         }
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

  const actionCell = useCallback((column, row) => (
    <TableCell key={column.id}>
      <Button onClick={handleArchive} id={row.id} >
        Arquivar
      </Button>
    </TableCell>
  ), [])

  const open_columns = useMemo(() => [
    { id: 'id', label: 'ID' },
    { id: 'merchant', label: 'Empresa', minWidth: 170 },
    { id: 'cost', label: 'Custo', minWidth: 100, format: /^(.*)(\d{2})$/, mask: "R$ $1,$2" },
    { id: 'performed_at', label: 'Gasto em', minWidth: 100 },
    { id: 'transaction_id', label: 'Transacao' },
    { id: 'actions', content: actionCell }
  ], [])

  const completed_columns = useMemo(() => [
    { id: 'id', label: 'ID' },
    { id: 'merchant', label: 'Empresa', minWidth: 170 },
    { id: 'cost', label: 'Custo', minWidth: 100, format: /^(.*)(\d{2})$/, mask: "R$ $1,$2" },
    { id: 'performed_at', label: 'Gasto em', minWidth: 100 },
    { id: 'transaction_id', label: 'Transacao' }
  ], [])

  return(
    <React.Fragment>
      <CustomTable title='Despesas Abertas' columns={open_columns} rows={open_statements}/>
      <CustomTable title='Despesas Fechadas' columns={completed_columns} rows={completed_statements}/>
    </React.Fragment>
  )
}

export default List