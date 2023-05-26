import React from "react"
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom"
import {Layout} from "./components/Layout"
import {Main} from "./pages/Main"
import {About} from "./pages/About"
import {ErrorComponent as Error} from "./pages/Error"

function App() {
    const routes = [
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <Main/>
                },
                {
                    path: "about",
                    element: <About/>
                },
                {
                    path: "error",
                    element: <Error/>
                }
            ]
        },
        {
            path: "*",
            element: <Navigate to="/"/>
        }
    ]
    const router = createBrowserRouter(routes)

    return (
        <RouterProvider router={router}/>
    )
}

export default App
