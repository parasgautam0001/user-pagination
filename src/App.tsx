import React, { useEffect, useState } from 'react';
import User from './components/User';
import './App.css';

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchUsers = async (page: number) => {
      try {
        setLoader(true);
        const response = await fetch(`https://give-me-users-forever.vercel.app/api/users/${page}/next`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.users);
        setLoader(false);
      } catch (error) {
        console.error('Error :', error);
      }
    };

    fetchUsers(currentPage);
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="app">
      <h1>User Pagination</h1>
      <div className="user-list">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div className='page-number'>{currentPage}</div>
      {
        loader && <div className="loader-container">
        <div className="loader"></div>
      </div>
      }
    </div>
  );
};

export default App;
