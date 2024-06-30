import React from 'react'
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import misky from '../img/misky_logo.svg'

function Navbar() {

    const {isAuthenticated, logout, user} = useAuth();

    return (
        <nav className="bg-white mb-3 flex justify-between items-center py-5 px-10 shadow-md rounded-lg">

            <Link to={
                isAuthenticated ? '/' : '/'           
            }>
                <img src={misky} alt="Imagen de fondo" className="h-[4.5rem]" />
            </Link>  
            <ul className="flex gap-x-4 items-center">
                {isAuthenticated ? (
                    <>
                        <li className="text-xl text-gray-800">
                            {user.username}
                        </li>
                        <li>
                            <Link to='/add-food' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Agregar receta</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => {logout()}} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Cerrar sesión</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</Link>
                        </li>
                        <li className="">
                            <Link to='/register' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar