import React from 'react';

import './AdminPanel.scss';

import ManagerTable from './components/ManagerTable/ManagerTable';
import MuseumsTable from './components/MuseumsTable/MuseumsTable';
import fakeManagerData from './MOCK_MANAGER.json';
import fakeMuseumsData from './MOCK_MUSEUM.json';

const AdminPanel = () => {
  const managerData = React.useMemo(() => fakeManagerData, []);
  const museumsData = React.useMemo(() => fakeMuseumsData, []);

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <div className="adminTitle">Manager access</div>
        <ManagerTable data={managerData} />
        <div className="adminTitle">Museum control</div>
        <MuseumsTable data = {museumsData} />
      </div>
    </div>
  );
};

export default AdminPanel;
