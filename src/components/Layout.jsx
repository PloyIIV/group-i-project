import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import CartDropdown from "./CartDropdown"
import { useState } from "react"

const Layout = () => {
    const [click, setClick] = useState(null)
    return (
        <div>
            <Header />
            {<CartDropdown />}
            <Outlet />
        </div>
    )
}

export default Layout