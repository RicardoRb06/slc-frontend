import { useAuth } from "@/context/auth.context";
import { NavLink } from "react-router-dom";
import { WordMark } from "../ui/word-mark";
import { AdminHeader } from "./header.admin";
import { HeaderDeafault } from "./header.default";

export function HeaderSelector() {
    const { user, isAuthenticated } = useAuth();

    return (
        <div className="sticky top-0 z-50 w-full border-b bg-background">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4 px-4 md:px-8">
                <NavLink
                    to="/"
                    className="flex shrink-0 items-center gap-2"
                    aria-label="SLC - Início"
                >
                    <WordMark />
                </NavLink>
                
                <div className="flex items-center gap-6">
                    {!isAuthenticated && <HeaderDeafault />} 
                    {( isAuthenticated && !user?.isAdmin ) && <AdminHeader />}
                    {( isAuthenticated && user?.isAdmin ) && <AdminHeader />}
                </div>
            </div>
        </div>
    )
}