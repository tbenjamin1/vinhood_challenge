import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from './Button';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className=" m-5 flex justify-between bg-blue-200 p-3">
      <div>
        <Link to={'/'}>
          <h1 className='mt-2'> <b>VinHood</b> </h1>
        </Link>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome mx-2">
              Welcome, <b>{user.name}</b>!
            </span>
            <Link to={'/'}>
              <Button size="small" primary={true} onClick={onLogout} btnClass='btn' label="Home" />
            </Link>

          </>
        ) : (
          <>

            <Link to={'/results'}>
              <Button size="small" onClick={onLogin} label="Back to filter" />
            </Link>


          </>
        )}
      </div>
    </div>
  </header>
);
