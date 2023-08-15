import React from "react";
import { HashLink } from "react-router-hash-link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useCallback } from "react";
import "./navbar.css";
import Stack from "react-bootstrap/Stack";
import Dropdown from "react-bootstrap/Dropdown";

//import { Dropdown } from 'react-bootstrap'; /
import {
  MDBContainer,
  MDBCol,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";

import { Tab, Tabs } from "react-bootstrap";

const Navbar2 = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <>
      <Container>
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
          <Nav variant="underline">
            <Container fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    <img
                      src="https://siteadmin.nabilbank.com/assets/backend/uploads/logo.png"
                      alt="logo"
                      class="img-fluid"
                      width="150"
                    />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Stack>
                    <div className="navigation-top">
                      {/* <Stack direction="horizontal" gap={3}> */}
                      <Nav className="justify-content-start flex-grow-1 pe-3">
                        <Nav.Link
                          activeClassName="active-link" // <-- define active classname
                          as={HashLink} // <-- render NavHashLink component
                          className="style-navlink"
                          smooth
                          to="#individual"
                          style={
                            isActive("#individual")
                              ? {
                                  fontWeight: "bold",
                                  backgroundColor: "rgb(213, 41, 51)",
                                }
                              : {}
                          }
                        >
                          Individual
                        </Nav.Link>
                        <Nav.Link
                          activeClassName="active-link" // <-- define active classname
                          as={HashLink} // <-- render NavHashLink component
                          className="style-navlink"
                          smooth
                          to="#business"
                          style={
                            isActive("#business")
                              ? {
                                  fontWeight: "bold",
                                  backgroundColor: "rgb(213, 41, 51)",
                                }
                              : {}
                          }
                        >
                          Business
                        </Nav.Link>
                        <Nav.Link
                          activeClassName="active-link" // <-- define active classname
                          as={HashLink} // <-- render NavHashLink component
                          className="style-navlink"
                          smooth
                          to="/services"
                          style={
                            isActive("#services")
                              ? {
                                  fontWeight: "bold",
                                  backgroundColor: "rgb(213, 41, 51)",
                                }
                              : {}
                          }
                        >
                          Service &amp; Payments
                        </Nav.Link>
                        <Nav.Link href="http://nbankhome.nabilbank.com/">
                          nBank
                        </Nav.Link>
                      </Nav>
                      <Nav className=" p-2 ms-auto ">
                        <NavDropdown
                          title="+977 1 5970015"
                          id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                          <NavDropdown.Item
                            href="viber://chat?number=+9779802002095"
                            className="d-flex align-items-center "
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 512 512"
                              class="mr-2 h4 mb-0"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"></path>
                            </svg>
                            +9779802002095
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="mailto:customercare@nabilbank.com"
                            className="d-flex align-items-center "
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              stroke-width="0"
                              viewBox="0 0 24 24"
                              class="mr-2 h4 mb-0"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                            customercare@nabilbank.com
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="Quick Links"
                          data-bs-theme="light"
                          id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                          <NavDropdown.Item
                            href="https://forms.gle/pqH4Vw6UxHtYCnxG9"
                            target="_blank"
                          >
                            Online Application Form - Nabil SSE Fellowship
                            Program 2023{" "}
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/atms">
                            ATMs
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/branches">
                            Branches
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/branchless">
                            Branchless Banking
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/currency">
                            Forex Rates
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/interest-rate">
                            Interest Rates
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/news">
                            News
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/notices">
                            Notices
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            href="https://siteadmin.nabilbank.com/assets/backend/uploads/Documents/Standard%20Charge%20Sheet-%202022.pdf"
                            target="_blank"
                          >
                            Standard Charge Sheet
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/calculator">
                            Calculator
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/credit-card/eligibility">
                            Credit Card Eligibility
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/loan-eligibility">
                            Nabil Loan Eligibility
                          </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                          title="EN"
                          id={`offcanvasNavbarDropdown-expand-lg`}
                        >
                          <NavDropdown.Item
                            href="/individual/eng"
                            target="_blank"
                          >
                            English
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/individual/npl">
                            Nepali
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                      {/* </Stack> */}
                    </div>
                    <div className="navigation-bottom">
                      <Nav className="justify-content-start flex-grow-1 pe-3">
                        <Navbar.Brand href="#">
                          {" "}
                          <img
                            src="https://siteadmin.nabilbank.com/assets/backend/uploads/logo.png"
                            alt="logo"
                            class="img-fluid"
                            width="150"
                          />
                        </Navbar.Brand>
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                          <MDBNavbarItem className="position-static">
                            <MDBDropdown>
                              <MDBDropdownToggle tag="a" className="nav-link">
                                Deposit
                              </MDBDropdownToggle>
                              <MDBDropdownMenu
                                className="mt-0 w-100 justify-content-center"
                                style={{
                                  borderTopLeftRadius: "0",
                                  borderTopRightRadius: "0",
                                  width: "100%",
                                }}
                              >
                                <MDBContainer>
                                  <MDBRow className="my-4">
                                    <MDBCol
                                      md="6"
                                      lg="3"
                                      className="mb-3 mb-lg-0"
                                    >
                                      <MDBListGroup flush>
                                        <MDBListGroupItem
                                          className="text-uppercase font-weight-bold"
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Lorem ipsum
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Dolor sit
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Amet consectetur
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cras justo odio
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Adipisicing elit
                                        </MDBListGroupItem>
                                      </MDBListGroup>
                                    </MDBCol>
                                    <MDBCol md="6" lg="3">
                                      <MDBListGroup flush>
                                        <MDBListGroupItem
                                          className="text-uppercase font-weight-bold"
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cras justo odio
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Saepe
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Vel alias
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Sunt doloribus
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cum dolores
                                        </MDBListGroupItem>
                                      </MDBListGroup>
                                    </MDBCol>
                                    <MDBCol md="6" lg="3">
                                      <MDBListGroup flush>
                                        <MDBListGroupItem
                                          className="text-uppercase font-weight-bold"
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cras justo odio
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Saepe
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Vel alias
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Sunt doloribus
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cum dolores
                                        </MDBListGroupItem>
                                      </MDBListGroup>
                                    </MDBCol>
                                    <MDBCol
                                      md="6"
                                      lg="3"
                                      class="dropdown-img-holder"
                                    >
                                      <h4>Nabil Premium Nari Bachat</h4>
                                      <img
                                        src="https://siteadmin.nabilbank.com/assets/backend/uploads/Product Images/Product Thumb Image/nari-bachat-thumbnail.png"
                                        class="dropdown-img img-fluid w-100 rounded"
                                        alt="Nabil Premium Nari Bachat"
                                      />
                                    </MDBCol>
                                  </MDBRow>
                                </MDBContainer>
                              </MDBDropdownMenu>
                            </MDBDropdown>
                          </MDBNavbarItem>
                          <MDBNavbarItem className="position-static">
                            <MDBDropdown>
                              <MDBDropdownToggle tag="a" className="nav-link">
                                Loans
                              </MDBDropdownToggle>
                              <MDBDropdownMenu
                                className="mt-0 w-100 justify-content-center"
                                style={{
                                  borderTopLeftRadius: "0",
                                  borderTopRightRadius: "0",
                                }}
                              >
                                <MDBContainer>
                                  <MDBRow className="my-4">
                                    <MDBCol md="6" lg="3">
                                      <MDBListGroup flush>
                                        <MDBListGroupItem
                                          className="text-uppercase font-weight-bold"
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cras justo odio
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Saepe
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Vel alias
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Sunt doloribus
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cum dolores
                                        </MDBListGroupItem>
                                      </MDBListGroup>
                                    </MDBCol>
                                    <MDBCol
                                      md="6"
                                      lg="3"
                                      class="dropdown-img-holder"
                                    >
                                      <h4>Housing Loan</h4>
                                      <img
                                        src="https://siteadmin.nabilbank.com/assets/backend/uploads/Product Images/Product Thumb Image/housing-loan-website.jpg"
                                        class="dropdown-img img-fluid w-100 rounded"
                                        alt="Housing Loan"
                                      />
                                    </MDBCol>
                                  </MDBRow>
                                </MDBContainer>
                              </MDBDropdownMenu>
                            </MDBDropdown>
                          </MDBNavbarItem>
                          <MDBNavbarItem className="position-static">
                            <MDBDropdown>
                              <MDBDropdownToggle tag="a" className="nav-link">
                                Remittance
                              </MDBDropdownToggle>
                              <MDBDropdownMenu
                                className="mt-0 w-100 justify-content-center"
                                style={{
                                  borderTopLeftRadius: "0",
                                  borderTopRightRadius: "0",
                                }}
                              >
                                <MDBContainer>
                                  <MDBRow className="my-4">
                                    <MDBCol md="6" lg="3">
                                      <MDBListGroup flush>
                                        <MDBListGroupItem
                                          className="text-uppercase font-weight-bold"
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cras justo odio
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Saepe
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Vel alias
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Sunt doloribus
                                        </MDBListGroupItem>
                                        <MDBListGroupItem
                                          tag="a"
                                          href="#"
                                          action
                                        >
                                          Cum dolores
                                        </MDBListGroupItem>
                                      </MDBListGroup>
                                    </MDBCol>
                                  </MDBRow>
                                  <MDBRow className="my-4">
                                    <MDBCol
                                      md="6"
                                      lg="3"
                                      class="dropdown-img-holder"
                                    >
                                      <h4>
                                        Western Union- Account Payment Network
                                        (WU APN)
                                      </h4>
                                      <img
                                        src="https://siteadmin.nabilbank.com/assets/backend/uploads/Product Images/Product Thumb Image/western-union-account-payment.jpg"
                                        class="dropdown-img img-fluid w-100 rounded"
                                        alt="Western Union- Account Payment Network (WU APN)"
                                      />
                                    </MDBCol>
                                  </MDBRow>
                                </MDBContainer>
                              </MDBDropdownMenu>
                            </MDBDropdown>
                          </MDBNavbarItem>
                        </Nav>
                        <Nav className="justify-content-end d-inline flex-grow-1  mx-2">
                          <Dropdown className="d-inline mx-2">
                            <Dropdown.Toggle
                              variant="outline-success"
                              id="dropdown-autoclose-true"
                            >
                              Login
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                href="https://nbank.nabilbank.com/"
                                target="_blank"
                              >
                                nBank Web
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="https://enabil.nabilbank.com/#/login"
                                target="_blank"
                              >
                                e@Nabil{" "}
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="https://www.nabilbank.com.np"
                                target="_blank"
                              >
                                Internet Banking
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="https://ibanking.nabilbank.com/#/login"
                                target="_blank"
                              >
                                Internet Banking [NBBL]{" "}
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="https://acs.nabil.compassplus.uk/enrollment/index.jsp"
                                target="_blank"
                              >
                                Nabil e-Secure
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="https://corporatepay.connectips.com/#/login"
                                target="_blank"
                              >
                                CorporatePay
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          <Dropdown className="d-inline mx-2">
                            <Dropdown.Toggle
                              id="dropdown-autoclose-true"
                              variant="success"
                            >
                              Apply Online
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="/individual/credit-card/eligibility">
                                Credit Card Application
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="https://online.nabilbank.com/Setting/ProductSetup"
                                target="_blank"
                              >
                                Online Account Opening
                              </Dropdown.Item>
                              <Dropdown.Item href="/individual/fixed-deposit">
                                Online Fixed Deposit
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="https://onlinedemat.nabilinvest.com.np/"
                                target="_blank"
                              >
                                Open Demat Account
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="https://www.nabilbank.com/services-payments/loan-eligibility"
                                target="_blank"
                              >
                                Retail Loan Application
                              </Dropdown.Item>
                              <Dropdown.Item href="/individual/sme-loan-application">
                                SME Loan Application
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                          {/* <form>
                            <MDBContainer className="py-5 sidebar-search-wrapper">
                              <input
                                type="text"
                                className="search-hover"
                                placeholder="What are you looking for..."
                                value=""
                                data-listener-added_b7545ed4="true"
                              />
                              <svg
                                stroke="currentColor"
                                fill="none"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="text-gray"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line
                                  x1="21"
                                  y1="21"
                                  x2="16.65"
                                  y2="16.65"
                                ></line>
                              </svg>
                            </MDBContainer>
                          </form> */}
                        </Nav>
                      </Nav>
                    </div>
                  </Stack>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default Navbar2;
