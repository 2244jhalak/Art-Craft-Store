import { Link, useLoaderData } from "react-router-dom";


const AllArtAndCraft = () => {
    const crafts=useLoaderData();
    
    
    return (
        <div>
            <h2 className="text-2xl font-semibold">All Art & craft items : {crafts.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Item Name</th>
        <th>Subcategory Name</th>
        <th>Customization</th>
        <th>Stock Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      
      {
        crafts.map(craft=>
            <tr key={craft._id}>
        <th>{craft.item_name}</th>
        <td>{craft.subcategory_Name}</td>
        <td>{craft.customization}</td>
        <td>{craft.stockStatus}</td>
        <td>
        <Link to={`/details/${craft._id}`}><button className='btn text-white bg-blue-950 mr-3'>View Details</button></Link>
        </td>
        
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllArtAndCraft;