import React, { useEffect, useRef, useState } from "react";
import { Col, Progress, Row } from "reactstrap";

function Resume() {
  return (
    <>

      <div className="container">
      <h1
        className=" text-light"
        style={{ position: "relative", top: "-80px" }}
        id="head"
      >
        Skills
      </h1>
        <Row>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  HTML5:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="warning"
                  value={92}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  CSS3:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="danger"
                  value={88}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  Javascript:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="primary"
                  value={90}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  Jquery:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="success"
                  value={88}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  ReactJS:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="info"
                  value={82}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  Oracle:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="primary"
                  value={89}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  Bootstrap 4:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="danger"
                  value={93}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  Redux:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="warning"
                  value={74}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col md={4}>
                <h4
                  className="text-secondary"
                  id="php"
                >
                  PHP:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="warning"
                  value={78}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  Laravel:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="success"
                  value={87}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  JAVA:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="danger"
                  value={95}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  C:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="primary"
                  value={76}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  MongoDB:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="success"
                  value={78}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  MySQL:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="primary"
                  value={80}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  MERN Stack:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="danger"
                  value={89}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={4}>
                <h4
                  className="text-secondary"
                  style={{ position: "relative", top: "-70px" }}
                >
                  ECMA Script:
                </h4>
              </Col>
              <Col md={8}>
                <Progress
                  color="warning"
                  value={74}
                  style={{
                    position: "relative",
                    top: "-68px",
                    borderRadius: "15px",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col md={6}>
            <h1
              className=" text-light"
              style={{ position: "relative", top: "-80px" }}
              id="head"
            >
              Education
            </h1>
            <h2
              className="text-light font-weight-bold"
              style={{ position: "relative", top: "-70px" }}
            >
              Graduation:{" "}
            </h2>
            <h3
              className="text-light ml-2"
              style={{ position: "relative", top: "-70px" }}
            >
              B.Tech
            </h3>
            <h6
              className="text-light ml-2" id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              from
            </h6>
            <h3
              className="text-light ml-2"
              style={{ position: "relative", top: "-75px" }}
            >
              Bengal college of Engineering
            </h3>
            <h6
              className="text-light ml-2" id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              Classes of 2020 with <b>7.70</b> CGPA{" "}
            </h6>
            <h6
              className="text-light ml-2" id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              from <b>Computer Science & Engineering</b> branch.{" "}
            </h6>
            <h2
              className="text-light font-weight-bold mt-5" 
              style={{ position: "relative", top: "-70px" }}
            >
              High Secondary:{" "}
            </h2>
            <h3
              className="text-light ml-2"
              style={{ position: "relative", top: "-70px" }}
            >
              12th class
            </h3>
            <h6
              className="text-light ml-2" id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              from
            </h6>
            <h3
              className="text-light ml-2"
              style={{ position: "relative", top: "-75px" }}
            >
              RSS Evening College
            </h3>
            <h6
              className="text-light ml-2" id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              Classes of 2016 with <b>65.5</b>%{" "}
            </h6>
            <h6
              className="text-light ml-2" id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              from <b>PCM</b> department.{" "}
            </h6>
            <h2
              className="text-light font-weight-bold mt-5" 
              style={{ position: "relative", top: "-70px" }}
            >
              Secondary:{" "}
            </h2>
            <h3
              className="text-light ml-2" 
              style={{ position: "relative", top: "-70px" }}
            >
              10th class
            </h3>
            <h6
              className="text-light ml-2" id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              from
            </h6>
            <h3
              className="text-light ml-2"
              style={{ position: "relative", top: "-75px" }}
            >
              DAV public school
            </h3>
            <h6
              className="text-light ml-2" id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              Classes of 2014 with <b>7.2</b> CGPA.{" "}
            </h6>
          </Col>
          <Col md={6}>
            <h1
              className=" text-light" 
              style={{ position: "relative", top: "-80px" }}
              id="head"
            >
              Work Experience
            </h1>
            <h2
            className="text-light"
              style={{ position: "relative", top: "-70px"  }}
            >
              Software Analyst
            </h2>
            <h5
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              at
            </h5>
            <h3
              id="d"
              style={{ position: "relative", top: "-75px" }}
            >
              Capgemini Technology Services India Limited
            </h3>
            <h6
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              from Mar/2021 to present at Bangalore.{" "}
            </h6>
            <h2
              className="text-light mt-5"
              style={{ position: "relative", top: "-70px" }}
            >
              Web Developer Intern
            </h2>
            <h5
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              at
            </h5>
            <h3
              id="d"
              style={{ position: "relative", top: "-75px" }}
            >
              Oyesters Training
            </h3>
            <h6
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              from Nov/2020 to Dec/2020
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              Worked on live project based on ReactJS
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              Technology: <b>ReactJS</b>.
            </h6>
            <h2
              className="text-light mt-5"
              style={{ position: "relative", top: "-70px" }}
            >
              PHP Laravel Intern
            </h2>
            <h5
              className="text-light"
              style={{ position: "relative", top: "-70px" }}
            >
              at
            </h5>
            <h3
              id="d"
              style={{ position: "relative", top: "-75px" }}
            >
              Arent Computech Pvt. Ltd.
            </h3>
            <h6
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              from June/2019 to July/2019 at Kolkata
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              Worked on E-Banking Website for Industrial Training project
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-70px" }}
            >
              Technology: <b>PHP & Laravel</b>.
            </h6>
          </Col>
        </Row>

        <h1
          className=" text-light mt-5"
          style={{ position: "relative", top: "-50px" }}
          id="head"
        >
          Projects
        </h1>
        <Row>
          <Col md={6} >
            <h3
              className="text-light mt-3"
              style={{ position: "relative", top: "-50px" }}
            >
              Job Portal website
            </h3>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Desc: Final year project.
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Stack used: <b>PHP & Laravel</b>.
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Modules: <b>Job Seeker, Job Providers & Admin</b>
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Features:{" "}
              <b>
                Messaging, view profile follow-unfollow system & report user
              </b>
            </h6>
            <a
              href="https://github.com/sdey025/job_portal_website"
              style={{ textDecoration: "none" }}
            >
              <h6
                id="d"
                style={{ position: "relative", top: "-50px" }}
              >
                see project
              </h6>
            </a>
            <h3
              className="text-light mt-4" 
              style={{ position: "relative", top: "-50px" }}
            >
              E-Banking website
            </h3>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Desc: Industrial Training project.
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Stack used: <b>PHP & Laravel</b>.
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Modules: <b>User & Admin</b>
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Features:{" "}
              <b>
                View profile & Sending money
              </b>
            </h6>
            <a
              href="https://github.com/sdey025/E_Banking_Website"
              style={{ textDecoration: "none" }}
            >
              <h6
                id="d"
                style={{ position: "relative", top: "-50px" }}
              >
                see project
              </h6>
            </a>
          </Col>
          <Col md={6}>
            <h3
              className="text-light mt-3"
              style={{ position: "relative", top: "-50px" }}
            >
              E-Commerce Website
            </h3>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Stack used: <b>MERN stack</b>.
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Modules: <b>User(Seller & Buyer) & Admin</b>
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Features:{" "}
              <b>
                Blog, buying & selling products 
              </b>
            </h6>
            <a
              href="https://github.com/sdey025/Ecommerce-website-MERN-User-module"
              style={{ textDecoration: "none" }}
            >
              <h6
                id="d"
                style={{ position: "relative", top: "-50px" }}
              >
                see project
              </h6>
            </a>
            <h3
              className="text-light mt-5"
              style={{ position: "relative", top: "-50px" }}
            >
              Social Network Clone
            </h3>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Stack used: <b>MERN stack</b>.
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Modules: <b>User & Admin</b>
            </h6>
            <h6
              id="d"
              style={{ position: "relative", top: "-50px" }}
            >
              Features:{" "}
              <b>
                Follow-Unfollow System, Like, Comment & Messaging System
              </b>
            </h6>
            <a
              href="https://github.com/sdey025/Social-networking-website-clone-in-MERN"
              style={{ textDecoration: "none" }}
            >
              <h6
                id="d"
                style={{ position: "relative", top: "-50px" }}
              >
                see project
              </h6>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Resume;
