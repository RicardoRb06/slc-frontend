import { Layout } from '@/components/layout/layout';
import { Homepage } from '@/views/homepage';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes(){
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Homepage />} />
            </Route>
        </Routes>
    )
}