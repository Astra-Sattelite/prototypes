import React from 'react'
import './sass/header.sass'
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

interface Info
  { text: string
  , link: string
  , id: string
  }

export const HeaderShowTime: React.FC = () => {

  const infoHash: Info[] =
    [ {text: "Root", link: "/", id: uuidv4()}
    , {text: "Nihongo Gaijin", link: "/ng", id: uuidv4()}
    , {text: "Ave Maria", link: "/ave", id: uuidv4()}
    , {text: "Holo Store", link: "/holo", id: uuidv4()}
    ]

  return (
    <div className="containerHShowTime">
      {infoHash.map(info => HeaderButton(info))}
    </div>
  )
}

const HeaderButton = (info: Info): JSX.Element => {
  return (
    <Link to={info.link} key={info.id} className="linkShowTime">
      {info.text}
    </Link>
  )
}
