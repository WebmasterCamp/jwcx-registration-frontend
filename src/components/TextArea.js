import {withProps} from 'recompose'

import {TextInput} from './Input'
import withField from './withField'

const TextArea = TextInput.withComponent('textarea')

const TextAreaInput = withProps({rows: 5})(TextArea)

export default withField(TextAreaInput)
