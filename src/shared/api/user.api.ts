import { api } from "@/config/axios";
import type { User } from "../types/user";

export async function register(user: User) {
    //api.post("");
}

export async function login(email: string, password: string) {
    const response = await api.get("/users");
    let localStorageUser = null;

    response.data.map((user: User) => {
        if(user.email === email) {
            localStorageUser = user;
        }
    });

    if(localStorageUser === null) {
        throw new Error;
    }

    localStorage.setItem(import.meta.env.VITE_LOCALSTORAGE_USER, JSON.stringify(localStorageUser));
}

export async function me(): Promise<User | null> {
    const user = localStorage.getItem(import.meta.env.VITE_LOCALSTORAGE_USER);

    if(user) {
        return JSON.parse(user) as User;
    }

    return null;
}

export async function logout() {
    localStorage.removeItem(import.meta.env.VITE_LOCALSTORAGE_USER);
}