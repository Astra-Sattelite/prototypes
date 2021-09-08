import '../../assets/scss/landing.scss'

export const Nihongo: React.FC = () => {

  return (
    <div className="containerNihon">
      <div className="spaceForNothingNihon">
      </div>
      <Invitation />
      <div className="imageContainerNihon" >
        <div className="landingImageNihon" />
      </div>
    </div>
  )
}

const Invitation: React.FC = () => {
  return (
    <>
      <div className="inviteContainerNihon">
        <p className="scalableTextHNihon">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce u
        </p>

        <p className="scalableTextDNihon">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex odio. Aliquam lobortis quam vitae mauris auctor, a malesuada urna lu
        </p>

        <div className="startButtonNihon">
          <div className="startButtonDecorationNihon">
            <p className="scalableTextBNihon">Начать обучение</p>
          </div>
        </div>
      </div>
    </>
  )
}