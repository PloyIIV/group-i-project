import React from 'react'
import { menuList } from '../mock-data/menu'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const navigate = useNavigate()
  return (
    <div className='w-80 border absolute z-10 bg-white rounded-2xl flex flex-col items-center py-3'>
        <h2 className='font-bold'>สินค้าในตะกร้า</h2>
        <div className='flex flex-col gap-3 my-3'>
            {menuList.map((item) => {
                return (
                    <div className='flex items-center'>
                        <img className='w-20 h-20 object-cover rounded-2xl' src={item.pic_url} alt={item.name} />
                        <div className='pl-2'>
                            <p>{item.name}</p>
                            <p>จำนวน: 1 จาน</p>
                        </div>
                    </div>
                )
            })}
        </div>
        <button onClick={() => navigate('/cart')}>ดูสินค้าในตะกร้า</button>
    </div>
  )
}

export default CartDropdown