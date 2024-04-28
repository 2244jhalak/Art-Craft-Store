/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ArtAndCraftCategories = ({craft}) => {
    
    const [crafts,setCrafts] =useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/craft/${craft.subcategory_Name}`)
        .then(res=>res.json())
        .then(data=>setCrafts(data))
    },[craft])
    
    return (
        <div>
            <h3 className="text-3xl font-semibold text-center">Art & Craft Categories</h3>
           
                 
            <div className="grid grid-cols-3 gap-5">
                
                        <Link to={`/craft/${crafts.subcategory_Name}`} >
                        <div className="card w-full h-[300px] bg-base-100 shadow-xl">
  <figure><img className="h-72 w-full" src={crafts.image} alt="Shoes" /></figure>
  <div className="card-body flex items-center">
    <h2 className="card-title">{crafts.subcategory_Name}</h2>
    
  </div>
</div></Link>
                    
                   
            </div>
            
           
        </div>
    );
};

export default ArtAndCraftCategories;