import Food from "../models/food.model.js";

export const getFoods = async (req, res) => {
    try {
        const foods = await Food.find();
        res.json(foods);
    } catch (error) {
        return res.status(500), json({ message: error.message });
    }
};
export const createFood = async (req, res) => {
    console.log(req.body);
    try {
        const { name, ingredients, preparation, link, imglink, country } =
            req.body;
        console.log(req.body.name);
        const newFood = new Food({
            name,
            ingredients,
            preparation,
            link,
            imglink,
            country,
        });
        const savedFood = await newFood.save();
        res.json(savedFood);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getFood = async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) return res.status(404).json({ message: "Food not found" });
        res.json(food);
    } catch (error) {
        return res.status(404).json({ message: "Food not found" });
    }
};
export const deleteFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndDelete(req.params.id);
        if (!food) return res.status(404).json({ message: "Food not found" });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const updateFood = async (req, res) => {
    try {
        const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!food) return res.status(404).json({ message: "Food not found" });
        res.json(food);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
