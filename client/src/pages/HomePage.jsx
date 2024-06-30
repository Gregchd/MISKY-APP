import React from 'react';
import { Link } from 'react-router-dom';
import misky from '../img/misky_logo.svg';

function HomePage() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-6">
                    <img src={misky} alt="Misky Logo" className="mx-auto h-24" />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Bienvenido a Misky
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    Descubre las mejores recetas de comida casera de todo el mundo. Encuentra, guarda y comparte tus recetas favoritas.
                </p>
                <Link to="/foods" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600 transition duration-300">
                    Explorar Recetas
                </Link>
            </div>
        </section>
    )
}

export default HomePage