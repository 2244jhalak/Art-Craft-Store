import { useLoaderData } from "react-router-dom";


const DisplayCategory = () => {
    const crafts= useLoaderData();
    console.log(crafts);
    return (
        <div>
            <h2>Here is : </h2>
            
        </div>
    );
};

export default DisplayCategory;