import React, { use, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState("");
    const {signIn} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // 
        // console.log(email, password);
        // Add your login logic here, e.g., call an API to authenticate the user
        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
           navigate(`${location.state? location.state : "/"}`); // Redirect to the home page after successful login
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
        // Redirect to the home page after successful login
        // <Navigate to="/" replace={true} />;
    }
    return (
        <div className="flex justify-center items-center mt-40">
        
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
            <div className="card-body">
            <h1 className="text-2xl text-center font-semibold">Login Your Account</h1>
              <form onSubmit={handleLogin} className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input required name='email' type="email" className="input" placeholder="Email" />
                {/* Password */}
                <label className="label">Password</label>
                <input required name='password' type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                {
                  error && <p className='text-red-600 text-sm'>{error}</p>
                }
                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                <p className='text-center mt-6'>Dont’t Have An Account ? <Link className='text-blue-600' to="/auth/register">Register</Link></p>
              </form>
            </div>
          </div>
        </div>

    );
};

export default Login;
