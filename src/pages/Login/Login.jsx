import { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg';
import { FaFacebookF  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';


const Login = () => {

    const { loginUser } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(res => {
            const createdUser = res.user;
            console.log(createdUser);
        })
        .catch(error => {
            const message = error.message;
            console.log(error);
        })
    }
    return (
        <div className="grid gap-10 lg:grid-cols-2 items-center py-10">
            <div className='hidden lg:block'>
                <img className='block' src={loginImg} alt="" />
            </div>
            <div className="rounded-[10px] py-[50px] px-[30px] sm:px-[80px] border border-stone-300">
                <form onSubmit={handleLogin}>
                    <h2 className="text-center text-neutral-700 text-[40px] font-semibold font-['Inter']">Login</h2>
                    <div className="flex flex-col gap-7 mt-6">
                        <div className='flex flex-col gap-2'>
                            <label className="text-neutral-700 text-lg font-semibold font-['Inter']" htmlFor="email">Email</label>
                            <input className="bg-white px-3 py-2 text-lg text-gray-800 outline-none rounded border border-gray-200" type="email" name="email" id="email" placeholder='Your email' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="text-neutral-700 text-lg font-semibold font-['Inter']" htmlFor="password">Password</label>
                            <input className="bg-white px-3 py-2 text-lg text-gray-800 outline-none rounded border border-gray-200" type="password" name="password" id="password" placeholder='Your password' required />
                        </div>
                        <button type="submit" className="text-center py-3 mt-2 hover:bg-black bg-primary  btn rounded-[10px] text-white text-xl font-medium font-['Inter'] leading-none border-none">Sign In</button>
                    </div>
                    <div className='pt-8 flex flex-col gap-5'>
                        <p className="text-center my-3 text-neutral-700 text-lg font-medium font-['Inter']">Or Sign In with</p>
                        <div className='flex justify-center gap-7'>
                            <button className="w-[55px] h-[55px] group/item btn border-none flex justify-center items-center bg-neutral-100 rounded-full" type="button"><FaFacebookF className='text-[#3B5998] h-full group-hover/item:text-white' /></button>
                            <button className="w-[55px] h-[55px] group/item btn border-none flex justify-center items-center bg-neutral-100 rounded-full" type="button"><FcGoogle className='text-[#EB4132] w-full h-full group-hover/item:text-white' /></button>
                        </div>
                        <p className="text-center mt-5 text-neutral-500 text-lg font-normal font-['Inter']">Have an account? <Link className="text-orange-600 text-lg font-semibold font-['Inter']" to="/user/register">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;