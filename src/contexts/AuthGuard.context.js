import React from 'react';

export const AuthGuardContext = React.createContext({
    isAuthenticated: false,
    authenticate(cb) {
      AuthGuardContext.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signOut(cb) {
      AuthGuardContext.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  });