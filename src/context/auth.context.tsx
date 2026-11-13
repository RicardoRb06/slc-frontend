import { logout, me } from "@/shared/api/user.api";
import type { User } from "@/shared/types/user";
import { createContext, useEffect, useState, useContext, type ReactNode } from "react";

interface AuthContextData {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    refreshUser: () => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function loadUser() {
        setIsLoading(true);
        const user = await me()
        setUser(user);
        setIsLoading(false);
    }

    async function logoutUser() {
        setIsLoading(true);
        await logout();
        setUser(null);
        setIsLoading(false);
    }

    useEffect(() => {
        loadUser();
    }, []);

    const value: AuthContextData = {
        user,
        isAuthenticated: user !== null,
        isLoading: isLoading,
        refreshUser: loadUser,
        logout: logoutUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }

    return context;
}