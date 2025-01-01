import React from 'react'
import { itemData } from '../pages/data'
import { useState } from 'react'
const ItemsDisplay = () => {
    const [displayData,setData]=useState(itemData)
  return (
    <div className='itemSection'>
        {displayData.map((item)=>{
            return(
                <div className="gallery">
                    <img src={item.item_imag} alt={item.item_imag} />
                </div>
            )
        })}
    </div>
  )
}

export default ItemsDisplay
