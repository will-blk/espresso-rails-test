import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'merchant', label: 'Empresa', minWidth: 170 },
  { id: 'cost', label: 'Custo', minWidth: 100, format: /^(.*)(\d{2})$/, mask: "R$ $1,$2" },
  { id: 'performed_at', label: 'Gasto em', minWidth: 100 },
  { id: 'transaction_id', label: 'Transacao' }
];

const List = (props) => {
  const { statements } = props

  return(
    <React.Fragment>
      <h2>Despesas</h2>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {statements
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        var value = row[column.id].toString()
                        return (
                          <TableCell key={column.id} align={column.align}>
                            { column.mask ? value.replace(column.format, column.mask) : value }
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  )
}

export default List