import React from 'react';
import { useTable } from 'react-table';
import Swal from 'sweetalert2';

import './ManagerTable.scss';

import crossCircle from '../../../../common/icons/crossСircle.svg';
import tickСircle from '../../../../common/icons/tickСircle.svg';

const ManagerTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Email',
        accessor: 'user_email',
      },
      {
        Header: 'User description',
        accessor: 'user_desc',
      },
      {
        Header: 'Access',
        Cell: ({ row }) => (
          <div className="accessWrapper">
            <img
              className="managerTablesButtons"
              onClick={() => handleAdd(row.original.id)}
              src={tickСircle}
              alt="tickСircle"
            />
            <img
              className="managerTablesButtons"
              onClick={() => handleCancel(row.original.id)}
              src={crossCircle}
              alt="crossCircle"
            />
          </div>
        ),
      },
    ],
    []
  );

  const handleAdd = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, confirm it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Confirmed!', 'The request has been confirmed.', 'success');
      }
    });

  };

  const handleCancel = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reject it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Rejected!', 'The application was rejected.', 'success');
      }
    });
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

export default ManagerTable;
