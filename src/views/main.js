import React from 'react';
//import logo from './logo.svg';
import SideBar from '../components/sideBar'
import MyComponent from '../components/maps'
import '../App.css';

function Main() {
  return (
    <div className="App">
      <SideBar />
     <MyComponent />
    </div>
  );
}

export default Main;
