import { useParams } from "react-router-dom";
import menuList from "../mock-data/menu";

export const MenuCard = () => {
  const { id } = useParams();

  const menuDetails = menuList.find((item) => item.id === Number(id));

  const handleClickAddToCart = () => {};

  console.log(menuDetails);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-10 bg-white w-[80%] shadow-[0_0_15px_rgba(0,0,0,0.15)] rounded-2xl">
        <div className="">
          <img alt={menuDetails.name} src={menuDetails.pic_url}></img>
        </div>
        <div className="flex justify-between">
          <h1 className="font-bold">{menuDetails.name}</h1>
          <p className="font-bold text-xl">{menuDetails.price} ฿</p>
        </div>
        <div>
          <button type="button" onClick={handleClickAddToCart}>
            สั่งเลย
          </button>
        </div>
      </div>
    </div>
  );
};
