import React from 'react'
import './sass/header.sass'
import logo from './images/Logo.svg'
import { v4 as uuidv4 } from "uuid"
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
        <div className="containerAccHeaderNihongo">
          <p className="accHeaderNihongo">имя_пользователя</p>
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
    <div className="flexContainerLinksHeaderNihongo">
      {infos.map(
        info =>
          <Link key={uuidv4()} className="textHeaderNihongo" to={info.link}>
            {info.text}
          </Link>
      )}
    </div>
  )
}