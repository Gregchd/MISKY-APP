import React from 'react';
import { Link } from 'react-router-dom';
import misky from '../img/misky_logo.svg';
import hero from '../img/hero.jpeg';

function HomePage() {
    return (
        <div className="relative w-full h-[70vh] overflow-hidden">
            <img src={hero} alt="Global Cuisine" className="object-cover w-full h-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
                <h1 className="text-4xl font-bold">Descubre las mejores recetas de comida casera de todo el mundo. Encuentra, guarda y comparte tus recetas favoritas.</h1>          
                <Link to="/foods" className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
                    Explorar Recetas
                </Link>
            </div>
        </div>
        )
}

export default HomePage



