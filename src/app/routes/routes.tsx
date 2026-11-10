import { Layout } from '@/components/layout/layout';
import { getCars } from '@/shared/api/cars.api';
import { carColumns, type Car } from '@/shared/types/cars';
import { Homepage } from '@/views/homepage';
import { ListItems } from '@/views/list-items';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes(){
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Homepage />} />
                <Route path='/carros' element={<ListItems<Car> getItems={() => getCars()} columns={carColumns} route="carros" />} />
                <Route path='/modelos' element={<ListItems<Car> getItems={() => getCars()} columns={carColumns} route="modelos" />} />
                <Route path='/marcas' element={<ListItems<Car> getItems={() => getCars()} columns={carColumns} route="marcas" />} />
                <Route path='/categorias' element={<ListItems<Car> getItems={() => getCars()} columns={carColumns} route="categorias" />} />
            </Route>
        </Routes>
    )
}