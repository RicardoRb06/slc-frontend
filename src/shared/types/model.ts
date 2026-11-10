import type { ColumnConfig } from "@/views/list-items";

export const modelColumns: ColumnConfig<Model>[] = [
  { key: "nome", label: "Nome" },
  { key: "marca", label: "Marca" },
  { key: "categorias", label: "Categorias" },
];

export interface Model {
    id: string;
    nome: string;
    marca: string
    categorias: string[];
}