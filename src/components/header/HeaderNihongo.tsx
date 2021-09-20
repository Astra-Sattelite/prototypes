import '../../assets/scss/nihongo/header.scss'
import logo from '../../assets/svg/nihongo/Logo.svg'
import { v4 as uuidv4 } from "uuid"

import React from 'react'
import { Link } from "react-router-dom"

interface HeaderInfo 
  { text: string
  , link: string
  }


export const HeaderNihongo: React.FC = () => {

  const headerHash: HeaderInfo[] =
    [ {text: "Контакты", link: "/"}
    , {text: "Личный урок", link: "/"}
    , {text: "Помощь проекту", link: "/"}
    ]

  return (
    <>
      <div className="flexContainerHeaderNihongo">
        <Logo />
        {Links(headerHash)}
        <div className="accHeaderNihongo">
          <p>имя_пользователя</p>
        </div>
      </div>
    </>
  )
}

const Logo: React.FC = () => {
  return (
    <img src={logo} alt={"Logo.svg"} className="logoHeaderNihongo" />
  )
}

const Links = (infos: HeaderInfo[]): JSX.Element => {

  return (
    <>
      {infos.map(
        info =>
          <Link key={uuidv4()} className="textHeaderNihongo" to={info.link}>
            {info.text}
          </Link>
      )}
    </>
  )
}