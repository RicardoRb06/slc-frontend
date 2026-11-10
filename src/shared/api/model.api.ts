import { api } from "@/config/axios";
import type { Model } from "../types/model";

export async function getModel(): Promise<Model[]> {
    const response = await api.get("/modelo");
    return response.data;
}