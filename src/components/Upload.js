import React, {Component} from 'react'
import {connect} from 'react-redux'
import styled, {css} from 'react-emotion'
import ReactDropzone from 'react-dropzone'
import {message, Icon} from 'antd'
import firebase from 'firebase'

// prettier-ignore
const DropZone = styled(ReactDropzone)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  cursor: pointer;
  padding: 1.8em 2.2em;
  margin-bottom: 3.2em;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 3px 18.5px 2px rgba(0, 0, 0, 0.18);

  margin: 0 auto;
  margin-bottom: 3.8em;

  width: 200px;
  height: 200px;

  border-radius: 22px;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }

  ${props => props.preview && css`
    background-image: url(${props.preview});
    background-size: cover;
    background-repeat: no-repeat;
  `};
`

// prettier-ignore
const DropIcon = styled(Icon)`
  color: #555;
  font-size: 1.8em;

  margin-bottom: 1em;

  padding: 0.5em;
  border: 1px solid #555;
  border-radius: 50%;
`

// prettier-ignore
const DropTitle = styled.div`
  color: #555;
  text-align: center;
  font-size: 1.2em;
`

// prettier-ignore
const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100%;

  ${props => props.active && css`
    opacity: 0;

    &:hover {
      opacity: 1;
    }
  `};
`

class Upload extends Component {
  state = {
    preview: null,
  }

  async componentWillReceiveProps(props) {
    if (this.props.uid !== props.uid) {
      const {uid} = props

      const storage = firebase.storage().ref()
      const avatar = storage.child(`avatar/${uid}.jpg`)

      try {
        const url = await avatar.getDownloadURL()
        console.log('Avatar URL', url)

        this.setState({preview: url})
      } catch (err) {
        if (err.code === 'storage/object-not-found') {
          console.info('User', uid, 'has not uploaded an avatar yet.')
        } else {
          console.warn(err.message)
        }
      }
    }
  }

  onDrop = async (acceptedFiles, rejectedFiles) => {
    try {
      const {uid} = this.props

      const storage = firebase.storage().ref()
      const avatar = storage.child(`avatar/${uid}.jpg`)

      const [file] = acceptedFiles
      this.setState({preview: file.preview})

      const snapshot = await avatar.put(file)

      console.log('Avatar File:', file)
      console.log('Uploaded Avatar:', snapshot)

      message.success('อัพโหลดรูปประจำตัวเรียบร้อยแล้ว')
    } catch (err) {
      message.error(err.message)
    }
  }

  render() {
    const {preview} = this.state

    return (
      <DropZone onDrop={this.onDrop} preview={preview}>
        <Overlay active={preview}>
          <DropIcon type="upload" />
          <DropTitle>อัพโหลดรูปประจำตัว</DropTitle>
        </Overlay>
      </DropZone>
    )
  }
}

const mapStateToProps = state => ({
  uid: state.user.uid,
})

const enhance = connect(mapStateToProps)

export default enhance(Upload)
