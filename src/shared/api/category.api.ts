import { api } from "@/config/axios";
import type { Category } from "../types/category";

export async function getCategory(): Promise<Category[]> {
    const response = await api.get("/categorias");
    return response.data;
}