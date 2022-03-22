import React from 'react'

import "../../assets/scss/holoStore/header.scss"

export const HeaderHoloStore = () => {
  return (
    <div className="flexContainerHeaderHoloStore">
      <div className="flexContainerHeaderItemsHoloStore">
        <div className="itemHeaderHoloStore">Lorem Ipsum</div>
        <div className="itemHeaderHoloStore">Lorem Ipsum</div>
        <div className="itemHeaderHoloStore">Lorem Ipsum</div>
      </div>

      <div className="logoHeaderHoloStore" />

      <div className="flexContainerHeaderItemsHoloStore">
        <div className="itemHeaderHoloStore">
          <div className="iconHeaderHoloStore" />
          <div className="cartHeaderHoloStore">Cart</div>
        </div>
        <div className="itemHeaderHoloStore">Lorem Ipsum</div>
        <div className="itemHeaderHoloStore">Lorem Ipsum</div>
      </div>
    </div>
  )
}
