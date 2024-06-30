import {createContext, useContext, useState} from 'react';
import {createFoodRequest, getFoodsRequest, deleteFoodRequest, getFoodRequest, updateFoodRequest} from '../api/food';

const FoodContext = createContext();

export const useFoods = () => {
    const context = useContext(FoodContext);
    if(!context){
        throw new Error('useFoods must be used within a FoodProvider');
    }
    return context;
}

export function FoodProvider({children}){
    const [foods, setFoods] = useState([]);

    const getFoods = async() => {
        try {
            const res = await getFoodsRequest();
            setFoods(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createFood = async(food) => {
        const res = await createFoodRequest(food);
        console.log(res)
    }

    const deleteFood = async(id) => {
        try {
            const res = await deleteFoodRequest(id);
            if (res.status === 204) setFoods(foods.filter(food => food._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getFood = async (id) => {
        try {
            const res = await getFoodRequest(id);
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateFood = async (id, food) => {
        try {
            await updateFoodRequest(id, food);
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <FoodContext.Provider 
            value={{
                foods,
                getFoods,
                createFood,
                deleteFood,
                getFood,
                updateFood
            }}
        >
            {children}
        </FoodContext.Provider>
    );
}