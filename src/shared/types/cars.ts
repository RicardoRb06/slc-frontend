import type { ColumnConfig } from "@/components/ui/list-items";
import type { Model } from "./model";

export const carColumns: ColumnConfig<Car>[] = [
  { key: "modelo", label: "Modelo" },
  { key: "cor", label: "Cor" },
  { key: "placa", label: "Placa" },
];

export interface Car {
    id: string;
    modelo: Model;
    cor: string;
    status: string;
    kmRodados: string;
    placa: string;
    ano: string;
    caracteristicas: string[];
}