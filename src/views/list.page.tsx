import { useEffect, useState } from "react";
import { ListItems, type ColumnConfig, type idItem } from "../components/ui/list-items";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/ui/search-bar";
import { PlusIcon } from "lucide-react";

interface ListPageProps<T> {
    getItems: () => Promise<T[]>;
    columns: ColumnConfig<T>[];
    route: string;
}

export function ListPage<T extends idItem>({getItems, columns, route}: ListPageProps<T>) {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        getItems().then((response) => {
            setData(response);
        })
    }, [getItems]);

    return (
        <div className="my-8 mx-16">
            <div className="flex justify-between items-center pb-4"> 
                <SearchBar />
                <div>
                <Button variant="outline">
                    Filtros
                </Button>
                <Button>
                    <PlusIcon data-icon="inline-start" />
                    Criar
                </Button>
                </div>
            </div>
            <ListItems<T>  data={data} columns={columns} route={route}/>
        </div>
    )
}