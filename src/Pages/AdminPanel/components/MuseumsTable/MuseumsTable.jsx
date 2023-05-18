import React from 'react';
import { useTable } from 'react-table';
import Swal from 'sweetalert2';

import './MuseumsTable.scss';

import crossCircle from '../../../../common/icons/crossСircle.svg';

const MuseumsTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Museum ID',
        accessor: 'id',
      },
      {
        Header: 'Museum Name',
        accessor: 'name',
      },
      {
        Header: 'Museum description',
        accessor: 'desc',
      },
      {
        Header: 'Delete',
        Cell: ({ row }) => (
          <div className="accessWrapper">
            <img
              className="managerTablesButtons"
              onClick={() => handleDelete(row.original.id)}
              src={crossCircle}
              alt="crossCircle"
            />
          </div>
        ),
      },
    ],
    []
  );


  const handleDelete = (id) => {
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'This museum has been deleted.',
      'success'
    )
  }
})
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="tableContainer">
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MuseumsTable;
