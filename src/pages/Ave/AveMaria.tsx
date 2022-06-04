import React from 'react'
import './sass/landing.sass'
import { HeaderAve } from "./HeaderAve"
import { use } from '../../../utils'
import { selectWidth } from '../../appSlice'

export const AveMaria: React.FC = () => {

  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis, mi ut consectetur rhoncus, felis mi consequat velit, quis imperdiet massa risus in ligula. In sed interdum justo. Suspendisse pellentesque quam arcu, ac facilisis metus bibendum ac. Maecenas at urna tincidunt, efficitur ipsum eget, imperdiet augue. Pellentesque ut neque vel erat accumsan malesuada. Sed aliquet orci sed ligula elementum, quis mattis urna venenatis. Vestibulum porta nisl sed odio lacinia aliquet. Sed mollis quis est vitae imperdiet. Maecenas ex massa, auctor euismod dolor non, posuere ultricies augue. Sed in ullamcorper velit. Fusce facilisis non sem quis tempor. Sed aliquam rutrum vulputate. Curabitur at leo ac massa pharetra tempus congue et augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis, mi ut consectetur rhoncus, felis mi consequat velit, quis imperdiet massa risus in ligula. In sed interdum justo. Suspendisse pellentesque quam arcu, ac facilisis metus bibendum ac. Maecenas at urna tincidunt, efficitur ipsum eget, imperdiet augue. Pellentesque ut neque vel erat accumsan malesuada. Sed aliquet orci sed ligula elementum, quis mattis urna venenatis. Vestibulum porta nisl sed odio lacinia aliquet. Sed mollis quis est vitae imperdiet. Maecenas ex massa, auctor euismod dolor non, posuere ultricies augue. Sed in ullamcorper velit. Fusce facilisis non sem quis tempor. Sed aliquam rutrum vulputate. Curabitur at leo ac massa pharetra tempus congue et augue."

  const exorcismText = "Exorcizo te, immundissime spiritus, omnis incursio adversarii, omne phantasma, omnis legio, in nomine Domini nostri Jesu Christi eradicare, et effugare ab hoc plasmate Dei. Ipse tibi imperat, qui te de supernis caelorum in inferiora terrae demergi praecepit. Ipse tibi imperat, qui mari, ventis, et tempestatibus impersvit. Audi ergo, et time, satana, inimice fidei, hostis generis humani, mortis adductor, vitae raptor, justitiae declinator, malorum radix, fomes vitiorum, seductor hominum, proditor gentium, incitator invidiae, origo avaritiae, causa discordiae, excitator dolorum: quid stas, et resistis, cum scias. Christum Dominum vias tuas perdere? Illum metue, qui in Isaac immolatus est, in joseph venumdatus, in sgno occisus, in homine cruci- fixus, deinde inferni triumphator fuit. Sequentes cruces fiant in fronte obsessi. Recede ergo in nomine Patris et Filii, et Spiritus Sancti: da locum Spiritui Sancto, per hoc signum sanctae Cruci Jesu Christi Domini nostri: Qui cum Patre et eodem Spiritu Sancto vivit et regnat Deus, Per omnia saecula saeculorum. Et cum spiritu tuo. Amen."

  const isMobile = use(selectWidth) <= 768

  return (
    <div className="rootAve">
      <p className="backgroundTextAve">
        {exorcismText.repeat(100)}
      </p>
      <HeaderAve />
      <div className="flexContainerLandingAve">

        <div className="landingImageAve" />

        <div className="flexContainerInvitationAve">
          <div className="invitationTextAve">
            {text}
          </div>
          <div className={isMobile ? "buttonSectionAve-Mobile" : "buttonSectionAve"}>
            {isMobile ? <></> : <div className="buttonSectionIconAve" />}

            <div className="invitationStartButtonAve">
              <p>
                Join The Crusade!
              </p>
            </div>

            {isMobile ? <></> : <div className="buttonSectionIconAve" />}
          </div>
        </div>

        <div className="landingImageAve">

        </div>
      </div>
      <div className='t'>some</div>
    </div>
  )
}
