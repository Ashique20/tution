import React from "react";
import logo from '../Assets/Component 40.png'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 px-20">
        <div className="flex-1">
          <Link to='/'><a className="btn btn-ghost "><img src={logo} alt="" /></a></Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal text-[#3A3740] text-xl  ">
            <li><Link to='/'><a>Home</a></Link></li>
            <li><Link to='flashcard'><a>Flashcard</a></Link></li>
            <li><a>Contact</a></li>
            <li><a>FAQ</a></li>
            <button className="btn btn rounded-[24px] w-24 bg-gradient-to-r from-[#164EC0] to-[#06286E] text-[white] ">Login</button>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;