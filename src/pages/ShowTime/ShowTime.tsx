import React, { useEffect, useState } from 'react'
import "./sass/landing.sass"
import axios from "axios"

import knight from "../Ave/images/Knight.svg"
import logoNihongo from "../Nihongo/images/Logo.svg"
import logoHolo from "../HoloStore/images/Logo.svg"

import { getImageUrl } from "../../../utils"

import * as R from "ramda"
import { HeaderShowTime } from './HeaderShowTime'
import CSS from 'csstype'
import { v4 } from 'uuid'
import { Link } from "react-router-dom"

type Info =
  { img: string
  , descr: string
  , link: string
  , id: string
  }

type InfoWithId =
  { img: string
  , descr: string
  , link: string
  , id: string
  }

export const ShowTime = () => {

  const [info, setInfo] = useState<Info[]>([])

  useEffect(() => {
    const req = axios.get("/static/showtime_data.json")
      .then(resp => setInfo(resp.data.info))
  }, [])

  return (
    <div className="rootShowTime">
      <HeaderShowTime />
      <div className="cardsShowTime">
        {R.map(info => <CardShowTime info={{...info, id: v4()}} key={v4()} />, info)}
      </div>
    </div>
  )
}

const CardShowTime: React.FC<{info: InfoWithId}> = props => {

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
      backgroundImage: `url(${getImageUrl(props.info.img)})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderBottom: "1px solid black"
    }
  }

  return (
    <div className="cardShowTime" key={props.info.id}>
      <Link to={props.info.link} style={{width: "100%", height: "60%"}}>
        <div style={imageShowTime()} />
      </Link>
      <div className="cardDescrShowTime">
        {props.info.descr}
      </div>
      <Link to={props.info.link} style={cardButtonLinkShowTime}>
        <div className="cardButtonShowTime">
          Open
        </div>
      </Link>
    </div>
  )
}
