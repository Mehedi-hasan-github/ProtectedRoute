import { useContext, useState } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    // const [name, setName] = useState('');
    const navigate = useNavigate();
    const { user, createUser, loginWithGoogle } = useContext(AuthContext);

    // login with gmail account//
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                navigate('/')
                console.log(user);
            }).catch(error => {
                console.log(error.code);
            })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset();
        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate('/')
                console.log(user);

            }).catch((error) => {
                console.log(error.code);
            })

    }
    console.log(user);
    return (
        <div className="flex justify-center items-center">
            <div className="card shrink-0 w-full max-w-sm  bg-base-100">
                <h2 className="text-3xl font-bold text-center -mb-6 pt-2 text-[#f28123]">Please Register !</h2>

                <form onSubmit={handleRegister} className="card-body ">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <p className=" ">Already have an account ?</p><Link to={'/login'} className="link link-hover text-[#f28123]">Please Ligin !</Link>
                    </label>
                    <span className=""></span>
                    <button className="btn btn-primary">Login</button>
                    <span className="flex justify-center items-center gap-8 -mb-6">
                        <div className="cursor-pointer text-2xl text-[crimson] hover:bg-slate-400 rounded-full p-3" onClick={handleGoogleLogin}>
                            <FaGoogle />
                        </div>
                        <div className="cursor-pointer text-2xl text-[#3b3baa] hover:bg-slate-400 rounded-full p-3">
                            <FaFacebookF />
                        </div>
                        <div className="cursor-pointer text-2xl text-[black] hover:bg-slate-400 rounded-full p-3">
                            <FaGithub />
                        </div>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Register;