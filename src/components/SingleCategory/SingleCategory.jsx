import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from 'react-icons/fa';


const SingleCategory = () => {
    const crafts=useLoaderData();
    
    console.log(crafts);
    
   
    
    
    return (
        <div>
             

            {
                crafts.map(craft=>
                    <div key={craft._id} className='px-20 my-16'>
                    <div>
                    <div className="card dark:text-black lg:card-side bg-base-100 shadow-xl">
          <figure><img className='lg:h-[400px] md:h-[400px] h-[200px]' src={craft.image} alt="Album"/></figure>
          <div className="lg:p-5 md:p-5 p-3 space-y-3">
            <h2 className="lg:text-3xl md:text-3xl text-2xl  font-bold">{craft.item_name}</h2>
            <p className="text-xl font-semibold">{craft.short_description}</p>
            <p className='font-semibold'>#{craft.subcategory_Name}</p>
            <p className='font-semibold'>Price : {craft.price}</p>
            <div className='flex items-center'>
                
                
                
            </div> 
            
            <div className='flex items-center'>
                
                <p className=''>Processing Time : {craft.processing_time}</p>
                
        
            </div>
            <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center lg:space-y-0 md:space-y-0 space-y-3'>
                
                <p className='bg-green-600 flex items-center text-white rounded-xl mr-3 px-3 py-1'>
                    <FaStar></FaStar>
                    <p className="ml-1">{craft.rating}</p>
                </p>
                
            </div>
            <Link to={`/details/${craft._id}`}><button className='btn text-white bg-blue-950 mr-3 mt-3'>View Details</button></Link>
            
          </div>
        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default SingleCategory;