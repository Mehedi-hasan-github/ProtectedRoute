import { NavLink } from "react-router-dom";
import { FaCartShopping, FaUser, FaUserCheck, FaUserPlus } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import './header.css'

const Header = () => {
    return (
        <div className="lg:flex lg:justify-between lg:items-center px-4 bg-[#051922] py-4 mb-10">
            <div>
                <h1 className="text-5xl font-bold text-[#f28123]">Protected</h1>
            </div>
            <div className="text-white text-[20px] font-semibold flex gap-12 ">
                <NavLink to={'./'}>Home</NavLink>
                <NavLink to={'./shop'}>Shop</NavLink>
                <NavLink to={'./cart'}>Cart</NavLink>
                <NavLink to={'./login'}>Login</NavLink>
                <NavLink to={'./register'}>Register</NavLink>
            </div>
            <div className=" text-4xl flex gap-8 ">
                <FaUserPlus className="text-white hover:text-[#f28123] cursor-pointer" />
                <MdShoppingCart className="text-white hover:text-[#f28123] cursor-pointer" />
                {/* <FaUserCheck className="text-white hover:text-[#f28123]" /> */}
            </div>

        </div>
    );
};

export default Header;