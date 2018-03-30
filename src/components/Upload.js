import React from 'react'
import styled from 'react-emotion'
import ReactDropzone from 'react-dropzone'
import {Icon} from 'antd'

const DropTitle = styled.div`
  color: #555;
  text-align: center;
  font-size: 1.2em;
`

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
  background: white;

  width: 200px;
  height: 200px;

  border-radius: 22px;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`

const DropIcon = styled(Icon)`
  color: #555;
  font-size: 1.8em;

  margin-bottom: 1em;

  padding: 0.5em;
  border: 1px solid #555;
  border-radius: 50%;
`

const Upload = () => (
  <DropZone>
    <DropIcon type="upload" />
    <DropTitle>อัพโหลดรูปประจำตัว</DropTitle>
  </DropZone>
)

export default Upload
