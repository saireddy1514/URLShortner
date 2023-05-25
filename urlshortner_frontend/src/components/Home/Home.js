import React from 'react';
import NavbarContent from '../Content/NavbarContent';
import Navbar from '../Navbar/Navbar';
import Notification from '../Notification/Notification';


export default function Home() {
  return (
    <>
        <Notification/>
      <Navbar/>
      <NavbarContent/>
    </>
  )
}
