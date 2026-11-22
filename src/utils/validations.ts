import { getModelById } from "@/shared/api/model.api";

export function validatePlate(plate: string) {
    if(plate.length > 7) {
        plate = plate.slice(0, 7);
    }

    return plate.trim().toUpperCase();
}

export async function validateModel(id: number) {
    try {
        const model = await getModelById(id);
        return model;
    }
    catch (e) {
        throw new Error("Modelo inválido.");
    }
}