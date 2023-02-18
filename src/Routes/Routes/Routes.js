import PrivateRoute from "../../Context/PrivateRoute/PrivateRoute";
import ApplyJob from "../../Pages/ApplyJob/ApplyJob";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/applyjob/:id',
                element:<PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:3000/applyjob/${params.id}`)
            },
        ]
    }
])