import styled from 'styled-components'

export const RegisterContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 280px;
`

export const Form = styled.form``

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  color: #334155;
  margin-top: 0px;
`

export const SubCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: #64748b;
  margin-bottom: 8px;
`

export const Input = styled.input`
  font-family: 'Roboto';
  height: 28px;
  width: 200px;
  color: #000000;
  padding-left: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  outline: none;
`

export const Select = styled.select`
  font-family: 'Roboto';
  height: 28px;
  width: 200px;
  color: #000000;
  padding-left: 10px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  outline: none;
`

export const Option = styled.option`
  font-family: 'Roboto';
  color: #000000;
`

export const Button = styled.button`
  font-family: 'Roboto';
  height: 30px;
  width: 120px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 10px;
  color: #ff0b37;
  margin-top: 4px;
`
