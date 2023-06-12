import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleSignIn, } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError]=useState('')

    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confarm) {
            return setError('password not mass')
        }
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, photo: data.photoURL }
                        fetch('https://summer-camp-learning-school-surver.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };
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
                    navigate('/');
                })
        })
    }

    return (
        <>
            <section className="pt-28 pb-10  flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
                <div className="md:w-1/3 max-w-sm">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        alt="Sample image" />
                </div>
                <div className="md:w-1/3 max-w-sm">
                    <div className="text-center md:text-left">
                        <label className="mr-1">Register in with</label>
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
                        <input {...register("name", { required: true })} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name='name' type="text" placeholder="Name" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                        <input {...register("photoURL", { required: true })} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name='photoURL' type="text" placeholder="Photo URL" />
                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        <input {...register("email", { required: true })} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" name='email' type="email" placeholder="Email Address" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                        <input {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" name='password' type="password" placeholder="Password" />
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <input {...register("confarm", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" name='confarm' type="password" placeholder="confarm Password" />
                        <div className="mt-4 flex justify-between font-semibold text-sm">
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <p>{error}</p>
                        </div>
                        <div className="text-center md:text-left">
                            <input className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit" value={'Register'}/>
                        </div>
                    </form>
                    <div className=" -mt-12 font-semibold text-sm text-slate-500 text-center md:text-left">
                        Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to='/login' >Login</Link>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Register;