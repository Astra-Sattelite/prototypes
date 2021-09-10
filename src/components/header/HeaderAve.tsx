import '../../assets/scss/aveMaria/header.scss'

export const HeaderAve: React.FC = () => {

  return (
    <>
      <div className="containerHAve">
        <LinksRow />
      </div>
    </>
  )
}

const LinksRow: React.FC = () => {

  return (
    <div style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <a className="textAve" href="/">
        AVE MARIA!
      </a>
    </div>
  )
}