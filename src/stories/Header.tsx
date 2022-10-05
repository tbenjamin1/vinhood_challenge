import React from 'react';

import { Button } from './Button';
import './header.css';

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
    <div className="wrapper m-5">
      <div>
       
        <h1>VinHood</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" primary={true}  onClick={onLogout} btnClass='btn' label="Back Home" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Back Home" />
            
          </>
        )}
      </div>
    </div>
  </header>
);
