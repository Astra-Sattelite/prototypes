import '../../assets/scss/nihongo/landing.scss'
import { HeaderNihongo } from '../header/HeaderNihongo'

export const Nihongo: React.FC = () => {

  return (
    <div className="rootNihongo">
      <HeaderNihongo />
      <div className="flexContainerNihongo">
        <div className="containerEmptyNihongo" />
        <Invitation />
        <div className="landingImageNihongo" />
      </div>
    </div>
  )
}

const Invitation: React.FC = () => {
  return (
    <>
      <div className="flexContainerInviteNihongo">
        <p className="textInvitationNihongo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce u
        </p>

        <p className="textInvitationNihongo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex odio. Aliquam lobortis quam vitae mauris auctor, a malesuada urna lu
        </p>

        <div className="containerStartButtonNihongo">
          <div className="startButtonNihongo">
            <p>Начать обучение</p>
          </div>
        </div>
      </div>
    </>
  )
}