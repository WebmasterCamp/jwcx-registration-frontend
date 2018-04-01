import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import {Link} from 'react-static'

import Button from '../components/Button'
import {Backdrop, Container, Row, Paper, Heading} from '../components/Layout'

const ChangeDenied = ({camper, match}) => (
  <Backdrop>
    <Container>
      <Paper>
        <Heading>
          คุณไม่สามารถเปลี่ยนสาขาได้อีก หลังจากที่เลือกสาขานั้นๆ ไปแล้ว
        </Heading>

        <Row>
          <Link to={'/' + camper.major}>
            <Button>สมัครสมาชิกต่อในสาขา {camper.major}</Button>
          </Link>

          <a href="https://www.jwc.in.th">
            <Button>กลับสู่เว็บไซต์หลัก</Button>
          </a>
        </Row>
      </Paper>
    </Container>
  </Backdrop>
)

const mapStateToProps = state => ({
  camper: state.camper,
})

const enhance = connect(mapStateToProps)

export default enhance(ChangeDenied)
