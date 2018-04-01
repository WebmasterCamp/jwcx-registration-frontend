import React from 'react'
import {css} from 'react-emotion'
import Image from 'react-medium-image-zoom'

import {Programming} from '../core/questions'
import devAssignment from '../assets/dev_assignment.png'

const imageStyle = css`
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 100%;

  margin-top: 0.8em;
  margin-bottom: 0.8em;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
`

const image = {src: devAssignment, alt: 'รูปเว็บไซต์'}

const Q3Dev = (
  <div>
    <span>{Programming.Q3}</span>

    <Image image={{...image, className: imageStyle}} imageZoom={image} />
  </div>
)

export default Q3Dev
