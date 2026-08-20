import React from "react";
import { menuList } from "../mock-data/menu";
import { useNavigate } from "react-router-dom";

const CartDropdown = ({ setClick }) => {
  const navigate = useNavigate();
  const handleButton = () => {
    setClick(false)
    navigate('/cart')
  }
  return (
    <div className="w-1/5 border absolute right-56 z-10 bg-white rounded-2xl flex flex-col items-center py-3">
      <h2 className="font-bold text-red-700">สินค้าในตะกร้า</h2>
      <div className="flex flex-col gap-3 my-3 w-[90%] bg-gray-50">
        {menuList.map((item) => {
          return (
            <div className="flex items-center bg-white hover:bg-red-100 p-3 rounded-2xl">
              <img
                className="w-20 h-20 object-cover rounded-2xl"
                src={item.pic_url}
                alt={item.name}
              />
              <div className="pl-3">
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-600">
                  จำนวน: <span className="text-black font-semibold">1</span> จาน
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="border py-3 w-[90%] rounded-2xl text-white font-semibold bg-red-700 hover:bg-red-600"
        onClick={() => handleButton() }
      >
        ดูสินค้าในตะกร้า
      </button>
    </div>
  );
};

export default CartDropdown;
