import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { type Car } from "@/shared/types/cars";
import { useEffect, useState } from "react";
import { getCarById } from "@/shared/api/cars.api";
import { Button } from "@/components/ui/button";
import { validatePlate } from "@/utils/validations";
import { getModel } from "@/shared/api/model.api";
import { type Model } from "@/shared/types/model";

export function CarRegisterPage() {
    const params = useParams();

    const [car, setCar] = useState<Car>();
    const [id, setId] = useState('');

    const [models, setModels] = useState<Model[]>()

    async function getCarData() {
        if (!params.idParam) {
            return null;
        }

        await getCarById(params.idParam).then((response) => {
            setCar(response);
        });
    }

    async function getModels() {
        const response = await getModel();
        setModels(response);
    }

    useEffect(() => {
        getCarData();
    }, [id])

    if (!models) return null;
    if (!car) return null;

    return (
        <div className='container'>
            <Card title='Cadastro de Carro'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='bs-component'>
                            <div>
                                <input
                                    type='text'
                                    id='inputPlaca'
                                    value={car.placa}
                                    className='form-control'
                                    name='placa'
                                    onChange={(e) => setCar({ ...car, placa: validatePlate(e.target.value) })}
                                />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    id='inputKmRodados'
                                    value={car.kmRodados}
                                    className='form-control'
                                    name='kmRodados'
                                    onChange={(e) => setCar({ ...car, kmRodados: e.target.value })}
                                />
                            </div>
                            <div>
                                <select>
                                    {models?.map((model) => (
                                        <option key={model.id} value={model.id}>
                                            {model.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <input
                                    type='text'
                                    id='inputCor'
                                    value={car.cor}
                                    className='form-control'
                                    name='cor'
                                    onChange={(e) => setCar({ ...car, cor: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type='number'
                                    id='inputAno'
                                    value={car.ano}
                                    className='form-control'
                                    name='ano'
                                    onChange={(e) => setCar({ ...car, ano: e.target.value })}
                                />
                            </div>
                            <div className="flex gap-2">
                                <Button variant="default">
                                    Salvar
                                </Button>
                                <Button variant="destructive" onClick={getCarData}>
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}