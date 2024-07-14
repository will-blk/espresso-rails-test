import React from "react";
import CustomTable from "../CustomTable";

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'merchant', label: 'Empresa', minWidth: 170 },
  { id: 'cost', label: 'Custo', minWidth: 100, format: /^(.*)(\d{2})$/, mask: "R$ $1,$2" },
  { id: 'performed_at', label: 'Gasto em', minWidth: 100 },
  { id: 'transaction_id', label: 'Transacao' }
];

const List = (props) => {
  const { open_statements, completed_statements } = props

  return(
    <React.Fragment>
      <CustomTable title='Despesas Abertas' columns={columns} rows={open_statements}/>
      <CustomTable title='Despesas Fechadas' columns={columns} rows={completed_statements}/>
    </React.Fragment>
  )
}

export default List