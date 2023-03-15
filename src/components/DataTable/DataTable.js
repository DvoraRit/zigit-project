import React,{useEffect} from 'react'
import {useTable} from 'react-table';
import classes from './DataTable.module.css';
import './DataTable.scss';
import * as helpers from './helpers';
// import {help}
function DataTable({columns, data}) {
    const tableInstance = useTable({columns, data});
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <table className={classes.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                className={`row-raiting ${row.original.rating}`}
              {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>
                    {cell.render && helpers.formatData({cell})}
                    </td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}

export default DataTable