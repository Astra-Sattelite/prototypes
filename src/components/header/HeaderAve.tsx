import '../../assets/scss/aveMaria/headerAve.scss'

export const HeaderAve: React.FC = () => {

  return (
    <>
      <div className="containerH">
        <LinksRow />
      </div>
    </>
  )
}

const LinksRow: React.FC = () => {

  return (
    <div style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <a className="aveText" href="/">
        AVE MARIA!
      </a>
    </div>
  )
}