import '../../assets/scss/header.scss'
import * as UI from "@material-ui/core"
import logo from '../../assets/svg/Logo.svg'

import React from 'react'

import { 
  Link
} from "react-router-dom"


export const Header: React.FC = () => {

  return (
    <>
      <div className="containerH">
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
    <img src={logo} alt={"Logo.svg"} className="logo" />
  )
}

const LinksRow: React.FC = () => {

  return (
    <div style={{height: "100%", width: "60%", display: "flex", flexDirection: "row"}}>
      <Link className="scalableText" to="/">
        Контакты
      </Link>
      <Link className="scalableText" to="/">
        Личный урок
      </Link>
      <Link className="scalableText" to="/">
        Помощь проекту
      </Link>
    </div>
  )
}