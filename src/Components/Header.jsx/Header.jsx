import { Link, NavLink } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import './header.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { PiSignOutBold } from "react-icons/pi";


const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    return (
        <div className="lg:flex lg:justify-between lg:items-center px-4 bg-[#051922] py-4 mb-10">
            <div>
                <h1 className="text-5xl font-bold text-[#f28123]">Protected</h1>
            </div>
            <div className="text-white text-[20px] font-semibold flex gap-12 ">
                <NavLink to={'./'}>Home</NavLink>
                <NavLink to={'./shop'}>Shop</NavLink>
                <NavLink to={'./cart'}>Cart</NavLink>
                {
                    user ?
                        <span className=" hidden">
                            <NavLink to={'./login'}>Login</NavLink>
                            <NavLink to={'./register'}>Register</NavLink>
                        </span> :
                        <>
                            <NavLink to={'./login'}>Login</NavLink>
                            <NavLink to={'./register'}>Register</NavLink>
                        </>
                }
            </div>
            <div className=" text-4xl flex gap-8 ">
                {
                    user && <span className="text-white text-[18px]">{user.email}</span>
                }
                {
                    user ?
                        <span className="tooltip tooltip-left" data-tip="Logout">
                            < PiSignOutBold onClick={logoutUser} className="text-white hover:text-[#f28123] cursor-pointer " ></PiSignOutBold>
                        </span>
                        :
                        <Link to={'login'} className="tooltip tooltip-left" data-tip="Login">
                            <FaUserPlus className="text-white hover:text-[#f28123] cursor-pointer" />
                        </Link>

                }
                <MdShoppingCart className="text-white hover:text-[#f28123] cursor-pointer" />
            </div>

        </div>
    );
};

export default Header;