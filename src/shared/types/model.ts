import type { ColumnConfig } from "@/views/list-items";

export const modelColumns: ColumnConfig<Model>[] = [
  { key: "nome", label: "Nome" },
];

export interface Model {
    id: string;
    nome: string;
}