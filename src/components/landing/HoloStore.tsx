import "../../assets/scss/holoStore/landing.scss"
import { HeaderHoloStore } from "../header/HeaderHoloStore"
import { v4 as uuidv4 } from "uuid"
import nakirium from "../../assets/svg/holoStore/nakirium.jpeg"
import worldBreaker from "../../assets/svg/holoStore/worldBreaker.jpeg"

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
    [ {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiKMvOTUvjhGPmknx4qsVAZoH0EHC66X3iA&usqp=CAU", name: "War Crime", descr: "Will commit war crime for you", price: 9.99, id: uuidv4()}
    , {img: nakirium, name: "Nakirium", descr: "Side Effect: Deabetes", price: 14.99, id: uuidv4()}
    , {img: "https://i.ytimg.com/vi/7y5oyUbmv_8/maxresdefault.jpg", name: "Elite 3000", descr: "Make you more elite by 3000", price: 13.37, id: uuidv4()}
    , {img: worldBreaker, name: "World Breaker", descr: "Can break anything for you", price: 6.66, id: uuidv4()}
    ]


  return (
    <div className="rootHoloStore">
      <HeaderHoloStore />
      <div className="containerEmptyHoloStore"></div>
      <div className="flexContainerContentHoloStore">
        <div className="flexContainerFiltersHoloStore">
          {filters.map(filter => mkFilter(filter))}
        </div>
        <div className="flexContainerCardsHoloStore">
          <div className="flexContainerCardsRangeHoloStore">
            {cards.map(card => mkCard(card))}
          </div>
        </div>
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
    <div key={infoCard.id} className="flexContainerCardHoloStore">
      <img src={infoCard.img} alt={infoCard.img} className="cardImgHoloStore" />
      <div className="cardNameHoloStore">{infoCard.name}</div>
      <div className="cardDescrHoloStore">{infoCard.descr}</div>
      <div className="containerCardBuyHoloStore">
        <div className="cardButtonHoloStore">
          В корзину
        </div>
        <div className="cardPriceHoloStore">{infoCard.price + "$"}
        </div>
      </div>
    </div>
  )
}