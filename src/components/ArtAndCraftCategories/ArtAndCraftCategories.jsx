


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ArtAndCraftCategories = () => {
    
    const [crafts,setCrafts] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/craft')
        .then(res=>res.json())
        .then(data=>setCrafts(data))
    },[])
    
    return (
        <div>
            <h3 className="text-3xl font-semibold text-center">Art & Craft Categories</h3>
           
                 
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    crafts.map(craft=>
                        <Link to={`/category/${craft.subcategory_Name}`} key={craft._id}>
                        <div className="card dark:text-black w-full h-[300px] bg-base-100 shadow-xl">
  <figure><img className="h-72 w-full" src={craft.image} alt="Shoes" /></figure>
  <div className="card-body flex items-center">
    <h2 className="card-title">{craft.subcategory_Name}</h2>
    
  </div>
</div></Link>
                    
                    )
                }
                
                        
                    
                   
            </div>
            
           
        </div>
    );
};

export default ArtAndCraftCategories;