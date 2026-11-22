import { useAuth } from "@/context/auth.context";
import { LoadingPage } from "@/views/loading.page";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
    const { isAuthenticated, isLoading } = useAuth();

    if(isLoading) {
        return <LoadingPage />
    }

    if(!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}