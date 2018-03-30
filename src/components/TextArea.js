import {TextInput} from './Input'
import withField from './withField'

const TextAreaInput = TextInput.withComponent('textarea')

export default withField(TextAreaInput)
