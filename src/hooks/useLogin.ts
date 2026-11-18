import { useAuth } from "@/context/auth.context"
import { useState } from "react";

export function useLogin() {
    const { refreshUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const login = async (name: string, password: string) => {
        try {
            setIsLoading(true);
            setError("");

            await login(name, password);

            await refreshUser();

        } catch {
            setError("Não foi possível realizar o login");

        } finally {
            setIsLoading(false)
        }
    }

    return {
        login,
        isLoading,
        error,
    }
}