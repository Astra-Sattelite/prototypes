import '../../assets/scss/nihongo/landing.scss'
import { HeaderNihongo } from '../header/HeaderNihongo'

export const Nihongo: React.FC = () => {

  return (
    <div className="rootNihongo">
      <HeaderNihongo />
      <div className="containerNihongo">
        <div className="spaceForNothingNihongo">
        </div>
        <Invitation />
        <div className="imageContainerNihongo" >
          <div className="landingImageNihongo" />
        </div>
      </div>
    </div>
  )
}

const Invitation: React.FC = () => {
  return (
    <>
      <div className="inviteContainerNihongo">
        <p className="scalableTextHNihongo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce u
        </p>

        <p className="scalableTextDNihongo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex odio. Aliquam lobortis quam vitae mauris auctor, a malesuada urna lu
        </p>

        <div className="startButtonNihongo">
          <div className="startButtonDecorationNihongo">
            <p className="scalableTextBNihongo">Начать обучение</p>
          </div>
        </div>
      </div>
    </>
  )
}