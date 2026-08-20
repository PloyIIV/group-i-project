import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import CartDropdown from "./CartDropdown.jsx"
import { useContext, useState } from "react"
import { MenuContext } from "../context/MenuContext.jsx"

const Layout = () => {
    const { click } = useContext(MenuContext)
    return (
        <div className="font-['Prompt']">
            <Header />
            {click && <CartDropdown />}
            <Outlet />
        </div>
    )
}

export default Layout