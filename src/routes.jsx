import { createHashRouter } from "react-router-dom";
import App from "./App";
import Error from './pages/Error'
import Home from './pages/Home'
import Private from './pages/Private'


export const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/admin',
                element: <Private />,
            },
        ]
    }
])