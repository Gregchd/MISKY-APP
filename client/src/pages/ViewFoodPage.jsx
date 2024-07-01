import {useEffect, useState} from 'react'
import { useFoods } from "../context/FoodContext"
import FoodCard from "../components/FoodCard"
import { useCountries } from "../context/CountryContext"

function ViewFoodPage() {

    const {getFoods, foods} = useFoods();
    const {country} = useCountries();
    const [selectedCountry, setSelectedCountry] = useState('');
    
    useEffect(()=> {
        getFoods()
    }, [])

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    }

    const filteredFoods = selectedCountry
        ? foods.filter(food => food.country === selectedCountry)
        : foods;

    if (foods.length === 0) return <h1 className="text-center mt-8 text-black text-5xl">No hay recetas</h1>;

    return(
        <div className="container w-4/6 mt-8 px-4 mx-auto">
            <div className="mb-4">
                <select
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md"
                >
                    <option value="">Todos los Países</option>
                    {country.map((c) => (
                        <option key={c.name} value={c.es_name}>{c.es_name}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-6">
                {filteredFoods.map((food) => (
                    <FoodCard food={food} key={food._id} />
                ))}
            </div>
        </div>
    )
}

export default ViewFoodPage

