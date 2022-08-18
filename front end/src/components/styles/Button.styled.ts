import styled from 'styled-components'

export const Button = styled.button`
  background: linear-gradient(to right, #bf00ff, #0000cc);
  height: 30px;
  border: 0;
  border-radius: 10px;
  color: white;
  padding: 10px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: .4s;
  &:hover {
    background: linear-gradient(to right, #0000cc, #bf00ff);
  }
`