import { useContext, } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }
    const hendilgooglelogin = ()=>{
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch('https://summer-camp-learning-school-surver.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from);
                })
        })
    }


    return (
        <>
            <section className=" pt-32 h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        alt="Sample image" />
                </div>
                <div className="md:w-1/3 max-w-sm">
                    <div className="text-center md:text-left">
                        <label className="mr-1">Sign in with</label>
                        <button
                            onClick={hendilgooglelogin}
                            type="button"
                            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
                            <FaGoogle></FaGoogle>
                        </button>
                    </div>
                    <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email", { required: true })} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name='email' type="email" placeholder="Email Address" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                        <input {...register("password", { required: true })} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name='password' type="password" placeholder="Password" />
                        {errors.password && <span className="text-red-600">password is required</span>}
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                        </div>
                        <div className="text-center md:text-left">
                            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
                        </div>
                    </form>
                    <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Dont have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to='/register' >Register</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;