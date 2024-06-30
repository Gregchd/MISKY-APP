import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { useFoods } from "../context/FoodContext";
import Video from "../components/Video";


function FoodPage() {

    const params = useParams();
    const {getFood} = useFoods();
    const [food, setFood] = useState({});


    useEffect(() => {
        async function loadFood(){
            if(params.id){
                const foodData = await getFood(params.id);
                setFood(foodData)
                console.log(foodData)
            }
        }
        loadFood();
    }, [])


    return (     
        <div className="container mx-auto p-12 bg-white rounded-lg shadow-lg">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{food.name}</h1>
                <p className="text-sm text-gray-500">{new Date(food.date).toLocaleDateString()}</p>
            </div>
            <div className="flex justify-center mb-8">
                <Video videoLink={food.link} />
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Ingredientes</h2>
                <ul className="list-disc pl-5 text-gray-700">
                    {food.ingredients && food.ingredients.split(',').map((ingredient, index) => (
                        <li key={index} className="mb-1">{ingredient.trim()}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Preparación</h2>
                <p className="text-gray-700">{food.preparation}</p>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">País</h2>
                <p className="text-gray-700">{food.country}</p>
            </div>
        </div>
    )
}

export default FoodPage