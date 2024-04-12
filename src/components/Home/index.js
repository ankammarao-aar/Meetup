import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeContainer,
  Heading,
  MeetHeading,
  MeetPara,
  Para,
  Button,
  Image,
} from './styledComponents'

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const {input, option, isTrue} = value

        return (
          <>
            <Header />
            {isTrue ? (
              <HomeContainer>
                <MeetHeading>Hello {input}</MeetHeading>
                <MeetPara>Welcome to {option}</MeetPara>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <Heading>Welcome to Meetup</Heading>
                <Para>Please register for the topic</Para>
                <Link to="/register">
                  <Button type="button" onClick={onClickRegister}>
                    Register
                  </Button>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
