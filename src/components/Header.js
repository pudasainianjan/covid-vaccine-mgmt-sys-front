import React, { useState, useEffect } from 'react';
import Link from './Link';

const Header = () => {
  
  return (
    
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Dashboard
      </Link>
      <Link href="/vaccine" className="item">
        Vaccine Info.
      </Link>
      <Link href="/unvaccined" className="item">
        Unvaccined Users
      </Link>
      <Link href="/doctor" className="item">
        Doctor
      </Link>
      <Link href="/appointment" className="item">
        Appointment
      </Link>
      <Link href="/admin_login" className="item">
        Admin Login
      </Link>

     
  <div class="right menu">
    
    <a class="ui item">
      Logout
    <i style={{marginLeft:'20px'}}><img src="logout.png" alt="" width="20" height="20"/></i>

    </a>
    
  </div>
    </div>

  );
};

export default Header;
