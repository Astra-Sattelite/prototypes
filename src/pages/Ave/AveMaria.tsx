import React from 'react'
import './sass/landing.sass'
import { HeaderAve } from "./HeaderAve"

export const AveMaria: React.FC = () => {

  return (
    <div className="rootAve">
      <HeaderAve />
      <div className="flexContainerLandingAve">

        <div className="landingImageAve" />

        <div className="flexContainerInvitationAve">
          <div className="invitationTextAve">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis, mi ut consectetur rhoncus, felis mi consequat velit, quis imperdiet massa risus in ligula. In sed interdum justo. Suspendisse pellentesque quam arcu, ac facilisis metus bibendum ac. Maecenas at urna tincidunt, efficitur ipsum eget, imperdiet augue. Pellentesque ut neque vel erat accumsan malesuada. Sed aliquet orci sed ligula elementum, quis mattis urna venenatis. Vestibulum porta nisl sed odio lacinia aliquet. Sed mollis quis est vitae imperdiet. Maecenas ex massa, auctor euismod dolor non, posuere ultricies augue. Sed in ullamcorper velit. Fusce facilisis non sem quis tempor. Sed aliquam rutrum vulputate. Curabitur at leo ac massa pharetra tempus congue et augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis, mi ut consectetur rhoncus, felis mi consequat velit, quis imperdiet massa risus in ligula. In sed interdum justo. Suspendisse pellentesque quam arcu, ac facilisis metus bibendum ac. Maecenas at urna tincidunt, efficitur ipsum eget, imperdiet augue. Pellentesque ut neque vel erat accumsan malesuada. Sed aliquet orci sed ligula elementum, quis mattis urna venenatis. Vestibulum porta nisl sed odio lacinia aliquet. Sed mollis quis est vitae imperdiet. Maecenas ex massa, auctor euismod dolor non, posuere ultricies augue. Sed in ullamcorper velit. Fusce facilisis non sem quis tempor. Sed aliquam rutrum vulputate. Curabitur at leo ac massa pharetra tempus congue et augue.
          </div>
          <div className="invitationStartButtonAve">
            <p>
              Join The Crusade!
            </p>
          </div>
        </div>

        <div className="landingImageAve" />
      </div>
    </div>
  )
}

