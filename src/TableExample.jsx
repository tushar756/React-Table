import React, { useState } from 'react';
import { useTable } from 'react-table';
import './table.css';

const TableExample = () => {
  const data = React.useMemo(
    () => [
      { id: 1, name: 'John Doe', age: 25, city: 'New York' },
      { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco' },
      { id: 3, name: 'Bob Johnson', age: 28, city: 'Los Angeles' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
      { Header: 'City', accessor: 'city' },
    ],
    []
  );

  const [selectedRow, setSelectedRow] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows: tableRows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    // Additional options, hooks, etc.
  );

  const handleRowClick = (row) => {
    alert(row.id)
    setSelectedRow(row.id === selectedRow ? null : row.id);
  };

  return (
    <>
      <h1 className='sex'>sdf</h1>
      <table {...getTableProps()}>
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
          {tableRows.map((row) => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                onClick={() => handleRowClick(row)}
                className={row.id === selectedRow ? 'selected-row' : ''}
              >
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableExample;
