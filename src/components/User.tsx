import React from 'react';

interface UserProps {
  user: {
    ID: number;
    FirstNameLastName: string;
    EmailAddress: string;
    JobTitle: string;
    Phone: string;
    Company: string;
    Email: string;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="user">
      <h3>{user.FirstNameLastName}</h3>
      <p>{user.JobTitle}</p>
      <p>{user.EmailAddress}</p>
      <p>{user.Phone}</p>
      <p>{user.Company}</p>
      <p>{user.Email}</p>
      <p>ID: {user.ID}</p>
    </div>
  );
};

export default User;
