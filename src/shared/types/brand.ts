import type { ColumnConfig } from "@/components/ui/list-items";

export const brandColumns: ColumnConfig<Brand>[] = [
  { key: "nome", label: "Nome" },
];

export interface Brand {
    id: string;
    nome: string;
}