import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, setUser,updateUserProfile } = use(AuthContext);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5 || name.length > 20) {
      setError("Name must be between 5 and 20 characters long");
    }

    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoUrl, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({...user, displayName: name, photoURL: photoUrl});
            navigate("/");
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setUser(user)
          });
       
        toast.success("User Created Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-3">
        <div className="card-body">
          <h1 className="text-2xl text-center font-semibold">
            Login Your Account
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            {/* Photo Url */}
            <label className="label">Photo URL</label>
            <input
              required
              name="photoUrl"
              type="text"
              className="input"
              placeholder="Photo URL"
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              required
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="text-center mt-6">
              Already Have An Account ?{" "}
              <Link className="text-blue-600" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
