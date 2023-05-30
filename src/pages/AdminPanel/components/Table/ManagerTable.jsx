import React from 'react';
import { useTable } from 'react-table';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { giveAccess } from '../../../../redux/slices/adminSlice';
import crossCircle from '../../../../common/icons/crossCircle.svg';
import tickCircle from '../../../../common/icons/tickCircle.svg';

import './Table.scss';

const ManagerTable = ({ data }) => {
  const dispatch = useDispatch();
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'user_id',
      },
      {
        Header: 'Email',
        accessor: 'userEmail',
      },
      {
        Header: 'User description',
        accessor: 'userDesc',
      },
      {
        Header: 'Request status',
        accessor: 'status',
        Cell: ({ value }) => (
          <div className="status">
            {value ? <span>Approved</span> : <span>Pending</span>}
          </div>
        ),
      },
      {
        Header: 'Access',
        Cell: ({ row }) => (
          <div className="accessWrapper">
            <img
              className="managerTablesButtons"
              onClick={() => handleAdd(row.original.id)}
              src={tickCircle}
              alt="tickCircle"
            />
            <img
              className="managerTablesButtons"
              onClick={() => handleCancel(row.original.user_id)}
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
        dispatch(giveAccess(id));
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
