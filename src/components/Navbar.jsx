import React, { use } from "react";
import { Link, NavLink } from "react-router";
import users from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const {user,logOut} = use(AuthContext);
   const handleLogOut= ()=>{
    console.log("i am trying to log out");
    logOut()
    .then(() => {
      console.log("log out successfully");
    })
    .catch((error) => {
      console.log(error.message);
    });
   }
  return (
    <div className="flex justify-between   items-center">
      <div className="w-1/3">{user && user.email}</div>
      <div className="nav justify-center flex w-1/3 gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex justify-end gap-5 w-1/3">
        <img className="w-12 rounded-full" src={`${user?  user.photoURL: users}`} alt="" />
        {
          user ? (<Link onClick={handleLogOut} to="/auth/login" className="btn btn-primary px-10 ">LogOut</Link>) : (<Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>)
        }
        
      </div>
    </div>
  );
};

export default Navbar;
