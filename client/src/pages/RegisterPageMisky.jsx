import {useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import fondo from '../img/fondo.jpeg'


function RegisterPage() {

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const { signup, isAuthenticated, errors: RegisterErrors  } = useAuth()
    const navigate = useNavigate()

    useEffect(() => { 
        if(isAuthenticated) navigate('/')
    }, [isAuthenticated, navigate] )

    const onSubmit = handleSubmit(async(values) =>{
        signup(values);
    })

    return (
        <div className="flex h-screen">
            {/* Mitad Izquierda - Imagen estática */}
            <div className="w-1/2 bg-gray-200 flex items-center justify-center">
                <img src={fondo} alt="Imagen de fondo" className="object-cover h-full" />
            </div>

            {/* Mitad Derecha - Formulario de inicio de sesión */}
            <div className="w-1/2 flex items-center justify-center">
                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
                    {
                        RegisterErrors.map((error, i) => (
                            <div className="bg-red-500 p-2 text-white rounded-md mb-2" key={i}>
                                {error}
                            </div>
                        ))
                    }
                    <form onSubmit={onSubmit} className="">
                        <h2 className="text-4xl mb-4 text-gray-800 flex justify-center">Registrate</h2>
                        <div className="mb-4">               
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="text"
                            placeholder="Usuario"
                            {...register("username", {required: true})}
                            />
                            {errors.username && <p className="text-red-500 text-sm mt-1">El nombre de usuario es requerido</p>}
                        </div>
                        <div className="mb-4">               
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="text"
                            placeholder="Correo"
                            {...register("email", {required: true})}
                            />
                            {errors.username && <p className="text-red-500 text-sm mt-1">El correo es requerido</p>}
                        </div>
                        <div className="mb-6">                
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="password"
                            placeholder="Contraseña"
                            {...register("password", {required: true})}
                            />
                            {errors.username && <p className="text-red-500 text-sm mt-1">La contraseña es requerida</p>}
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="submit"
                            >
                            Registrarse
                            </button>
                        </div>
                    </form>
                    <p className="flex gap-x-2 justify-between text-gray-700 mt-5">
                        ¿Ya tienes una cuenta?<Link to="/login" className="text-orange-500">Iniciar sesión</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage