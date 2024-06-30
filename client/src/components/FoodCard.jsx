import React from 'react'
import { Link } from "react-router-dom"

function FoodCard({food}) {

    return (
        <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col md:flex-row items-center md:items-stretch p-4">
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-semibold text-gray-800 mb-2">{food.name}</h1>
                <p className="text-gray-600 mb-4">{new Date(food.date).toLocaleDateString()}</p>
                <div className="flex justify-end">
                    <Link to={`/foods/${food._id}`} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
                        Ver
                    </Link>
                </div>
            </div>
            {food.imglink && (
                <div className="w-full md:w-48 h-48 flex justify-center items-center md:ml-4">
                    <img src={food.imglink} alt={food.name} className="object-cover w-full h-full rounded-md" />
                </div>
            )}
        </div>
    )
}

export default FoodCard