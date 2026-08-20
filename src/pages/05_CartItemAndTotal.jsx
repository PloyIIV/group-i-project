import React, { useState } from 'react';
import { menuList } from '../mock-data/menu';

const CartItemAndTotal = () => {
  // ดึงข้อมูลจำลอง 3 รายการแรกมาใช้เป็นข้อมูลตะกร้าสินค้า
  const [cartItems, setCartItems] = useState([
    { ...menuList[0], quantity: 1 },
    { ...menuList[1], quantity: 1 },
    { ...menuList[2], quantity: 1 },
  ]);

  // คำนวณราคาสรุป
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 20;
  const total = subtotal + shipping;

  // ฟังก์ชันปรับจำนวนสินค้า
  const handleUpdateQuantity = (id, amount) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          // ป้องกันไม่ให้ค่าติดลบ (ถ้าน้อยกว่า 1 ให้เป็น 1 เหมือนเดิมไปก่อน)
          return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity };
        }
        return item;
      })
    );
  };

  return (
    <div className="max-w-2xl mx-auto px-8 py-4 bg-[#fbf6f6] min-h-screen">

      {/* 1. ส่วน Header (ปุ่ม Back ด้านซ้าย และชื่อหน้าตรงกลาง) */}
      <div className="flex items-center mb-6">
        <button className="p-2 cursor-pointer">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>
        <h1 className="flex-1 text-center text-xl font-bold">My cart</h1>
        <div className="w-10"></div> {/* กล่องเปล่าเพื่อดุนให้ข้อความอยู่ตรงกลางพอดี */}
      </div>

      {/* 2. ส่วนแสดงรายการอาหารในตะกร้า */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item, index) => (
          <div key={index} className="flex bg-white rounded-xl p-3 shadow-sm border border-gray-100">
            {/* รูปภาพอาหาร */}
            <img src={item.pic_url} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />

            <div className="ml-4 flex-1 flex flex-col justify-between">
              {/* ชื่ออาหาร และรายละเอียด */}
              <div>
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>Authentic Thai Cuisine</span>
                  {item.spiciness_level > 0 && (
                    <span className="ml-2 bg-red-50 text-[#b90015] px-2 py-0.5 rounded-full text-[10px] font-semibold border border-red-100">
                      Spicy Lvl {item.spiciness_level}
                    </span>
                  )}
                </div>
              </div>

              {/* ราคา และปุ่มบวกลบจำนวน */}
              <div className="flex justify-between items-center mt-2">
                <div className="font-bold text-gray-800 text-sm">Price: {item.price} Baht</div>
                <div className="flex items-center bg-red-50 rounded-full px-2 py-1">
                  <button
                    onClick={() => handleUpdateQuantity(item.id, -1)}
                    className="text-red-300 hover:text-[#b90015] font-bold px-2 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-2 text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, 1)}
                    className="text-red-300 hover:text-[#b90015] font-bold px-2 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. ส่วนช่องกรอก Promo code และสรุปราคา */}
      <div className="bg-white rounded-t-3xl p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] border-t border-gray-100 -mx-4 px-4 pb-10">

        {/* ช่อง Promo code */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Promo code apply"
            className="flex-1 bg-red-50/50 rounded-xl px-4 py-3 text-sm focus:outline-none placeholder-gray-400"
          />
          <button className="bg-[#b90015] text-white px-6 py-3 rounded-xl text-sm font-bold cursor-pointer hover:bg-red-800 transition">
            Apply
          </button>
        </div>

        {/* ยอดรวม Subtotal / Shipping */}
        <div className="space-y-3 text-sm text-gray-500 mb-4 border-b border-gray-100 pb-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-800">{subtotal} Baht</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-semibold text-gray-800">{shipping} Baht</span>
          </div>
        </div>

        {/* Total (ยอดรวมสุทธิ) */}
        <div className="flex justify-between items-center mb-6 pt-2">
          <span className="font-bold text-gray-800">Total</span>
          <span className="font-bold text-xl">{total} Baht</span>
        </div>

        {/* ปุ่ม Checkout / ชำระเงิน */}
        <button className="w-full bg-[#b90015] text-white py-3.5 rounded-xl font-bold text-lg hover:bg-red-800 transition cursor-pointer">
          ชำระเงิน
        </button>
      </div>

    </div>
  );
}

export default CartItemAndTotal;