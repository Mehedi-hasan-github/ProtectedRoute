import { Outlet } from "react-router-dom";
import Header from "../Header.jsx/Header";

const Root = () => {
    return (
        <div className="bg-[url(../public/pexels-george-desipris-818252.jpg)] h-screen bg-cover bg-center opacity-100">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;