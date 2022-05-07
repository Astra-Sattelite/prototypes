import React, { useEffect, useState } from 'react'
import "./sass/landing.sass"
import axios from "axios"

import * as R from "ramda"
import { HeaderShowTime } from './HeaderShowTime'
import CSS from 'csstype'
import { v4 } from 'uuid'
import { Link } from "react-router-dom"
import { AppSelector, use } from '../../../utils'
import { getShowTimeData, selectInfo } from './showTimeSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store'

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

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getShowTimeData())
  }, [])

  const info = use(selectInfo)

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

  const getImageUrl = (path: string) => {
    return new URL(path, import.meta.url).href
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
