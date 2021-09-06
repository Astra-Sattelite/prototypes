import * as UI from "@material-ui/core"
import '../../assets/scss/landing.scss'

export const Landing: React.FC = () => {

  return (
    <div className="container">
      <div className="spaceForNothing">
      </div>
      <Invitation />
      <div className="imageContainer" >
        <div className="landingImage" />
      </div>
    </div>
  )
}

const Invitation: React.FC = () => {
  return (
    <>
      <div className="inviteContainer">
        <p className="scalableTextH">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce u
        </p>

        <p className="scalableTextD">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex odio. Aliquam lobortis quam vitae mauris auctor, a malesuada urna lu
        </p>

        <div className="startButton">
          <div className="startButtonDecoration">
            <p className="scalableTextB">Начать обучение</p>
          </div>
        </div>

      </div>
    </>
  )
}