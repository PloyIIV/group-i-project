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
              <p className="mb-1 text-sm font-medium text-[#d84d1e]">
                EMBER RESTAURANT
              </p>

              <h2 className="text-3xl font-bold text-[#123c35]">
                เมนูทั้งหมด
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                เลือกเมนูที่คุณอยากทานได้เลย
              </p>
            </div>

            <span className="rounded-full bg-[#123c35] px-4 py-2 text-sm font-medium text-white">
              {menuList.length} เมนู
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
                    <h3 className="text-lg font-bold text-[#123c35]">
                      {menu.name}
                    </h3>

                    <p className="whitespace-nowrap font-bold text-[#d84d1e]">
                      ฿{menu.price}
                    </p>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    {menu.spiciness_level === 0
                      ? "ไม่เผ็ด"
                      : `ระดับความเผ็ด ${"🌶️".repeat(
                          menu.spiciness_level
                        )}`}
                  </p>

                  <p className="mt-4 rounded-xl bg-[#123c35] px-4 py-2.5 text-center text-sm font-semibold text-white transition group-hover:bg-[#0b2d27]">
                    ดูรายละเอียด
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