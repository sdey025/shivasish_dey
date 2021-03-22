import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import Navbar from "./MyNavbar";
import Myimg from "./image/myimg.jpg";
import swal from "sweetalert";
import {
  BiCodeAlt,
  BiCodeCurly,
  BiHighlight,
  BiImage,
  BiLaptop,
} from "react-icons/bi";
import { GrOracle, GrReactjs } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import {
  FiDatabase,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
function MainContent() {
  const [modal, setModal] = useState(false);
  const [name, setname] = useState("");
  const [message, setmessage] = useState("");
  const [inmodal, setinmodal] = useState(0);
  console.log(name);
  console.log(message);
  const viamess = () => {
    setinmodal(0);
  };
  const viaphone = () => {
    setinmodal(1);
  };
  const valid = () => {
    if (!name || !message) {
      swal({
        title: "Sorry !!",
        text: "You have to atleast fill the name & message.",
        icon: "error",
        button: "OK",
      });
    } else {
      swal({
        title: "Thanks for contacting me!",
        text: "I will get back to you very soon...",
        icon: "success",
        button: "OK",
      });
    }
  };
  const toggle = () => setModal(!modal);
  return (
    <>
      <Row>
        <Col md={2}></Col>
        <Col md={4} xs={12}>
          <img src={Myimg} id="myimg" />
        </Col>
        <Col md={4} xs={12}>
          <h5 id="head1">Software Analyst</h5>
          <h6 id="head2">at Capgemini</h6>
          <h1 className="text-light" id="myname">
            Shivasish Dey
          </h1>
          <p id="description">
            A Web Developer is responsible for the coding, design and layout of
            a website according to a company's specifications. As the role takes
            into consideration user experience and function, a certain level of
            both graphic design and computer programming is necessary.
          </p>
          <Row>
            <a href="https://drive.google.com/file/d/1jooTGPWRXn_J8UNHBFGnPoU3D-OpyzEm/view?usp=sharing">
              <Button id="mybtn">Download CV</Button>
            </a>
            <Button id="contact" onClick={toggle}>
              Contact
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>
                <Row>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {inmodal == 0 ? (
                    <article
                      onClick={viamess}
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                    >
                      Via Message
                    </article>
                  ) : (
                    <article onClick={viamess} style={{ cursor: "pointer" }}>
                      Via Message
                    </article>
                  )}{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  {inmodal == 1 ? (
                    <article
                      onClick={viaphone}
                      className="text-primary"
                      style={{ cursor: "pointer" }}
                    >
                      Via Social media/Phone
                    </article>
                  ) : (
                    <article onClick={viaphone} style={{ cursor: "pointer" }}>
                      Via Social media/Phone
                    </article>
                  )}
                </Row>
              </ModalHeader>
              <ModalBody>
                {inmodal == 0 ? (
                  <>
                    <label>Name: </label>
                    <Input
                      placeholder="Enter Your Name..."
                      required
                      onChange={(e) => setname(e.target.value)}
                    />
                    <br />
                    <label>Email: </label>
                    <Input placeholder="Your Email..." required />
                    <br />
                    <label>Message: </label>
                    <Input
                      type="textarea"
                      onChange={(e) => setmessage(e.target.value)}
                      placeholder="Your Message..."
                      required
                    />
                  </>
                ) : (
                  <>
                    <h6
                      className="text-center"
                      style={{ marginBottom: "-15px" }}
                    >
                      Connect with me on{" "}
                    </h6>
                    <Row className="my-4">
                      <Col md={2} xs={2}></Col>
                      <Col md={2} xs={2}>
                        <a href="https://www.facebook.com/coming.sd/"><button id="connface" className="mx-auto d-flex">
                          <FiFacebook id="iconface" />
                        </button></a>
                      </Col>
                      <Col md={2} xs={2}>
                        <a href="https://twitter.com/rajamgr"><button id="conntwi" className="mx-auto d-flex">
                          <FiTwitter id="icontwi" />
                        </button></a>
                      </Col>
                      <Col md={2} xs={2}>
                        <a href="https://www.linkedin.com/in/shivasish-dey-2a7ba353/"><button id="connin" className="mx-auto d-flex">
                          <FiLinkedin id="iconin" />
                        </button></a>
                      </Col>
                      <Col md={2} xs={2}>
                        <a href="https://www.instagram.com/ui_ux__designer/?hl=en"><button id="conninsta" className="mx-auto d-flex">
                          <FiInstagram id="iconinsta" />
                        </button></a>
                      </Col>
                      <Col md={2} xs={2}></Col>
                    </Row>
                    <h6 id="ph" className="text-center">
                      Or Connect via Phone
                    </h6>
                    <article className="text-center">8372026115</article>
                    <article className="text-center">8002273579</article>
                    <h6 className="text-center mt-4">or Connect via email</h6>
                    <article className="text-center">shivadey800@gmail.com</article>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                { inmodal == 0 ?<Button color="primary" id="okbtn" onClick={valid}>
                  Submit
                </Button> : null}{" "}
                <Button color="secondary" id="cancelbtn" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <h3 id="wid" className="text-light">
          What I do?
        </h3>
        <Row className="mt-4">
          <Col md={6}>
            <Row>
              <Col md={2}>
                <BiCodeAlt
                  className="text-primary"
                  style={{ fontSize: "50px" }}
                />
              </Col>
              <Col md={10}>
                <h4 className="text-light mt-2 font-weight-bold">
                  Web Development
                </h4>
                <h6 className="text-secondary">
                  Web Developer job description guide. A Web Developer is
                  responsible for the coding, design and layout of a website
                  according to a company's specifications. As the role takes
                  into consideration user experience and function, a certain
                  level of both graphic design and computer programming is
                  necessary.
                </h6>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={2}>
                <BiLaptop
                  className="text-primary"
                  style={{ fontSize: "50px" }}
                />
              </Col>
              <Col md={10}>
                <h4 className="text-light mt-2 font-weight-bold">
                  Web Designing
                </h4>
                <h6 className="text-secondary">
                  Web designers plan, create and code internet sites and web
                  pages, many of which combine text with sounds, pictures,
                  graphics and video clips. A web designer is responsible for
                  creating the design and layout of a website or web pages. It
                  and can mean working on a brand new website or updating an
                  already existing site.
                </h6>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="mt-4 mb-5" id="remove">
              <Col md={2}>
                <BiHighlight
                  className="text-primary"
                  style={{ fontSize: "50px" }}
                />
              </Col>
              <Col md={10}>
                <h4 className="text-light mt-2 font-weight-bold">
                  Logo Designing
                </h4>
                <h6 className="text-secondary">
                  A logo design brief is a document that outlines all of the
                  necessary information that a designer needs to create the
                  right logo for you. Its job is to ensure the designers know
                  precisely what you're after— including your style, timing, and
                  budget—and will put your thoughts and ideas onto paper (and
                  onto your screen).
                </h6>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="mt-4 mb-5">
              <Col md={2}>
                <BiCodeCurly
                  className="text-primary"
                  style={{ fontSize: "50px" }}
                />
              </Col>
              <Col md={10}>
                <h4 className="text-light mt-2 font-weight-bold">
                  Problem Solving
                </h4>
                <h6 className="text-secondary">
                  Problem solving is the act of defining a problem; determining
                  the cause of the problem; identifying, prioritizing, and
                  selecting alternatives for a solution; and implementing a
                  solution. The problem-solving process.
                </h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <h3 id="wid" className="text-light">
          Achievement
        </h3>
        <br />
        <Row className="mb-5">
          <Col md={4}>
            <Card body id="ach">
              <GrReactjs className="font-weight-bold" id="icon" />
              <a
                href="http://hackerrank.com/certificates/108b87a7788c"
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-light mt-3 text-center">
                  React Certificate
                </h3>
              </a>
              <article className="text-right text-secondary">
                -Hackerrank
              </article>
            </Card>
          </Col>
          <Col md={4}>
            <Card body id="ach">
              <FaJava className="font-weight-bold" id="iconj" />
              <a
                href="https://www.hackerrank.com/certificates/dda5f9cdb196"
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-light mt-3 text-center">
                  JAVA Certificate
                </h3>
              </a>
              <article className="text-right text-secondary">
                -Hackerrank
              </article>
            </Card>
          </Col>
          <Col md={4}>
            <Card body id="ach">
              <FiDatabase className="font-weight-bold" id="icono" />
              <a
                href="https://www.hackerrank.com/sdey025"
                style={{ textDecoration: "none" }}
              >
                <h3 className="text-light mt-3 text-center">
                  SQL Silver badge
                </h3>
              </a>
              <article className="text-right text-secondary">
                -Hackerrank
              </article>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MainContent;
