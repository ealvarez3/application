// React router browser router
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
// Layouts
import MainRoot from "./layouts/MainRoot";
// Pages
import Login from "./pages/auth/Login";
import Home from "./pages/Home";


const routerMichelin = createBrowserRouter([
    // Auth pages
    {
        path: "/auth/login",
        element: <Login />,
        lazy: () => import("./pages/auth/Login"),
        errorElement: <h1>404</h1>,
    },
    // Protected pages
    {
        path: "/",
        element: <MainRoot />,
        lazy: () => import("./layouts/MainRoot"),
        children: [
            {
                path: "/",
                element: <ProtectedRoute element={Home} />,
                lazy: () => import("./pages/Home"),
                errorElement: <h1>404</h1>,
            },
        ],
    },
]);

export default routerMichelin;