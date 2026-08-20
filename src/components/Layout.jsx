import { Outlet } from "react-router-dom"
import Header from "./Header.jsx"
import CartDropdown from "./CartDropdown.jsx"
import { useState } from "react"

const Layout = () => {
    const [click, setClick] = useState(false)
    return (
        <div className="font-['Prompt']">
            <Header setClick={setClick} click={click} />
            {click && <CartDropdown setClick={setClick} />}
            <Outlet />
        </div>
    )
}

export default Layout