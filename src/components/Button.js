import React from 'react'
import Ink from 'react-ink'
import styled, {css} from 'react-emotion'

// prettier-ignore
const ButtonContainer = styled.button`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  height: 3em;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  align-self: center;
  border-radius: 3px;
  background: #2c3e50;
  appearance: none;
  border: 0;
  margin-left: 1em;
  cursor: pointer;
  color: #efefef;
  font-size: 1.3em;
  letter-spacing: 0.1em;
  line-height: 2em;
  outline: none;
  padding: 0.5em 1.4em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    background: #34495e;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }

  ${props => props.disabled && css`
    background: #95afc0;

    &:hover {
      background: #95afc0;
    }
  `};
`

const Button = ({children, ...props}) => (
  <ButtonContainer {...props}>
    {children}
    <Ink />
  </ButtonContainer>
)

export default Button
