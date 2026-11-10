import type { ColumnConfig } from "@/views/list-items";

export const brandColumns: ColumnConfig<Brand>[] = [
  { key: "nome", label: "Nome" },
];

export interface Brand {
    id: string;
    nome: string;
}