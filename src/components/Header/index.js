import {withRouter, Link} from 'react-router-dom'

import {HeaderContainer, HeaderLogo} from './styledComponents'

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <HeaderLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </HeaderContainer>
)

export default withRouter(Header)
