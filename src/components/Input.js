import styled from 'react-emotion'

// color: hsl(155, 80%, 40%);
// border-bottom: 2px solid hsl(155, 80%, 40%);
// box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
// width: 100%;
const Input = styled.input`
  font-weight: 300;
  border: none;
  border-radius: 4px;
  background: transparent;
  font-size: 1.5em;
  line-height: 1.3em;
  margin-top: 0.5em;
  min-width: 13em;
  outline: none;
  padding: 0.3em;
  text-align: center;
  transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  color: white;
  background: transparent;
  border-bottom: 2px solid white;

  &::placeholder {
    color: white;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export default Input
