import { useEffect, useState } from "react";
import { Bounce, Fade } from 'react-awesome-reveal';
import { Link } from "react-router-dom";




const Crafts = () => {
    const [crafts,setCrafts] = useState([]);
    useEffect(()=>{
        fetch('https://b9a10-server-side-2244jhalak.vercel.app/craft')
        .then(res=>res.json())
        .then(data=>setCrafts(data))
    },[])

    return (
        <div>
            <h3 className="text-center text-3xl font-semibold">Our Craft Items</h3>
            <Bounce triggerOnce>
        <Fade triggerOnce>
          <div className="bouncing-fading-div">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  px-10 gap-5">

{
    crafts.map(craft=>
        <div key={craft._id}>
<div className='card w-full dark:text-black h-[450px] bg-base-100 shadow-xl lg:mb-0 md:mb-0 mb-3'>
<figure>
<img className='h-60 w-3/4 mt-10 rounded-lg' src={craft.image} alt="Shoes" />

</figure>
<div className="px-12 space-y-4 pt-3">
<h2 className="card-title">{craft.item_name}</h2>
<p className=''>Stock Status : {craft.stockStatus}</p>






</div>
<div className='text-right mx-4 my-3'>
<Link to={`/details/${craft._id}`}><button className='btn text-white bg-blue-950 mr-3'>View Details</button></Link>

</div>
</div>

</div>
    )
}
</div>
            
          </div>
        </Fade>
      </Bounce>
            
          
            
          </div>
       
            

            
        
    );
};

export default Crafts;