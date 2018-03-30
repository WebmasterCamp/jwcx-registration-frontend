import React from 'react'
import ReactSelect from 'react-select'
import styled, {css} from 'react-emotion'
import {withProps} from 'recompose'

import withField from './withField'

// prettier-ignore
const Select = styled(ReactSelect)`
  cursor: pointer;

  input {
    border: none;
    background: transparent;
  }

  .Select-placeholder {
    position: absolute;
  }

  .Select-value {
    position: absolute;
  }

  .Select-menu-outer {
    position: absolute;
    z-index: 2;

    width: 100%;
  }

  .Select-arrow-zone {
    position: absolute;
    right: 1em;
  }

  .Select-arrow {
    border-color: #575757 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 2.5px;
    display: inline-block;
    height: 0;
    width: 0;
    position: relative;
  }

  .Select-control {
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

    &:hover {
      box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);
    }

    &:focus,
    &:active {
      transform: scale(1.045);
      box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);
    }

    &:focus + label {
      transform: translateY(-40px) scale(1);
    }

    ${props => props.meta.touched && props.meta.error && css`
      border-bottom: 2px solid #e74c3c;
    `};
  }
`

const optionStyle = css`
  background: white;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
  padding: 0.3em 0.8em;
  cursor: pointer;
  transition: 0.4s cubic-bezier(0.22, 0.61, 0.36, 1) all;

  &:hover {
    transform: scale(1.045);
    font-weight: 500;
    box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);
  }
`

const enhance = withProps(props => ({
  float: true,
  searchable: false,
  clearable: false,
  optionClassName: optionStyle,
  placeholder: 'กรุณาเลือก...',
}))

export default enhance(
  withField(props => (
    <Select
      {...props}
      value={props.value}
      onChange={e => props.onChange(e.value)}
    />
  )),
)
