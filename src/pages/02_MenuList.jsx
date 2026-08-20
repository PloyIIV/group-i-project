import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";
import { menuList } from "../mock-data/menu";

const MenuList = () => {
  return (
    <main id="menu" className="min-h-screen bg-[#ece2d3]">
      <Hero />

      <section className="p-4 md:p-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#f9f4e9] p-5 shadow-xl sm:p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-3xl font-bold text-red-600">
                Thai<span className="text-slate-900">Grub</span>
              </p>

              <h2 className="text-l font-bold text-black">
                Our Menu
              </h2>
              <p>Browse our dishes and order your favorites!</p>

            </div>

            <span className="rounded-full bg-red-700 px-4 py-2 text-sm font-medium text-white">
              {menuList.length} Menu Items
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuList.map((menu) => (
              <Link
                key={menu.id}
                to={`/${menu.id}`}
                className="group overflow-hidden rounded-2xl border border-[#eadfcd] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={menu.pic_url}
                  alt={menu.name}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-shadow-black">
                      {menu.name}
                    </h3>

                    <p className="whitespace-nowrap font-bold text-red-600">
                      ฿{menu.price}
                    </p>
                  </div>

                  <p className="mt-2 text-sm font-medium text-[#d84d1e]">
                    {menu.spiciness_level === 0
                      ? "Not spicy"
                      : `Spiciness Level: ${"🌶️".repeat(
                          menu.spiciness_level
                        )}`}
                  </p>

                  <p className="mt-4 rounded-xl bg-red-100 border-1 px-4 py-2.5 text-center text-sm font-semibold text-red-700 transition group-hover:bg-red-300">
                    View Dish
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MenuList;