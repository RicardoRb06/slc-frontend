import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface ColumnConfig<T> {
    key: keyof T;
    label: string;
}

interface ListProps<T> {
    getItems: () => Promise<T[]>;
    columns: ColumnConfig<T>[];
    route: string;
}

interface idItem {
    id: string;
}

export function ListItems<T extends idItem>({getItems, columns, route}: ListProps<T>) {
    const navigate = useNavigate();
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        getItems().then((response) => {
            setData(response);
        })
    }, [getItems]);

    return (
        <div className="w-full border-x border-b bg-card">
            <Table>
                <TableHeader className="bg-muted/60">
                    <TableRow className="border-t hover:bg-transparent">
                        {columns.map((col) => (
                            <TableHead key={String(col.key)} className="font-semibold text-foreground">
                                {col.label}
                            </TableHead>
                        ))}
                        <TableHead className="text-right font-semibold text-foreground pr-6">
                            Ações
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow 
                            key={item.id} 
                            onClick={() => navigate(`/${route}/${item.id}`)} 
                            className="cursor-pointer transition-colors hover:bg-muted/50"
                        >
                            {columns.map((col) => (
                                <TableCell key={String(col.key)} className="py-3.5">
                                    {String(item[col.key])}
                                </TableCell>
                            ))}
                            <TableCell className="text-right py-3.5 pr-6">
                                <Button 
                                    size="sm"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/${route}/${item.id}`);
                                    }}
                                >
                                    Ver mais
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}