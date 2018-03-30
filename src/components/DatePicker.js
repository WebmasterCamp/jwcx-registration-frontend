import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'

import 'react-day-picker/lib/style.css'

import {TextInput} from './Input'
import withField from './withField'

import {withFocus} from '../core/util'

const Input = withFocus(TextInput)

const DatePicker = props => (
  <DayPickerInput
    {...props}
    component={Input}
    inputProps={props}
    onDayChange={props.onChange}
    required
  />
)

export default withField(DatePicker)
