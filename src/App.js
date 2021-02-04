import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import AddUser from './components/AddUser';
import Login from './components/Login';
import Doctor from './components/Doctor'
import Vaccine from './components/Vaccine';
import Appointment from './components/Appointment';
import Unvaccined from './components/Unvaccined';
import Profile from './components/Profile';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Navbar></Navbar>
      <Header />
      <Route path="/">
        <Dashboard />
      </Route>

      <Route path="/vaccine">
        <Vaccine />
      </Route>

      <Route path="/unvaccined">
        <Unvaccined />
      </Route>

      <Route path="/appointment">
        <Appointment />
      </Route>
    
      <Route path="/admin_login">
        <Login />
      </Route>

      <Route path="/doctor">
        <Doctor />
      </Route>
     
      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
      


      <Route path="/adduser">
        <AddUser />
      </Route>
    </div>
  );
};
