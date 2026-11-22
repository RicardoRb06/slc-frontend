import type { ColumnConfig } from "@/components/ui/list-items";
import type { Brand } from "./brand";
import type { Category } from "./category";

export const modelColumns: ColumnConfig<Model>[] = [
  { key: "nome", label: "Nome" },
  { key: "marca", label: "Marca" },
  { key: "categorias", label: "Categorias" },
];

export interface Model {
    id: string;
    nome: string;
    marca: Brand;
    categorias: Category;
}