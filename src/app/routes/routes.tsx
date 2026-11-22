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
import { LoginPage } from '@/views/login.page';
import { ProtectedRoutes } from './protected.routes';
import { UnauthorizedPage } from '@/views/unauthorized.page';
import { AdminRoutes } from './admin.routes';
import { ProfilePage } from '@/views/profile.page';
import { CarRegisterPage } from '@/views/register/car.register';

export function AppRoutes(){
    return (
        <Routes>

            <Route path='/login' element={<LoginPage />} />
            <Route path='/unauthorized' element={<UnauthorizedPage />} />

            <Route element={<Layout />}>

                <Route path='/' element={<Homepage />} />

                <Route element={<ProtectedRoutes />}>

                    <Route path="/perfil" element={<ProfilePage />} />

                    <Route element={<AdminRoutes />}>
                        <Route path='/listagem-carros' element={<ListPage<Car> getItems={() => getCars()} columns={carColumns} route="carros" />} />
                        <Route path='/listagem-modelos' element={<ListPage<Model> getItems={() => getModel()} columns={modelColumns} route="modelos" />} />
                        <Route path='/listagem-marcas' element={<ListPage<Brand> getItems={() => getBrand()} columns={brandColumns} route="marcas" />} />
                        <Route path='/listagem-categorias' element={<ListPage<Category> getItems={() => getCategory()} columns={categoryColumns} route="categorias" />} />
                        <Route path='/cadastro-carros/:idParam?' element={<CarRegisterPage />} />
                        <Route path='/cadastro-modelos' element={<ListPage<Model> getItems={() => getModel()} columns={modelColumns} route="modelos" />} />
                        <Route path='/cadastro-marcas' element={<ListPage<Brand> getItems={() => getBrand()} columns={brandColumns} route="marcas" />} />
                        <Route path='/cadastro-categorias' element={<ListPage<Category> getItems={() => getCategory()} columns={categoryColumns} route="categorias" />} />
                    </Route>
                </Route>

            </Route>
        </Routes>
    )
}