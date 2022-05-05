import React from 'react'

import "./sass/header.sass"

export const HeaderHoloStore = () => {
  return (
    <div className="flexContainerHeaderHoloStore">
      <div className="flexContainerHeaderItemsHoloStore">
        {/* items */}
      </div>

      <div className="logoHeaderHoloStore" />

      <div className="flexContainerHeaderItemsHoloStore">
        <div className="itemHeaderHoloStore">
          <div className="iconHeaderHoloStore" />
          <div className="cartHeaderHoloStore">Cart</div>
        </div>
        {/* items */}
      </div>
    </div>
  )
}
