import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="min-h-dvh flex flex-col bg-background">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}