import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
  return (
    <header className="header">
      <div>
        <h1 style={{margin:0}}>HerShield AI+</h1>
        <div style={{color:"#9fb7d8"}}>Made for Women, By Women</div>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/report">Report</Link>
        <Link to="/guardians">Guardians</Link>
        <Link to="/ai">AI</Link>
        <Link to="/team">Team</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}
