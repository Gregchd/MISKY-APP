import {useEffect, useState} from 'react'
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useFoods } from '../context/FoodContext'
import {useCountries} from '../context/CountryContext'

function AddFoodPage() {

    const {register, handleSubmit, setValue } = useForm();
    const {createFood, getFood, updateFood} = useFoods();
    const {country} = useCountries();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function loadFood(){
            if(params.id){
                const food = await getFood(params.id)
                console.log(food)
                setValue('name', food.name)
                setValue('ingredients', food.ingredients)
                setValue('preparation', food.preparation)
                setValue('link', food.link)
                setValue('imglink', food.imglink)
                setValue('country', food.country)
            }
        }
        loadFood();
    }, []);

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateFood(params.id, data)
        } else {
            console.log(data)
            await createFood(data)
        }
        navigate('/foods')
    })


    return (
        <div className="bg-white shadow-md max-w-3xl w-full mx-auto p-10 rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">{params.id ? "Editar Plato" : "Agregar Nuevo Plato"}</h1>
            <form onSubmit={onSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Nombre del plato"
                    {...register("name")}
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                    autoFocus
                />

                <textarea
                    placeholder="Ingredientes"
                    {...register("ingredients")}
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                    rows="4"
                />

                <textarea
                    placeholder="Preparación"
                    {...register("preparation")}
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                    rows="4"
                />

                <input
                    type="text"
                    placeholder="Link del video de YouTube"
                    {...register("link")}
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                />

                <input
                    type="text"
                    placeholder="Link de imagen"
                    {...register("imglink")}
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                />

                <select
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                    {...register("country")}
                >
                    <option value="">Seleccionar País</option>
                    {country.map((c) => (
                        <option key={c.name} value={c.es_name}>{c.es_name}</option>
                    ))}
                </select>

                <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-300">
                    Guardar
                </button>
            </form>
        </div>

    )
}

export default AddFoodPage