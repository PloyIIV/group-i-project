import { useParams } from "react-router-dom";
import menuList from "../mock-data/menu";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

export const MenuCard = () => {
  const { id } = useParams();

  const menuDetails = menuList.find((item) => item.id === Number(id));

  const { handleClickAddToCart } = useContext(MenuContext);

  return (
    <div className="bg-[#F9F4E9] min-h-screen min-w-screen">
      <div className="flex justify-center items-center p-10">
        <div className="flex flex-col justify-center items-center p-8 bg-white w-[30%] shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-2xl">
          <div className="flex flex-col w-full gap-4 rounded-md">
            <div className="w-full">
              <img
                alt={menuDetails.name}
                src={menuDetails.pic_url}
                className="w-full aspect-square object-cover rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h1 className="font-bold">{menuDetails.name}</h1>
                <div className="flex">
                  <p className="pr-2">Spiciness Level</p>
                  {menuDetails.spiciness_level > 0 &&
                    Array.from({ length: menuDetails.spiciness_level }).map(
                      (_, index) => <span key={index}>🌶️</span>,
                    )}
                </div>
              </div>
              <div className="">
                <p className="font-bold text-2xl text-[#E70210]">
                  {menuDetails.price} ฿
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="font-bold bg-red-600 py-2 px-4 rounded-md text-white w-full"
                type="button"
                onClick={() => {
                  handleClickAddToCart(menuDetails);
                }}
              >
                Order Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
