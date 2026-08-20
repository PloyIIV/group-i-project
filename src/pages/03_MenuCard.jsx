import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { useParams } from "react-router-dom";
import { menuList } from "../mock-data/menu";

export const MenuCard = () => {

  const { menu } = useContext(MenuContext);

  console.log(useContext(MenuContext))

  const { id } = useParams();

  const menuDetails = menu.find((item)=> item.id === id)

  console.log(menuDetails)

  return (
    <div>
      <div>{/* <img alt={menu.name} /> */}</div>
    </div>
  );
};
