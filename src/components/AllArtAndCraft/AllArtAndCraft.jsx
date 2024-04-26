import { Link, useLoaderData } from "react-router-dom";


const AllArtAndCraft = () => {
    const crafts=useLoaderData();
    
    
    return (
        <div>
            <h2>Here are all : {crafts.length}</h2>
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
            <Link to={`/craft/${craft._id}`}><button className="btn">View Details</button></Link>
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