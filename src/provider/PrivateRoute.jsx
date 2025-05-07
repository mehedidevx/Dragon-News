import React, { useContext } from "react";
import { Navigate } from "react-router-dom"; // ✅ react-router-dom
import { AuthContext } from "./AuthProvider";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext); // ✅ useContext ব্যবহার করো
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user.email) {
        return children;
    } else {
        return <Navigate state={location.pathname} to="/auth/login" />;
    }
};

export default PrivateRoute;
