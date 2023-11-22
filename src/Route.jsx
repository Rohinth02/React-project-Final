import { createBrowserRouter } from "react-router-dom";
import DrawerAppBar from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import App from "./App";
import Employee from "./HomePage/Employee";
import ResponsiveDrawer from "./HomePage/Sideclicks";
import Signup from "./components/Signup";

const router=createBrowserRouter([


    {path:"/",element:<App />},
    {path:"/login",element:<LoginPage />},
    {path: "/dashboard", element: <ResponsiveDrawer />},
    {path:"/:id",element:<Employee />},
    {path:"/lo",element:<Signup />}
]);
export default router;