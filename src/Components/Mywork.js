import React from 'react'
import { Button, Card, CardImg, CardImgOverlay, Col, Row } from 'reactstrap'
import mw1 from './image/mw2.jpg'
import mw2 from './image/mw3.jpg'
import mw3 from './image/mw4.jpg'
import mw4 from './image/mw5.jpg'
import mw5 from './image/mw6.jpg'
import mw6 from './image/mw7.jpg'
import mw7 from './image/mw9.jpg'
import mw8 from './image/mw10.jpg'
function Mywork() {
    return (
        <div className="container">
            <Row>
                <Col md={3}>
                    <Card id="mwcard">
                        <CardImg src={mw1} id="cardimgmw" />
                        <CardImgOverlay>
                            <a href="https://www.instagram.com/p/CEwqRkRAof9/" style={{textDecoration:"none"}}><Button id="okbtn1">See Post</Button></a>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col md={3}>
                <Card id="mwcard">
                        <CardImg src={mw2} id="cardimgmw" />
                        <CardImgOverlay>
                            <a href="https://www.instagram.com/p/CEo3fAmgHWq/" style={{textDecoration:"none"}}><Button id="okbtn1">See Post</Button></a>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col md={3}>
                <Card id="mwcard">
                        <CardImg src={mw3} id="cardimgmw" />
                        <CardImgOverlay>
                        <a href="https://www.instagram.com/p/CEjkgm2A6iI/" style={{textDecoration:"none"}}><Button id="okbtn1">See Post</Button></a>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col md={3}>
                <Card id="mwcard">
                        <CardImg src={mw4} id="cardimgmw" />
                        <CardImgOverlay>
                        <a href="https://www.instagram.com/p/CEE5juNH0xs/" style={{textDecoration:"none"}}><Button id="okbtn1">See Post</Button></a>
                        </CardImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5 mb-5">
                <Col md={3}>
                    <Card id="mwcard">
                        <CardImg src={mw5} id="cardimgmw" />
                        <CardImgOverlay>
                        <a href="https://www.instagram.com/p/CD4Ce9EHJ44/" style={{textDecoration:"none"}}><Button id="okbtn1">See Post</Button></a>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col md={3}>
                <Card id="mwcard">
                        <CardImg src={mw6} id="cardimgmw" />
                        <CardImgOverlay>
                        <a href="https://www.instagram.com/p/CD1cRwIna_I/" style={{textDecoration:"none"}}><Button id="okbtn1">See Post</Button></a>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col md={3}>
                <Card id="mwcard">
                        <CardImg src={mw7} id="cardimgmw" />
                        <CardImgOverlay>
                        <a href="https://www.instagram.com/p/CDjcippB0E5/" style={{textDecoration:"none"}}><Button id="okbtn1">See Post</Button></a>
                        </CardImgOverlay>
                    </Card>
                </Col>
                <Col md={3}>
                <Card id="mwcard">
                        <CardImg src={mw8} id="cardimgmw" />
                        <CardImgOverlay>
                        <a href="https://www.instagram.com/p/CEmIwuPgdyB/" style={{textDecoration:"none"}}><Button id="okbtn1">See Post</Button></a>
                        </CardImgOverlay>
                    </Card>
                </Col>
            </Row>
            <a href="https://www.instagram.com/ui_ux__designer/?hl=en" style={{textDecoration:"none"}}><Button className="d-flex mb-5 mx-auto" id="seemorebtn">See more</Button></a>
        </div>
    )
}

export default Mywork
