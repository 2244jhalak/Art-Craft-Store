import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";


const Root = () => {
    return (
        <div className="font-roboto">
            <div className="container mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Root;