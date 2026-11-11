import type { User } from "../types/user";

export async function login(user: User) {
    localStorage.setItem(import.meta.env.VITE_LOCALSTORAGE_USER, JSON.stringify(user));
}

export async function me(): Promise<User | null> {
    const user = localStorage.getItem(import.meta.env.VITE_LOCALSTORAGE_USER);

    if(!user) {
        return null;
    }

    try {
        return JSON.parse(user) as User;
    } catch {
        return null;
    }
}

export async function logout() {
    localStorage.removeItem(import.meta.env.VITE_LOCALSTORAGE_USER);
}