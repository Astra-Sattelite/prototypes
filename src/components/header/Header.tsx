import '../../assets/scss/header.scss'
import * as UI from "@material-ui/core"
import logo from '../../assets/svg/Logo.svg'

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
      <a className="scalableText" href="/">
        Контакты
      </a>
      <a className="scalableText" href="/">
        Личный урок
      </a>
      <a className="scalableText" href="/">
        Помощь проекту
      </a>
    </div>
  )
}