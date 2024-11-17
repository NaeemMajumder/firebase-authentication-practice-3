import {createBrowserRouter, Navigate} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import CategoryNews from "./pages/CategoryNews";

export const router = createBrowserRouter([
    {
        path:"",
        element:<Navigate to={"/category/01"}></Navigate>
    },
    {
        path:"/",
        element:<HomeLayout />,
        children:[
            {
                path:"/category/:id",
                element: <CategoryNews />,
                loader:({params})=>{
                    return fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                }
            }
        ]
    },
    {
        path:"/news",
        element:<h1>News Router</h1>
    },
    {
        path:"/auth",
        element:<h1>Hello Auth</h1>
    },
    {
        path:"*",
        element:<h1>Error</h1>
    },
]);