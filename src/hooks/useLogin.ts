import { useAuth } from "@/context/auth.context"
import { login } from "@/shared/api/user.api";
import { useState } from "react";

export function useLogin() {
    const { refreshUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const executeLogin = async (name: string, password: string): Promise<boolean> => {
        try {
            setIsLoading(true);
            setError("");

            await login(name, password);

            await refreshUser();

            return true;

        } catch {
            setError("Não foi possível realizar o login");

            return false;
            
        } finally {
            setIsLoading(false)
        }
    }

    return {
        executeLogin,
        isLoading,
        error,
    }
}