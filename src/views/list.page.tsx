import { useEffect, useState } from "react";
import { ListItems, type idItem, type ListProps } from "./list-items";

export function ListPage<T extends idItem>({getItems, columns, route}: ListProps<T>) {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        getItems().then((response) => {
            setData(response);
        })
    }, [getItems]);

    return (
        <div>
            <ListItems<T>  items={data} columns={columns} route={route}/>
        </div>
    )
}