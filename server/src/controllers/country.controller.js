import Country from "../models/country.model.js";

export const getCountries = async (req, res) => {
    try {
        const countrys = await Country.find({});
        res.json(countrys);
    } catch (error) {
        return res.status(500), json({ message: error.message });
    }
};

export const createCountry = async (req, res) => {
    try {
        const { name } = req.body;
        console.log(req.name);
        const newCountry = new Country({
            name,
        });
        const savedCountry = await newCountry.save();
        res.json(savedCountry);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
