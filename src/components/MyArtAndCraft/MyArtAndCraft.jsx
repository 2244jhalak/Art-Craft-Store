import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { FaStar,FaPen,FaTrash } from 'react-icons/fa';



const MyArtAndCraft = () => {
    const {user} =useContext(AuthContext);
    const [crafts,setCrafts] =useState([]);
    
    
    useEffect(()=>{
        fetch(`https://b9a10-server-side-2244jhalak.vercel.app/myProduct/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setCrafts(data))
    },[user])
    
   
   
    const handleDelete=id=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a10-server-side-2244jhalak.vercel.app/craft/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  // eslint-disable-next-line react/prop-types
                  const remaining=crafts.filter(craft=>craft._id!==id);
                setCrafts(remaining);
                
            }
            
        })
              
            }
          });

    }

    return (
        <div className="my-10">
            <h2 className="text-3xl lg:px-40 md:px-24 font-semibold">This is my craft list : {crafts.length}</h2>
            
           
            <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:px-40 lg:gap-20">

            {
                crafts.map(craft=>
                    <div key={craft._id}>
            <div className="card dark:text-black md:mb-3 w-full h-[500px] bg-base-100 shadow-xl lg:mb-0 mb-3">
  <figure>
    <img className='h-60 w-3/4 mt-10 rounded-lg' src={craft.image} alt="Shoes" />
    
  </figure>
  <div className="px-12 md:px-24 space-y-4 pt-3">
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
  <div className='text-right lg:mx-4 md:mx-24 my-3'>
  <Link to={`/updateCraft/${craft._id}`}><button className='btn text-white bg-blue-950 mr-3'><FaPen></FaPen></button></Link>
 <button onClick={()=>handleDelete(craft._id)} className='btn text-white bg-green-600'><FaTrash></FaTrash></button>
    
  </div>
</div>
            
        </div>
                )
            }
            </div>    
            
        </div>
    );
          }
export default MyArtAndCraft;

