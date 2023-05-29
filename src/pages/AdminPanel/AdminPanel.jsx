import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './AdminPanel.scss';

import ManagerTable from './components/Table/ManagerTable';
import MuseumsTable from './components/Table/MuseumsTable';
import fakeManagerData from './MOCK_MANAGER.json';
import { fetchAllMuseums } from '../../redux/slices/museumSlice';
import { fetchAllManagerRequests } from '../../redux/slices/adminSlice';

const AdminPanel = () => {
  const dispatch = useDispatch();

  const museums = useSelector(({ museums }) => museums.allMuseums);
  const managerRequests = useSelector(({ admin }) => admin.managerRequests);

  useEffect(() => {
    dispatch(fetchAllMuseums());
    dispatch(fetchAllManagerRequests());
  }, [dispatch]);

  const managerData = React.useMemo(() => fakeManagerData, []);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <div className="adminTitle">Manager access</div>
        <ManagerTable data={managerRequests} />
        {/* <div className="adminTitle">Museum control</div>
        <MuseumsTable data={museums} /> */}
      </div>
    </div>
  );
};

export default AdminPanel;
