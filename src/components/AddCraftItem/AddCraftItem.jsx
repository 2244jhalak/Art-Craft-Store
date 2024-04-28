import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../provider/AuthProvider';

const AddCraftItem = () => {
    const {user}=useContext(AuthContext);
    const email=user.email;
    const handleSubmit = e =>{
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
        fetch('http://localhost:5000/craft',{
            method: "POST",
            headers: {
                   "Content-Type": "application/json",
            },
            body: JSON.stringify(craft),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title: 'Succeess!',
                    text: 'Successfully added',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data)
        })
    }
    return (
        <div>
            <h2>Add something</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-x-7 gap-y-7 p-20">
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="image" placeholder="image" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="item_name" placeholder="item_name" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="subcategory_Name" placeholder="subcategory_Name" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="short_description" placeholder="short_description" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="price" placeholder="price" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="rating" placeholder="rating" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="customization" placeholder="customization" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="processing_time" placeholder="processing_time" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="stockStatus" placeholder="stockStatus" id="" />
                    <input className="h-10 bg-gray-100 rounded pl-5 text-black" type="text" name="User_Name" placeholder="User_Name" id="" />
                    <input className="h-10 bg-gray-100 rounded col-span-2 pl-5 text-black" defaultValue={email} type="email" name="User_Email" placeholder="User_Email" id="" />
                    <input className="bg-green-600 text-white font-semibold rounded col-span-2 pl-5 cursor-pointer h-10" type="submit" value="Add" />
                </div>
            </form>
            
        </div>
    );
};

export default AddCraftItem;