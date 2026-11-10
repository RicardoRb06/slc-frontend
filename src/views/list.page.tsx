import { useEffect, useState } from "react";
import { ListItems, type ColumnConfig, type idItem } from "../components/ui/list-items";

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
        <div>
            <ListItems<T>  data={data} columns={columns} route={route}/>
        </div>
    )
}