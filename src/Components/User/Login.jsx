import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const navigate = useNavigate()
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [user, setUser] = useState('');
    const { loginUser, loginWithGoogle } = useContext(AuthContext);


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

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        // setEmail(email);
        const password = e.target.password.value;
        // setPassword(password);
        e.target.reset()
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            }).catch(error => {
                console.log(error);
            })
    }




    return (
        <div className="flex justify-center items-center">
            <div className="card shrink-0 w-full max-w-sm  bg-base-100">
                <h2 className="text-3xl font-bold text-center -mb-6 pt-2 text-[#f28123]">Please Login !</h2>

                <form onSubmit={handleLogin} className="card-body ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label flex-col items-start">
                        <a className="label-text-alt link link-hover text-[#f18123]">Forgot password?</a>
                        <p>Have not account?<Link to={'/register'} className="text-[#f18123]"> Please Register !</Link></p>
                    </label>
                    <span className=""></span>
                    <button className="btn btn-primary">Login</button>


                    {/* ....login with different social and google..... */}
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
    )
};

export default Login;