import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {



  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>GrabFood is the fastest Food Delivery service in Vietnam. We have curated all your favorite dishes, restaurants, and cuisines to help you grab your food in the easiest & quickest way possible. Find and order your favorite cuisines across Vietnam - order food online in just a few taps, from Lifted Coffee & Brunch - Hàng Gà for Breakfast, Maazi Indian - Nhà Hàng Ấn Độ for Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=> {
                return (
                    <div onClick={() => setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu