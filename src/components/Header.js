import React from "react";
import './styles/Header.css';
import { GrClose } from 'react-icons/gr';
import { MdMenuBook } from 'react-icons/md';
import { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      
      <nav>
      <center>  <ul className="list">
          <div className="closed">
            <GrClose onClick={showMenu} />
          </div>
          <li>
            <Link to="#home" className="a" smooth>Home</Link>
          </li>
          <li>
            <Link to="#about" className="a" smooth>About</Link>
          </li>
          <li>
            <Link to="#contact" className="a" smooth >Contact</Link>
          </li>
          <li>
            <Link to="https://drive.google.com/file/d/1Wt8hhwe_u7LiDMxJyzCAhJMNme6-VyJs/view?usp=sharing" className="a" target="_blank">Resume</Link>
          </li>
        </ul> </center>
      </nav> 
      <div className="changer">
        <MdMenuBook className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
