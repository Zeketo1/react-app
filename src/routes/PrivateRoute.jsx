import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoute = () => {
    const navigate = useNavigate();
    const isAdmin = true;

    if (!isAdmin) {
        return navigate("/login");
    }
    return <Outlet />;
};

export default PrivateRoute;
