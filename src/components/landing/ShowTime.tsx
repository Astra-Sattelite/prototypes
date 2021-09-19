import "../../assets/scss/showTime/landing.scss"
import { v4 as uuidv4 } from "uuid"

import knight from "../../assets/svg/aveMaria/Knight.svg"
import logo from "../../assets/svg/nihongo/Logo.svg"

import { HeaderShowTime } from '../header/HeaderShowTime'

import CSS from 'csstype'

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
    [ {img: ("url(" + knight + ")"), descr: 'We will take Jerusalem DEUS WULT! DEUS WULT! DEUS WULT!', link: "/ave", id: uuidv4()}
    , {img: ("url(" + logo + ")"), descr: "Site for learning Japanese", link: "/ng", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    , {img: "Root", descr: "dasdasdasd", link: "/", id: uuidv4()}
    ]

  return (
    <div className="rootShowTime">
      <HeaderShowTime />
      <div className="contentContainerShowTime">
        <div className="contentShowTime">
          {infoHash.map(info => CardShowTime(info))}
        </div>
      </div>
    </div>
  )
}

const CardShowTime = (info: Info) => {

  const cardButtonLinkShowTime: CSS.Properties = {
    width: "90%", 
    height: "20%", 
    alignSelf: "center", 
    textDecoration: "none", 
    color: "black"
  }

  const imageShowTime = (): CSS.Properties => {
    return {
      height: "100%",
      width: "100%",
      backgroundImage: info.img,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderBottom: "1px solid black"
    }
  }

  return (
    <div className="cardShowTime" key={info.id}>
      <Link to={info.link} style={{width: "100%", height: "30%"}}>
        <div style={imageShowTime()} />
      </Link>
      <div className="cardDescrShowTime">
        {info.descr}
      </div>
      <Link to={info.link} style={cardButtonLinkShowTime}>
        <div className="cardButtonShowTime">
          Open
        </div>
      </Link>
    </div>
  )
}
