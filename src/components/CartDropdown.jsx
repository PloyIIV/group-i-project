import React from 'react'
import { menuList } from '../mock-data/menu'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
    const navigate = useNavigate()
  return (
    <div className='w-80 border'>
        <h2>สินค้าในตะกร้า</h2>
        <div>
            {menuList.map((item) => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </div>
        <button onClick={() => navigate('/cart')}>ดูสินค้าในตะกร้า</button>
    </div>
  )
}

export default CartDropdown