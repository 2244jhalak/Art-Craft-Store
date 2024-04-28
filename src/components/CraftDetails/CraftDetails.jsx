import { useLoaderData } from "react-router-dom";
import { FaStar } from 'react-icons/fa';



const CraftDetails = () => {
    const craft=useLoaderData();
    const {image,item_name,subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus,User_Name,User_Email} = craft;
    
    console.log(craft);
    return (
        <div className='px-20 my-16'>
            <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img className='lg:h-[400px] md:h-[400px] h-[200px]' src={image} alt="Album"/></figure>
  <div className="p-5 space-y-3">
    <h2 className="text-3xl font-bold">{item_name}</h2>
    <p className="text-xl font-semibold">{short_description}</p>
    <p className='font-semibold'>#{subcategory_Name}</p>
    <p className='text-lg font-semibold'>User : {User_Name}</p>
    <div className='flex items-center'>
        
        
        <p className=''>Email : {User_Email}</p>
    </div> 
    <div className='flex items-center'>
        
        <p className=''>Customization : {customization}</p>
        

    </div>
    <div className='flex items-center'>
        
        <p className=''>Processing Time : {processing_time}</p>
        

    </div>
    <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center lg:space-y-0 md:space-y-0 space-y-3'>
        <p className='bg-green-600 text-white rounded-xl mr-3 px-3 py-1'>{price}</p>
        <p className='bg-green-600 flex items-center text-white rounded-xl mr-3 px-3 py-1'>
            <FaStar></FaStar>
            <p className="ml-1">{rating}</p>
        </p>
        <p className='bg-green-600 text-white rounded-xl mr-3 px-3 py-1'>{stockStatus}</p>
    </div>
    
  </div>
</div>
            </div>
        </div>
    );
};

export default CraftDetails;