import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext.jsx"

import RegisterPage from "./pages/RegisterPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import TaskPage from "./pages/TaskPage.jsx"
import TaskFormPage from "./pages/TaskFormPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import HomePage from "./pages/HomePage.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
import { TaskProvider } from "./context/TaskContext.jsx"
import { FoodProvider } from "./context/FoodContext.jsx"
import { CountryProvider } from "./context/CountryContext.jsx"

import RegisterPageMisky from "./pages/RegisterPageMisky.jsx"
import LoginPageMisky from "./pages/LoginPageMisky.jsx"
import AddFoodPage from "./pages/AddFoodPage.jsx"
import ViewFoodPage from "./pages/ViewFoodPage.jsx"
import FoodPage from "./pages/FoodPage.jsx"

import Navbar from "./components/Navbar.jsx"


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <FoodProvider>
      <CountryProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPageMisky />} />
              <Route path="/register" element={<RegisterPageMisky />} />
              <Route path="/foods" element={<ViewFoodPage />} />
              <Route path="/foods/:id" element={<FoodPage />} />
              <Route element={<ProtectedRoute/>}>
                <Route path="/tasks" element={<TaskPage/>} />
                <Route path="/add-task" element={<TaskFormPage/>} />
                <Route path="/tasks/:id" element={<TaskFormPage/>} />
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/add-food" element={<AddFoodPage/>} />
              </Route>
            </Routes>        
        </BrowserRouter>
      </CountryProvider>
      </FoodProvider>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App