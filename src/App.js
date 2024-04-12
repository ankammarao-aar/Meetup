import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

const initialTopicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    topicsList: initialTopicsList,
    input: '',
    option: 'ARTS_AND_CULTURE',
    isTrue: false,
    errorMsg: false,
  }

  changeInput = input => {
    this.setState({input})
  }

  changeOption = option => {
    this.setState({option})
  }

  registerName = () => {
    this.setState({isTrue: true})
  }

  updateError = () => {
    this.setState({errorMsg: true})
  }

  render() {
    const {topicsList, input, option, isTrue, errorMsg} = this.state

    return (
      <RegisterContext.Provider
        value={{
          topicsList,
          input,
          option,
          isTrue,
          errorMsg,
          changeInput: this.changeInput,
          changeOption: this.changeOption,
          updateError: this.updateError,
          registerName: this.registerName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
