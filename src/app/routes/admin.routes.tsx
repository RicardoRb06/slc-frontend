import { useAuth } from "@/context/auth.context";
import { Navigate, Outlet } from "react-router-dom";

export function AdminRoutes() {
    const { user } = useAuth();

    if(!user){
        return <Navigate to="/login" />
    }

    if(!user.isAdmin) {
        return <Navigate to="/unauthorized" />
    }

    return <Outlet />
}