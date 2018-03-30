import React from 'react'
import styled from 'react-emotion'
import {connect} from 'react-redux'
import {Link} from 'react-static'

import Button from '../components/Button'
import {Heading} from '../components/Layout'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  padding: 1em;

  min-height: 100vh;
`

const Row = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`

const ChangeDenied = ({camper, match}) => (
  <Page>
    <Heading>
      คุณไม่สามารถเปลี่ยนสาขาได้อีก หลังจากที่เลือกสาขานั้นๆ ไปแล้ว
    </Heading>

    <Row>
      <Link to={'/' + camper.major}>
        <Button>สมัครสมาชิกต่อในสาขา {camper.major}</Button>
      </Link>

      <a href="https://x.jwc.in.th">
        <Button>กลับสู่เว็บไซต์หลัก</Button>
      </a>
    </Row>
  </Page>
)

const mapStateToProps = state => ({
  camper: state.camper,
})

const enhance = connect(mapStateToProps)

export default enhance(ChangeDenied)
