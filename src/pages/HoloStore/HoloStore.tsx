import React, { useEffect, useState } from 'react'
import "./sass/landing.sass"
import { HeaderHoloStore } from "./HeaderHoloStore"
import { v4 } from "uuid"
import { use } from '../../../utils'
import { selectWidth } from '../../appSlice'
import L from "lodash"
import { getHoloStoreProducts, selectProducts } from './holoStoreSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'

type CardWithId = { 
  img: string, 
  name: string, 
  descr: string, 
  price: number, 
  id: string
}

type Filter
  = "asc"
  | "desc"

export const HoloStore = () => {

  const [filterBy, setFilterBy] = useState<Filter>("desc")

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getHoloStoreProducts())
  }, [])

  const cards = use(selectProducts)

  const cardsWithId = L.map(cards, card => ({...card, id: v4()}))

  const filteredCards 
    = L.orderBy(
      cardsWithId, 
      ["price"],
      [filterBy]
    )

  const isMobile = use(selectWidth) <= 768

  return (
    <div className="rootHoloStore">
      <HeaderHoloStore />
      <div className="flexContainerHoloStore">
        <Filters filterBy={filterBy} setFilterBy={setFilterBy} isMobile={isMobile} />
        <div className={
          isMobile
            ? "gridContentHoloStore-Mobile" 
            : "gridContentHoloStore"
        }>
          {L.map(filteredCards, card => <Card card={card} key={card.id} />)}
        </div>
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
      <div className="cardBuyHoloStore">
        <div className="cardButtonHoloStore" >
          Add to Cart
        </div>
        <div className="cardPriceHoloStore">{props.card.price + "$"}
        </div>
      </div>
    </div>
  )
}

type FiltersProps = {
  filterBy: Filter
  setFilterBy: (x: Filter) => void
  isMobile: boolean
}

const Filters: React.FC<FiltersProps> = props => {

  const filters: {filterBy: Filter, text: string}[] = [
    { filterBy: "asc"    , text: "Price Up"   },
    { filterBy: "desc"   , text: "Price Down" }
  ]

  return (
    <div className="holoStoreFilters">
      {L.map(
        filters, 
        filter => 
          <div key={filter.filterBy} className={
            props.isMobile
              ? "holoStoreFilter-Mobile"
              : "holoStoreFilter"
          }>
            <div className="holoStoreFilterButton" onClick={e => props.setFilterBy(filter.filterBy)}>
              {filter.text}
            </div>
          </div>
      )}
    </div>
  )
}