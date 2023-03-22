import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import classes from "./DataTable.module.css";
import "./DataTable.scss";
import arrow from "../../../src/icons/arrow-up-short.svg";
import * as helpers from "./helpers";

function DataTable({ columns, data, sorting=false }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, 
      useSortBy//for sorting columns
      );

  return (
    <table
    className="table table-hover"
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}

               {sorting && <img
                  src={arrow}
                  alt="arrow-up"
                  className={`arrow-head ${column.isSortedDesc}`}
                />}
              </th>
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
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render && helpers.formatData({ cell })}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
