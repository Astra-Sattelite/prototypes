import "../../assets/scss/holoStore/landing.scss"
import { HeaderHoloStore } from "../header/HeaderHoloStore"

export const HoloStore = () => {
  return (
    <div className="rootHoloStore">
      <HeaderHoloStore />
      <div className="flexContainerContentHoloStore">
        <div className="containerEmptyHoloStore"></div>
        <div className="flexContainerFiltersHoloStore"></div>
        <div className="flexContainerCardsHoloStore"></div>
      </div>
    </div>
  )
}

