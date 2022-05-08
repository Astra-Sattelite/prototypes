import React from 'react'
import "./sass/landing.sass"
import * as R from "ramda"
import { HeaderHoloStore } from "./HeaderHoloStore"
import { v4 as uuidv4 } from "uuid"
import nakirium from "./images/nakirium.jpeg"
import worldBreaker from "./images/worldBreaker.jpeg"
import { useMediaQuery } from 'react-responsive'

interface Filter
  { text: string
  , id: string
  }

interface Card
  { img: string
  , name: string 
  , descr: string
  , price: number
  , id: string
  }

export const HoloStore = () => {

  const filters: Filter[] = 
    [ {text: "filter by this", id: uuidv4()}
    , {text: "filter by that", id: uuidv4()}
    , {text: "filter by ww", id: uuidv4()}
    , {text: "filter by that", id: uuidv4()}
    , {text: "filter by ww", id: uuidv4()}
    , {text: "filter by that", id: uuidv4()}
    , {text: "filter by ww", id: uuidv4()}
    , {text: "filter by that", id: uuidv4()}
    , {text: "filter by ww", id: uuidv4()}
    , {text: "filter by that", id: uuidv4()}
    , {text: "filter by ww", id: uuidv4()}
    , {text: "filter by that", id: uuidv4()}
    , {text: "filter by ww", id: uuidv4()}
    , {text: "filter by that", id: uuidv4()}
    , {text: "filter by ww", id: uuidv4()}
    ]
    
  const cards: Card[] = 
    [ {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiKMvOTUvjhGPmknx4qsVAZoH0EHC66X3iA&usqp=CAU", name: "War Crime", descr: "Is it time alredy?", price: 9.99, id: uuidv4()}
    , {img: nakirium, name: "Nakirium", descr: "Side Effects: Deabetes", price: 14.99, id: uuidv4()}
    , {img: "https://i.ytimg.com/vi/7y5oyUbmv_8/maxresdefault.jpg", name: "Elite 3000", descr: "Lorem Ipsum Lorem Ipsum", price: 13.37, id: uuidv4()}
    , {img: worldBreaker, name: "World Breaker", descr: "Lorem Ipsum Lorem Ipsum", price: 6.66, id: uuidv4()}
    , {img: worldBreaker, name: "World Breaker", descr: "Lorem Ipsum Lorem Ipsum", price: 6.66, id: uuidv4()}
    ]


  const useIsMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className="rootHoloStore">
      <HeaderHoloStore />
      <div className={
        useIsMobile
          ? "gridContainerContentHoloStoreMobile" 
          : "gridContainerContentHoloStore"
      }>

        {R.map(card => mkCard(card), cards)}

      </div>
    </div>
  )
}

const mkFilter = (infoFilter: Filter): JSX.Element => {
  return (
    <div key={infoFilter.id} className="filterHoloStore">
      <input type="checkbox" />
      <p style={{marginLeft: "5px"}}>{infoFilter.text}</p>
    </div>
  )
}

const mkCard = (infoCard: Card): JSX.Element => {

  return (
    <div key={infoCard.id} className="gridCardHoloStore">
      <img src={infoCard.img} alt={infoCard.img} className="cardImgHoloStore" />
      <div className="cardNameHoloStore">{infoCard.name}</div>
      <div className="cardDescrHoloStore">{infoCard.descr}</div>
      <div className="containerCardBuyHoloStore">
        <div className="cardButtonHoloStore">
          Add to Cart
        </div>
        <div className="cardPriceHoloStore">{infoCard.price + "$"}
        </div>
      </div>
    </div>
  )
}