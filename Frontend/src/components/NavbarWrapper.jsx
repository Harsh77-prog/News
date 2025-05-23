// NavbarWrapper.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const NavbarWrapper = () => {
  const navigate = useNavigate();
  return <Navbar navigate={navigate} />;
};

export default NavbarWrapper;
