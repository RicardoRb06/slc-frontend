import { Layout } from '@/components/layout/layout';
import { getBrand } from '@/shared/api/brand.api';
import { getCars } from '@/shared/api/cars.api';
import { getCategory } from '@/shared/api/category.api';
import { getModel } from '@/shared/api/model.api';
import { brandColumns, type Brand } from '@/shared/types/brand';
import { carColumns, type Car } from '@/shared/types/cars';
import { categoryColumns, type Category } from '@/shared/types/category';
import { modelColumns, type Model } from '@/shared/types/model';
import { Homepage } from '@/views/homepage';
import { Route, Routes } from 'react-router-dom';
import { ListPage } from '@/views/list.page';

export function AppRoutes(){
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Homepage />} />
                <Route path='/carros' element={<ListPage<Car> getItems={() => getCars()} columns={carColumns} route="carros" />} />
                <Route path='/modelos' element={<ListPage<Model> getItems={() => getModel()} columns={modelColumns} route="modelos" />} />
                <Route path='/marcas' element={<ListPage<Brand> getItems={() => getBrand()} columns={brandColumns} route="marcas" />} />
                <Route path='/categorias' element={<ListPage<Category> getItems={() => getCategory()} columns={categoryColumns} route="categorias" />} />
            </Route>
        </Routes>
    )
}