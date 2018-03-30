import React from 'react'
import styled, {css} from 'react-emotion'

const Container = styled.div`
  position: relative;
  font-size: 1rem;

  width: 100%;
  margin: 1.4em 0.8em;
`

const TextInput = styled.input`
  font-weight: 300;
  text-align: left;
  font-size: 1.08em;
  line-height: 1.3em;

  width: 100%;
  padding: 0.5em 0.8em;

  min-width: 13em;
  outline: none;
  transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  border: none;
  border-radius: 4px;

  background: white;
  color: #555;
  border-bottom: 2px solid #555;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);

  &::placeholder {
    color: #999;
  }

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.08);
    box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);
  }

  &:focus + label {
    transform: translateY(-40px) scale(1);
  }
`

// prettier-ignore
const Label = styled.label`
  position: absolute;
  top: 9px;
  left: calc(0.625em + 3px);

  font-size: 1em;
  font-weight: 600;

  cursor: text;
  pointer-events: none;
  transition: transform 0.2s ease-out;

  ${props => props.float && css`
    transform: translateY(-40px) scale(1);
  `};
`

const Input = ({label, input, meta, ...props}) => (
  <Container>
    <TextInput {...input} {...props} />
    <Label float={input.value}>{label}</Label>
  </Container>
)

export default Input
