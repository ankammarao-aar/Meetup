import React from 'react'

const RegisterContext = React.createContext({
  topicsList: [],
  input: '',
  option: 'ARTS_AND_CULTURE',
  isTrue: false,
  changeInput: () => {},
  changeOption: () => {},
  errorMsg: false,
  updateError: () => {},
  registerName: () => {},
})

export default RegisterContext
