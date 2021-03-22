import React from "react";
import { Card, CardBody, CardImg, CardImgOverlay, Col, Row } from "reactstrap";
import {Link, Router} from 'react-router-dom'
import xdvsfig from "./image/xdvsfigma.png";
import rav from "./image/rav.jpeg";
import pvn from "./image/Pvn.png";
import swn from "./image/swn.jpg";
import js from "./image/js.png";
import laravel from "./image/laravel.png";
function Blog() {
  return (
    <>
      <div className="container">
        <Row>
          <Col md={4}>
            <Card id="blogcard" style={{ marginTop: "-70px" }}>
              <CardImg id="blogcardimg" src={xdvsfig} />
              <CardImgOverlay id="blogcardimgoverlay">
                <h3 className="text-light d-flex justify-content-center align-items-center text-center">Blogs details coming soon !!</h3>
              </CardImgOverlay>
              <CardBody id="blogcardbody">
                <h6 className="text-light text-center">Why i prefered <b>Figma</b> over <b>Adobe XD</b></h6>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card id="blogcard" style={{ marginTop: "-70px" }}>
              <CardImg id="blogcardimg" src={rav} />
              <CardImgOverlay id="blogcardimgoverlay">
                <h3 className="text-light d-flex justify-content-center align-items-center text-center">Blogs details coming soon !!</h3>
              </CardImgOverlay>
              <CardBody id="blogcardbody">
                <h6 className="text-light text-center"><b>VueJS</b> vs <b>ReactJS</b> vs <b>Angular</b></h6>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card id="blogcard" style={{ marginTop: "-70px" }}>
              <CardImg id="blogcardimg" src={pvn} />
              <CardImgOverlay id="blogcardimgoverlay">
                <h3 className="text-light d-flex justify-content-center align-items-center text-center">Blogs details coming soon !!</h3>
              </CardImgOverlay>
              <CardBody id="blogcardbody">
                <h6 className="text-light text-center"><b>PHP</b> vs <b>NodeJS</b></h6>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col md={4}>
            <Card id="blogcard" style={{ marginTop: "-70px" }}>
              <CardImg id="blogcardimg" src={swn} />
              <CardImgOverlay id="blogcardimgoverlay">
                <h3 className="text-light d-flex justify-content-center align-items-center text-center">Blogs details coming soon !!</h3>
              </CardImgOverlay>
              <CardBody id="blogcardbody">
                <h6 className="text-light text-center">Payment gateway using <b>Stripe</b> with <b>MERN stack</b></h6>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card id="blogcard" style={{ marginTop: "-70px" }}>
              <CardImg id="blogcardimg" src={js} />
              <CardImgOverlay id="blogcardimgoverlay">
                <h3 className="text-light d-flex justify-content-center align-items-center text-center">Blogs details coming soon !!</h3>
              </CardImgOverlay>
              <CardBody id="blogcardbody">
                <h6 className="text-light text-center">How important is <b>Javascript</b> in web development as a fresher</h6>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card id="blogcard" style={{ marginTop: "-70px" }}>
              <CardImg id="blogcardimg" src={laravel} />
              <CardImgOverlay id="blogcardimgoverlay">
                <h3 className="text-light d-flex justify-content-center align-items-center text-center">Blogs details coming soon !!</h3>
              </CardImgOverlay>
              <CardBody id="blogcardbody">
                <h6 className="text-light text-center"><b>"Laravel"</b> a superstar in web technology?</h6>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Blog;
