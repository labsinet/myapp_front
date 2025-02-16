import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import UsersPage from './UsersPage';
import AnalysesPage from './AnalysesPage';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header>
        <nav>
          <Link to="/dashboard/users">Users</Link>
          <Link to="/dashboard/analyses">Analyses</Link>
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
      <aside>
        <ul>
          <li><Link to="/dashboard/users">Users</Link></li>
          <li><Link to="/dashboard/analyses">Analyses</Link></li>
        </ul>
      </aside>
      <main>
        <Routes>
          <Route path="users/*" element={<UsersPage />} />
          <Route path="analyses/*" element={<AnalysesPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;