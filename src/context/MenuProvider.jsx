import { MenuContext } from "./MenuContext";
import { menuList } from "../mock-data/menu";
import { useState } from "react";

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(menuList);
  const [totalCart, setTotalCart] = useState([]);

  const handleClickAddToCart = (menu) => {
    setTotalCart([...totalCart, menu]);
  };

   return (
    <MenuContext.Provider
      value={{ menu, setMenu, handleClickAddToCart, totalCart }}
    >
      {children}
    </MenuContext.Provider>
  );
};
