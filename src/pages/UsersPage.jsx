import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`/api/users?page=${page}`);
      setUsers(response.data.users);
      setTotalPages(response.data.totalPages);
    };
    fetchUsers();
  }, [page]);

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;