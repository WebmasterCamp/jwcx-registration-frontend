import React from 'react'
import styled, {css} from 'react-emotion'
import {Field} from 'redux-form'

// prettier-ignore
const Container = styled.div`
  position: relative;
  font-size: 1rem;

  width: 100%;
  margin: 1.4em 0.8em;

  ${props => props.wordy && css`
    margin: 0.4em 0.8em;
  `};
`

// prettier-ignore
const Label = styled.label`
  position: absolute;
  top: 9px;
  left: calc(0.625em + 3px);
  z-index: 1;

  font-size: 1em;
  font-weight: 600;

  cursor: text;
  pointer-events: none;
  transition: transform 0.2s ease-out;

  white-space: pre-line;
  word-break: break-word;
  word-wrap: break-word;

  ${props => props.float && css`
    transform: translateY(-40px) scale(1);
  `};

  ${props => props.wordy && css`
    position: static;
    display: block;

    margin-bottom: 0.6em;
    transform: none !important;
    pointer-events: all;
  `};

  ${props => props.meta.touched && props.meta.error && css`
    color: #e74c3c;
  `};
`

const ErrorMessage = styled.div`
  position: absolute;
  font-size: 0.9em;
  bottom: 15%;
  right: 3%;

  color: #ee5253;
  font-weight: 600;

  pointer-events: none;
`

const wrap = Component => ({label, input, meta, float, wordy, ...props}) => (
  <Container wordy={wordy}>
    <Label float={input.value || float} wordy={wordy} meta={meta}>
      {label}
    </Label>

    <Component meta={meta} {...input} {...props} />

    {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
  </Container>
)

const withField = Component => {
  const InputField = wrap(Component)

  return props => <Field component={InputField} {...props} />
}

export default withField
