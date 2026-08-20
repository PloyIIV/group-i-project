import { MenuContext } from "./MenuContext";
import { menuList } from "../mock-data/menu";
import { useState } from "react";

export const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(menuList);
  const [totalCart, setTotalCart] = useState([]);
  const [click, setClick] = useState(false)

  const handleClickAddToCart = (menu) => {
    setClick(true)
    if(totalCart.find((item) => item.id === menu.id)) {
      menu.quantity++
      setTotalCart([...totalCart])
    } else {
      menu.quantity = 1
      setTotalCart([...totalCart, menu]);
    }
    console.log(totalCart)
  };

   return (
    <MenuContext.Provider
      value={{ menu, setMenu, handleClickAddToCart, totalCart, setTotalCart, setClick, click }}
    >
      {children}
    </MenuContext.Provider>
  );
};
