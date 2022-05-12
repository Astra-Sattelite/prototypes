import React, { useEffect } from 'react'
import "./sass/landing.sass"
import { HeaderHoloStore } from "./HeaderHoloStore"
import { v4 } from "uuid"
import { use } from '../../../utils'
import { selectWidth } from '../../appSlice'
import L from "lodash"
import { getHoloStoreProducts, selectProducts } from './holoStoreSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'

interface CardWithId
  { img: string
  , name: string 
  , descr: string
  , price: number
  , id: string
  }

export const HoloStore = () => {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getHoloStoreProducts())
  }, [])

  const cards = use(selectProducts)

  const cardsWithId = L.map(cards, card => ({...card, id: v4()}))

  const isMobile = use(selectWidth) <= 768

  return (
    <div className="rootHoloStore">
      <HeaderHoloStore />
      <div className={
        isMobile
          ? "gridContainerContentHoloStore-Mobile" 
          : "gridContainerContentHoloStore"
      }>
        {L.map(cardsWithId, card => <Card card={card} key={card.id} />)}
      </div>
    </div>
  )
}
const Card: React.FC<{card: CardWithId}> = props => {

  return (
    <div className="gridCardHoloStore">
      <img src={props.card.img} alt={props.card.img} className="cardImgHoloStore" />
      <div className="cardNameHoloStore">{props.card.name}</div>
      <div className="cardDescrHoloStore">{props.card.descr}</div>
      <div className="containerCardBuyHoloStore">
        <div className="cardButtonHoloStore">
          Add to Cart
        </div>
        <div className="cardPriceHoloStore">{props.card.price + "$"}
        </div>
      </div>
    </div>
  )
}