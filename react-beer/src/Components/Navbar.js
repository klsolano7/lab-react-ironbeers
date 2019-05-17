import React from 'react';
import { Router, Link, NavLink } from 'react-router-dom';

const navbar = () => {
  return (
    <div className="topnav" style={{overflow: 'hidden', backgroundColor: 'black'}}>
      
        <NavLink exact to='/' activeClassName="selected" className="topNavLinks">Home</NavLink>
        <NavLink  to='/allbeers' activeClassName="selected" className="topNavLinks">All Beers</NavLink>
        <NavLink  to='/randombeer' activeClassName="selected" className="topNavLinks">Random Beer</NavLink>
        <NavLink to='/newbeer' activeClassName="selected" className="topNavLinks">New Beer</NavLink>

    
      
    </div>
  )
}

export default navbar;



// body {
//   margin: 0;
//   font-family: Arial, Helvetica, sans-serif;
// }

// .topnav {
//   overflow: hidden;
//   background-color: #333;
// }

// .topnav a {
//   float: left;
//   color: #f2f2f2;
//   text-align: center;
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
// }

// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// .topnav a.active {
//   background-color: #4CAF50;
//   color: white;
// }
