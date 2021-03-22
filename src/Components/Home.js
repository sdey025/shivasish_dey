import React, { useState } from "react";
import Logo from "./image/logo.png";
import {
  Card,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Row,
  Col,
} from "reactstrap";

import swal from "sweetalert";
import {
  FaCuttlefish,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedin,
} from "react-icons/fa";

import MainContent from "./MainContent";
import Resume from "./Resume";
import Blog from "./Blog";
import Mywork from "./Mywork";
import { FiMenu } from "react-icons/fi";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [navigate, setnavigate] = useState(0);
  const resume = () => {
    setnavigate(1);
  };
  const seeblog = () => {
    setnavigate(2)
  }
  const about = () => {
    setnavigate(0)
  }
  const work = () => {
    setnavigate(3)
  }
  console.log();
  if (navigate == 0) {
    return (
      <>
        <Card id="card">
          <br />
          <Navbar color="transparent" light expand="md">
            <Row id="navrow">
              <Col xs={6}>
                <NavbarBrand
                  href="/"
                  style={{ fontSize: "30px", fontWeight: "bold",position:"relative", top:"10px" }}
                  className="text-light"
                >
                  <Row>
                    <Col md={3}>
                      <img src={Logo} className="mt-3" id="img" />
                    </Col>
                    <Col md={9}>
                      <article className="mt-3 ml-3" id="header">
                        Shivasish Dey
                      </article>
                    </Col>
                  </Row>
                </NavbarBrand>
              </Col>
              <Col xs={6}>
                <NavbarToggler onClick={toggle} id="coll" ><FiMenu id="ee" /></NavbarToggler>
              </Col>
            </Row>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto mr-5" navbar>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={resume} href="#">
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={seeblog} href="#">
                    Blogs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={about} href="#">
                    About me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={work} href="#">
                    My Works
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <br />
          <br />
          <br />
          <br />
          <MainContent />
          <div id="line"></div>
          <Row>
            <h5 className="text-secondary ml-5 my-3" id="hh">
            Connect with me on: <a href="https://www.instagram.com/ui_ux__designer/?hl=en"><FaInstagram id="insta" className="mb-1" /></a>{" "}
              <a href="https://www.facebook.com/coming.sd/"><FaFacebook id="fb" className="mb-1 ml-1" /></a>{" "}
              <a href="https://github.com/sdey025"><FaGithub className="mb-1 ml-1 text-light" /></a>{" "}
              <a href="https://www.linkedin.com/in/shivasish-dey-2a7ba353/"><FaLinkedin id="lkin" className="mb-1 ml-1" /></a>{" "}
              <a href="https://dribbble.com/sdey025"><FaDribbble id="drbl" className="mb-1 ml-1" /></a>{" "}
            </h5>
            <h5 className="text-secondary my-3" id="last">
              © 2021 All rights reserved{" "}
            </h5>
          </Row>
        </Card>
      </>
    );
  } else if (navigate == 1) {
    return (
      <>
        <Card id="card">
          <br />
          <Navbar color="transparent" light expand="md">
            <Row id="navrow">
              <Col xs={6}>
                <NavbarBrand
                  href="/"
                  style={{ fontSize: "30px", fontWeight: "bold",position:"relative", top:"10px" }}
                  className="text-light"
                >
                  <Row>
                    <Col md={3}>
                      <img src={Logo} className="mt-3" id="img" />
                    </Col>
                    <Col md={9}>
                      <article className="mt-3 ml-3" id="header">
                        Shivasish Dey
                      </article>
                    </Col>
                  </Row>
                </NavbarBrand>
              </Col>
              <Col xs={6}>
                <NavbarToggler onClick={toggle} id="coll" ><FiMenu id="ee" /></NavbarToggler>
              </Col>
            </Row>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto mr-5" navbar>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={resume} href="#">
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={seeblog} href="#">
                    Blogs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={about} href="#">
                    About me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={work} href="#">
                  My Works
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <br />
          <br />
          <br />
          <br />
          <Resume />
          <div id="line"></div>
          <Row>
            <h5 className="text-secondary ml-5 my-3" id="hh">
              Connect with me on: <a href="https://www.instagram.com/ui_ux__designer/?hl=en"><FaInstagram id="insta" className="mb-1" /></a>{" "}
              <a href="https://www.facebook.com/coming.sd/"><FaFacebook id="fb" className="mb-1 ml-1" /></a>{" "}
              <a href="https://github.com/sdey025"><FaGithub className="mb-1 ml-1 text-light" /></a>{" "}
              <a href="https://www.linkedin.com/in/shivasish-dey-2a7ba353/"><FaLinkedin id="lkin" className="mb-1 ml-1" /></a>{" "}
              <a href="https://dribbble.com/sdey025"><FaDribbble id="drbl" className="mb-1 ml-1" /></a>{" "}
            </h5>
            <h5 className="text-secondary my-3" id="last">
              © 2021 All rights reserved{" "}
            </h5>
          </Row>
        </Card>
      </>
    );
  }
  else if(navigate == 2){
    return (
      <>
        <Card id="card">
          <br />
          <Navbar color="transparent" light expand="md">
            <Row id="navrow">
              <Col xs={6}>
                <NavbarBrand
                  href="/"
                  style={{ fontSize: "30px", fontWeight: "bold", position:"relative", top:"10px" }}
                  className="text-light"
                >
                  <Row>
                    <Col md={3}>
                      <img src={Logo} className="mt-3" id="img" />
                    </Col>
                    <Col md={9}>
                      <article className="mt-3 ml-3" id="header">
                        Shivasish Dey
                      </article>
                    </Col>
                  </Row>
                </NavbarBrand>
              </Col>
              <Col xs={6}>
                <NavbarToggler onClick={toggle} id="coll" ><FiMenu id="ee" /></NavbarToggler>
              </Col>
            </Row>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto mr-5" navbar>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={resume} href="#">
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={seeblog} href="#">
                    Blogs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={about} href="#">
                    About me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={work} href="#">
                  My Works
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <br />
          <br />
          <br />
          <br />
          <Blog />
          <div id="line"></div>
          <Row>
            <h5 className="text-secondary ml-5 my-3" id="hh">
            Connect with me on: <a href="https://www.instagram.com/ui_ux__designer/?hl=en"><FaInstagram id="insta" className="mb-1" /></a>{" "}
              <a href="https://www.facebook.com/coming.sd/"><FaFacebook id="fb" className="mb-1 ml-1" /></a>{" "}
              <a href="https://github.com/sdey025"><FaGithub className="mb-1 ml-1 text-light" /></a>{" "}
              <a href="https://www.linkedin.com/in/shivasish-dey-2a7ba353/"><FaLinkedin id="lkin" className="mb-1 ml-1" /></a>{" "}
              <a href="https://dribbble.com/sdey025"><FaDribbble id="drbl" className="mb-1 ml-1" /></a>{" "}
            </h5>
            <h5 className="text-secondary my-3" id="last">
              © 2021 All rights reserved{" "}
            </h5>
          </Row>
        </Card>
      </>
    );
  }
  else if(navigate == 3){
    return (
      <>
        <Card id="card">
          <br />
          <Navbar color="transparent" light expand="md">
            <Row id="navrow">
              <Col xs={6}>
                <NavbarBrand
                  href="/"
                  style={{ fontSize: "30px", fontWeight: "bold", position:"relative", top:"10px" }}
                  className="text-light"
                >
                  <Row>
                    <Col md={3}>
                      <img src={Logo} className="mt-3" id="img" />
                    </Col>
                    <Col md={9}>
                      <article className="mt-3 ml-3" id="header">
                        Shivasish Dey
                      </article>
                    </Col>
                  </Row>
                </NavbarBrand>
              </Col>
              <Col xs={6}>
                <NavbarToggler onClick={toggle} id="coll" > <FiMenu id="ee" /> </NavbarToggler>
              </Col>
            </Row>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto mr-5" navbar>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={resume} href="#">
                    Resume
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={seeblog} href="#">
                    Blogs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={about} href="#">
                    About me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="text-light" id="navl" onClick={work} href="#">
                  My Works
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <br />
          <br />
          <br />
          <br />
          <Mywork />
          <div id="line"></div>
          <Row>
            <h5 className="text-secondary ml-5 my-3" id="hh">
            Connect with me on: <a href="https://www.instagram.com/ui_ux__designer/?hl=en"><FaInstagram id="insta" className="mb-1" /></a>{" "}
              <a href="https://www.facebook.com/coming.sd/"><FaFacebook id="fb" className="mb-1 ml-1" /></a>{" "}
              <a href="https://github.com/sdey025"><FaGithub className="mb-1 ml-1 text-light" /></a>{" "}
              <a href="https://www.linkedin.com/in/shivasish-dey-2a7ba353/"><FaLinkedin id="lkin" className="mb-1 ml-1" /></a>{" "}
              <a href="https://dribbble.com/sdey025"><FaDribbble id="drbl" className="mb-1 ml-1" /></a>{" "}
            </h5>
            <h5 className="text-secondary my-3" id="last">
              © 2021 All rights reserved{" "}
            </h5>
          </Row>
        </Card>
      </>
    );
  }
}

export default Home;
