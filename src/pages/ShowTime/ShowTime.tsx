import React from 'react'
import "./sass/landing.sass"
import { v4 as uuidv4 } from "uuid"

import knight from "../Ave/images/Knight.svg"
import logoNihongo from "../Nihongo/images/Logo.svg"
import logoHolo from "../HoloStore/images/Logo.svg"

import { HeaderShowTime } from './HeaderShowTime'

import CSS from 'csstype'

import {
  Link
} from "react-router-dom"

type Info =
  { img: string
  , descr: string
  , link: string
  , id: string
  }

export const ShowTime = () => {

  const infoHash: Info[] = 
    [ {img: ("url(" + knight + ")"), descr: 'We will take Jerusalem DEUS WULT! DEUS WULT! DEUS WULT!', link: "/ave", id: uuidv4()}
    , {img: ("url(" + logoNihongo + ")"), descr: "Site for learning Japanese", link: "/ng", id: uuidv4()}
    , {img: ("url(" + logoHolo + ")"), descr: "Store with hololive theme", link: "/holo", id: uuidv4()}
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
      <div className="cardsShowTime">
          {infoHash.map(info => CardShowTime(info))}
      </div>
    </div>
  )
}

const CardShowTime = (info: Info) => {

  const cardButtonLinkShowTime: CSS.Properties = {
    display: "flex",
    width: "90%", 
    height: "20%",
    justifyContent: "center",
    marginBottom: "5px",
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
      <Link to={info.link} style={{width: "100%", height: "60%"}}>
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
