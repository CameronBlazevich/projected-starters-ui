import { AuthProvider } from "../context/auth-context";
import AppHeader from "./app-header";
import { Outlet } from "react-router-dom";


const Layout = (props) => {

    return (
        <div>

            <AppHeader></AppHeader>
            <Outlet></Outlet>

        </div>
    )
}

export default Layout;