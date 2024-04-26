

import {FaRegUserCircle,FaWindowClose,FaBars } from 'react-icons/fa';

import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from 'react-router-dom';




const Header = () => {
  const [open,setOpen]=useState(false);  
  const {user,logOut}=useContext(AuthContext);
  const logOutUser=()=>{
    logOut();
    
  }
    
        

  return (
    <div className='sticky top-0 z-50'>
      <nav className='container mx-auto'>
      <div className='flex items-center bg-blue-950'>
         
    
         <div onClick={()=>setOpen(!open)} className='container mx-auto p-5 lg:hidden'>
             <p className=''>
                   {open?<FaWindowClose className='text-white'></FaWindowClose>:<FaBars className='text-white'></FaBars>}
             </p>
         </div> 
         <h3 className='text-3xl text-white lg:pl-2 md:pr-2 pr-2 font-semibold'>RusticRopeCrafts</h3>
         <ul className={`${open ?'top-12 block z-50':'-top-72 text-white bg-blue-950'} flex lg:flex-row flex-col px-2 py-2  absolute lg:static items-center rounded-b-lg ms-6 duration-1000 lg:gap-20 bg-blue-950 text-white`}>
        <li className='hover:text-orange-400'><Link to="/">Home</Link></li>
        <li className='hover:text-orange-400'><Link to="/all">All Art & craft Items</Link></li>
        <li className='hover:text-orange-400'><Link to="/addCraft">Add Craft Item</Link></li>
        <li className='hover:text-orange-400'><Link to="/myCraft">My Art&Craft List</Link></li>
        <li>
        {
      user ? 
           <div className="flex items-center lg:flex-row flex-col">
              
              <Link to="/updateProfile">
                  <button className="btn btn-ghost">Update Profile</button>
              </Link>
              <Link to="/userProfile">
                  <button className="btn btn-ghost">User Profile</button>
              </Link>
              
              
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
  

              
                     
                      {
                        user.photoURL?
                        <img className="h-12 w-12 rounded-[50%]" src={user.photoURL} alt="" />
                        :
                        <FaRegUserCircle className='text-2xl'></FaRegUserCircle>
                      }
                      


                     
                     
                     
              </div>
              
              <button onClick={logOutUser} className="btn bg-black text-white font-bold lg:ml-4">Log Out</button>
              </div>

          
             :
            <Link to="/login">
                    <button className="btn btn-primary font-bold ml-4 text-white">Login</button>
            </Link>
    }
    </li>
      
        </ul>
      </div>
    
      
    
    
    </nav>
    </div>

  );
};

export default Header;
