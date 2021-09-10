import '../../assets/scss/nihongo/header.scss'
import * as UI from "@material-ui/core"
import logo from '../../assets/svg/nihongo/Logo.svg'

import React from 'react'

import { 
  Link
} from "react-router-dom"


export const HeaderNihongo: React.FC = () => {

  return (
    <>
      <div className="containerHNihongo">
        <Logo />
        <LinksRow />
        <div>
          <UI.Button variant="outlined" className="acc">
            dsdasd
          </UI.Button>
        </div>
      </div>
    </>
  )
}

const Logo: React.FC = () => {
  return (
    <img src={logo} alt={"Logo.svg"} className="logoNihongo" />
  )
}

const LinksRow: React.FC = () => {

  return (
    <div style={{height: "100%", width: "60%", display: "flex", flexDirection: "row"}}>
      <Link className="scalableTextNihongo" to="/">
        Контакты
      </Link>
      <Link className="scalableTextNihongo" to="/">
        Личный урок
      </Link>
      <Link className="scalableTextNihongo" to="/">
        Помощь проекту
      </Link>
    </div>
  )
}