import { Footer } from "@/components/layout/footer";
import { Outlet } from "react-router-dom";
import { HeaderSelector } from "./headerSelector";

export function Layout() {
    return (
        <div className="min-h-dvh flex flex-col bg-background">
            <HeaderSelector />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}