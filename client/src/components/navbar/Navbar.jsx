import React, { useState } from "react";
import "./Navbar.css" ;
const Navbar = () => {
    const [loc,setloc] = useState("") ; 
  return (
    <div className="navcontainer">
      <div className="navtitle">
        <h1 >CARPARKER</h1>
      </div>
      <div className="dropdown">
        <form>
          <label for="parkinglots" className="dropdowntext">choose a parking area</label>
          <select name="parkinglots" id="" className="dropdownmenu">
            <option value="p1">parking 1</option>
            <option value="p2">parking 2</option>
            <option value="p3">parking 3</option>
            <option value="p4">parknig 4</option>
          </select>
        </form>
      </div>
      <div className="searchdiv">
        <form className="searchdivform">
          <input
            name="searchloc"
            className="serachinput"
            type="text"
            placeholder="enter location"
            onChange={(e) => setloc(e.target.value)}
          />
          <button type="submit" className="searchbtn">search</button>
        </form>
      </div>
      <div className="navbutton">
        <button className="button loginbtn">Login</button>
        <button className="button registerbtn">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
