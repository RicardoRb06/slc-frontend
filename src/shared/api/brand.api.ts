import { api } from "@/config/axios";
import type { Brand } from "../types/brand";

export async function getBrand(): Promise<Brand[]> {
    const response = await api.get("/marcas");
    return response.data;
}