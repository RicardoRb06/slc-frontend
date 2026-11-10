import { api } from "@/config/axios";
import type { Car } from "../types/cars";

export async function getCars(): Promise<Car[]> {
    const response = await api.get("/carros");
    return response.data;
}