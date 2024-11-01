import React from 'react';
import Navigate from './navigate';
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
