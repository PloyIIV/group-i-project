import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import CartDropdown from "./CartDropdown"
import { useState } from "react"

const Layout = () => {
    const [click, setClick] = useState(true)
    return (
        <div>
            <Header setClick={setClick} click={click} />
            {click && <CartDropdown />}
            <Outlet />
        </div>
    )
}

export default Layout