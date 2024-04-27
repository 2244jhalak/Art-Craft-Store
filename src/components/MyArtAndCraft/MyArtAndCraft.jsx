import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar,FaPen,FaTrash } from 'react-icons/fa';



const MyArtAndCraft = () => {
    const {user} =useContext(AuthContext);
    const [crafts,setCrafts] =useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/craft/${user.email}`)
        .then(res=>res.json())
        .then(data=>setCrafts(data))
    },[user])
    return (
        <div className="my-10">
            <h2>This is my world {crafts.length}</h2>
            <div className="grid grid-cols-2 px-40 gap-20">

            {
                crafts.map(craft=>
                    <div key={craft._id}>
            <div className="card w-full h-[500px] bg-base-100 shadow-xl lg:mb-0 md:mb-0 mb-3">
  <figure>
    <img className='h-60 w-3/4 mt-10 rounded-lg' src={craft.image} alt="Shoes" />
    
  </figure>
  <div className="px-12 space-y-4 pt-3">
    <h2 className="card-title">{craft.item_name}</h2>
    
   
    
    <div className='flex items-center justify-between'>
        <p className='font-semibold'>Price : {craft.price}</p>
        <div className="flex items-center">
        <FaStar></FaStar>
        <p className='ml-1'>{craft.rating}</p>

        </div>   
    </div> 
    
        <p className=''>Stock Status : {craft.stockStatus}</p>
        
        <p className=''>Customization : {craft.customization}</p>

          
  
    
         
  </div>
  <div className='text-right mx-4 my-3'>
  <Link to={`/details/${craft._id}`}><button className='btn text-white bg-blue-950 mr-3'><FaPen></FaPen></button></Link>
  <Link to={`/details/${craft._id}`}><button className='btn text-white bg-green-600'><FaTrash></FaTrash></button></Link>
    
  </div>
</div>
            
        </div>
                )
            }
            </div>    
            
        </div>
    );
};

export default MyArtAndCraft;