import React from 'react';
import Navigate from './Navigate';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigate />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
