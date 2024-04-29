
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdateCraftItem = () => {
    
    const craft=useLoaderData();
    console.log(craft);
    const {_id,image,item_name,subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus,User_Name,User_Email} = craft;
    const handleUpdate = e =>{
        e.preventDefault();
        const form=e.target;
        const image=form.image.value;
        const item_name=form.item_name.value;
        const subcategory_Name=form.subcategory_Name.value;
        const short_description=form.short_description.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const customization=form.customization.value;
        const processing_time=form.processing_time.value;
        const stockStatus=form.stockStatus.value;
        const User_Name=form.User_Name.value;
        const User_Email=form.User_Email.value;
        const craft={image,item_name,subcategory_Name,short_description,price,rating,customization,processing_time,stockStatus,User_Name,User_Email};
        console.log(craft);
        fetch(`http://localhost:5000/updateCraft/${_id}`,{   
            method: "PUT",
            headers: {
                   "Content-Type": "application/json",
            },
            body: JSON.stringify(craft),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
              Swal.fire({
                  title: 'Succeess!',
                  text: 'Successfully Updated',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
            }
              
             
             
          })
    }
    
    return (
        <div>
            <h2 className='mt-5 text-center font-bold text-3xl'>Update Art & Craft Items</h2>
            <form onSubmit={handleUpdate}>
                <div className="flex flex-col gap-x-7 gap-y-7 lg:p-20 md:p-10 p-5">
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={image} type="text" name="image" placeholder="image" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={item_name} type="text" name="item_name" placeholder="item_name" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={subcategory_Name} type="text" name="subcategory_Name" placeholder="subcategory_Name" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={short_description} type="text" name="short_description" placeholder="short_description" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={price} type="text" name="price" placeholder="price" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={rating} type="text" name="rating" placeholder="rating" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={customization} type="text" name="customization" placeholder="customization" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={processing_time} type="text" name="processing_time" placeholder="processing_time" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" defaultValue={stockStatus} type="text" name="stockStatus" placeholder="stockStatus" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black"  defaultValue={User_Name} type="text" name="User_Name" placeholder="User_Name" id="" />
                    <input className="h-10 bg-gray-100 rounded col-span-2 pl-5 text-black" defaultValue={User_Email} type="email" name="User_Email" placeholder="User_Email" id="" />
                    <input className="bg-green-600 text-white font-semibold rounded col-span-2 pl-5 cursor-pointer h-10" type="submit" value="Add" />
                </div>
            </form>
            
        </div>
    );
};

export default UpdateCraftItem;