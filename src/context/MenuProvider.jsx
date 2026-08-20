import { MenuContext } from "./MenuContext";
import { menuList } from "../mock-data/menu";
import { useState } from "react";

export const MenuProvider = ({children}) => {
    const [menu, setMenu] = useState(menuList);

    return(
        <MenuContext.Provider value={{menu, setMenu}}>
            {children}
        </MenuContext.Provider>
    )
}