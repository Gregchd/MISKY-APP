import {useForm} from 'react-hook-form'
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from 'react-router-dom'
import fondo from '../img/fondo.jpeg'
import { useEffect } from "react"

function LoginPage() {

    const {register, handleSubmit, formState: {errors},} = useForm()

    const {signin, errors: singinErrors, isAuthenticated} = useAuth()

    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data);
    })

    useEffect(() => { 
        if(isAuthenticated) navigate('/')
    }, [isAuthenticated, navigate] )

    return (
        <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center">
                <div className="bg-white shadow-lg max-w-md w-full p-10 rounded-md">
                    {
                        singinErrors.map((error, i) => (
                            <div className="bg-red-500 p-2 text-white rounded-md mb-2" key={i}>
                                {error}
                            </div>
                        ))
                    }
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Login</h1>
                    <form 
                    onSubmit={onSubmit}>
                        <input type="email" {...register("email", {required: true})} className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Correo"/>
                        {errors.email && <p className="text-red-500 text-sm mb-4">El correo es obligatorio</p>}
                        <input type="password" {...register("password", {required: true})} className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Contraseña"/>
                        {errors.password && <p className="text-red-500 text-sm mb-4">La contraseña es obligatoria</p>}
                        <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-200">Iniciar Sesión</button>
                    </form>
                    <p className="flex gap-x-2 justify-between text-gray-700 mt-4">
                        ¿No tienes una cuenta? <Link to="/register" className="text-orange-500">Registrate</Link>
                    </p>
                </div>
            </div>

            <div className="w-1/2 bg-gray-200 flex items-center justify-center">
                <img src={fondo} alt="Imagen de fondo" className="object-cover h-full" />
            </div>
        </div>
        
    )
}

export default LoginPage