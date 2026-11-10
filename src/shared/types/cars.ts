import type { ColumnConfig } from "@/views/list-items";

export const carColumns: ColumnConfig<Car>[] = [
  { key: "modelo", label: "Modelo" },
  { key: "cor", label: "Cor" },
  { key: "placa", label: "Placa" },
];

export interface Car {
    id: string;
    modelo: string;
    cor: string;
    status: string;
    kmRodados: string;
    placa: string;
    ano: string;
    caracteristicas: string[];
}