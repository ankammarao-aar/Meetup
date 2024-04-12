import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  Image,
  Form,
  Heading,
  SubCard,
  Label,
  Input,
  Select,
  Option,
  Button,
  ErrorMsg,
} from './styledComponents'

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        topicsList,
        input,
        option,
        errorMsg,
        changeInput,
        changeOption,
        updateError,
        registerName,
      } = value

      const onChangeInput = event => {
        changeInput(event.target.value)
      }

      const onChangeOption = event => {
        changeOption(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()
        if (input !== '' && option !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      return (
        <>
          <Header />
          <RegisterContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <Form onSubmit={onSubmitForm}>
              <Heading>Let us join</Heading>
              <SubCard>
                <Label htmlFor="name">NAME</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={input}
                  onChange={onChangeInput}
                />
              </SubCard>

              <SubCard>
                <Label htmlFor="topics">TOPICS</Label>
                <Select id="topics" value={option} onChange={onChangeOption}>
                  {topicsList.map(each => (
                    <Option key={each.id} value={each.id}>
                      {each.displayText}
                    </Option>
                  ))}
                </Select>
              </SubCard>

              <Button type="submit">Register Now</Button>
              {errorMsg ? <ErrorMsg>Please enter your name</ErrorMsg> : null}
            </Form>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
