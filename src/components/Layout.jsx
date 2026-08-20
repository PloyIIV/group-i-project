import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import CartDropdown from "./CartDropdown"

const Layout = () => {
    return (
        <div>
            <Header />
            <nav>
                <CartDropdown />
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout