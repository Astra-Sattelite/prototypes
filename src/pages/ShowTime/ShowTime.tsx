import React, { useEffect, useState } from 'react'
import "./sass/landing.sass"
import L from "lodash"
import CSS from 'csstype'
import { v4 } from 'uuid'
import { Link } from "react-router-dom"
import { use } from '../../../utils';
import { getShowTimeData, selectInfo } from './showTimeSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'

import { HeaderShowTime } from './HeaderShowTime'
import { selectWidth } from '../../appSlice'

type InfoWithId =
  { img: string
  , descr: string
  , link: string
  , id: string
  }

const ShowTime = () => {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getShowTimeData())
  }, [])

  const infos = use(selectInfo)

  const infosWithId = L.map(infos, info => ({...info, id: v4()}))

  const isMobile = use(selectWidth) <= 768

  const isTablet = use(selectWidth) <= 1024

  return (
    <div className="rootShowTime">
      <HeaderShowTime />
      <div className={
        isMobile
          ? "cardsShowTime-Mobile"
          : isTablet
            ? "cardsShowTime-Tablet"
            : "cardsShowTime"
      }>
        {L.map(infosWithId, info => <CardShowTime info={info} key={info.id} />)}
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
      backgroundColor: "transparent",
      backgroundImage: `url(${getImageUrl(props.info.img)})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "contain"
    }
  }

  const isMobile = use(selectWidth) <= 768

  const isTablet = use(selectWidth) <= 1024

  return (
    <div className={
      isMobile
        ? "cardShowTime-Mobile"
        : isTablet
          ? "cardShowTime-Tablet"
          : "cardShowTime"
      } key={props.info.id}
    >
      <Link to={props.info.link} className="cardImageContainerShowTime">
        <div style={imageShowTime()} />
      </Link>
      <p className="cardDescrShowTime">
        {props.info.descr}
      </p>
      <Link to={props.info.link} style={cardButtonLinkShowTime}>
        <div className="cardButtonShowTime">
          <p>Open</p>
        </div>
      </Link>
    </div>
  )
}

export const MemoizedShowTime = React.memo(ShowTime)