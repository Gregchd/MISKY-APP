import { useAuth } from "../context/AuthContext"

function TaskPage() {

    const { user } = useAuth()

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-9xl text-center">
                Bienvenido {user.username}
            </div>
            <div className="mt-4 text-2xl text-center">
                Home Page
            </div>
        </div>
    )
}

export default TaskPage