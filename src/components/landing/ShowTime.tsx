import "../../assets/scss/showTime/landing.scss"
import { v4 as uuidv4 } from "uuid"
import knight from "../../assets/svg/aveMaria/Knight.svg"

import {
  Link
} from "react-router-dom"

interface Info 
  { img: string
  , descr: string
  , link: string
  , id: string
  }

export const ShowTime = () => {

  const infoHash: Info[] = 
    [ {img: knight, descr: "dasdasdasd", link: "/ave", id: uuidv4()}
    , {img: "ng", descr: "dasdasdasd", link: "/ng", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    ]

  return (
    <div className="contentContainerShowTime">
      <div className="contentShowTime">
        {infoHash.map(info => CardShowTime(info))}
      </div>
    </div>
  )
}

const CardShowTime = (info: Info) => {

  return (
    <Link to={info.link} className="cardShowTime">
      <img src={window.location.origin + info.img} alt={window.location.origin + info.img}/>
    </Link>
  )
}
