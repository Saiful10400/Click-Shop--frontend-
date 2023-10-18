import { NavLink } from "react-router-dom";
import logo from "../../../public/image/logo.png"

const Navbar = () => {

  const li=(
    <>
    <li><NavLink to={"/"} className="btn lg:mx-2 leading-loose">Home</NavLink></li>
    <li><NavLink to={"/addProduct"} className="btn lg:mx-2 leading-loose">Add product</NavLink></li>
    <li className=""><NavLink to={"/myCart"} className="btn lg:mx-2 leading-loose">My Cart</NavLink></li>

    </>
  )
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
            {li}
            


      </ul>
    </div>
    <img className="w-24" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
            
            {li}
        
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;