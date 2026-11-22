import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useLogin } from "@/hooks/useLogin";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { executeLogin, isLoading, error } = useLogin();

    const submit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await executeLogin(email, password);

        if(!response) {
            return
        }

        return navigate("/");
    }

    return (
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center p-6 sm:p-12">
                <div className="mx-auto w-full max-w-[400px] space-y-6">
                    <div className="space-y-1.5">
                        <h1 className="text-3xl font-bold tracking-tight">Bem vindo de volta!</h1>
                        <p className="text-sm text-zinc-400">
                            Coloque suas credenciais!
                        </p>
                    </div>
                    <form onSubmit={submit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-zinc-200">
                                Email:
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seuEmail@email.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-zinc-200">
                                Senha:
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="123"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <Button
                            className="h-11 w-full"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Entrando ..." : "Entrar"}
                        </Button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </div>
            <div className="hidden lg:block">
                <img 
                    src="https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                    className="h-screen w-full object-cover"
                />
            </div>
        </div>
    )
}