import React from 'react';
import Navigate from './Navigate';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigate />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
