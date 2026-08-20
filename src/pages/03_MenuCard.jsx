import { useParams } from "react-router-dom";
import menuList from "../mock-data/menu";

export const MenuCard = () => {
  const { id } = useParams();

  const menuDetails = menuList.find((item) => item.id === Number(id));

  const handleClickAddToCart = () => {};

  console.log(menuDetails);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-10 bg-white w-[50%] shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-2xl">
        <div className="flex flex-col w-full gap-4 rounded-md">
          <div className="">
            <img
              alt={menuDetails.name}
              src={menuDetails.pic_url}
              className="rounded-md"
            ></img>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="font-bold">{menuDetails.name}</h1>
              <p>ระดับความเผ็ด</p>
              {spicyLevel > 0 &&
        Array.from({ length: spicyLevel }).map((_, index) => (
          <span key={index}>🌶️</span>
        ))}
            </div>
            <div className="">
              <p className="font-bold text-2xl">{menuDetails.price} ฿</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="font-bold bg-red-600 py-2 px-4 rounded-md text-white w-full"
              type="button"
              onClick={handleClickAddToCart}
            >
              สั่งเลย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
