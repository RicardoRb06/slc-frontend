import type { ColumnConfig } from "@/components/ui/list-items";

export const categoryColumns: ColumnConfig<Category>[] = [
  { key: "nome", label: "Nome" },
];

export interface Category {
    id: string;
    nome: string;
}