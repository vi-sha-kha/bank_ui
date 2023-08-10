// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// const Navigation_Bar = () => {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Individual</Nav.Link>
//             <Nav.Link href="#link">Business</Nav.Link>
//             <Nav.Link href="#link">Service & Payments</Nav.Link>
//             <Nav.Link href="#link">nBank</Nav.Link>

//             <NavDropdown title="Quick Links" id="basic-nav-dropdown">
//               <NavDropdown.Item
//                 href="https://forms.gle/pqH4Vw6UxHtYCnxG9"
//                 target="_blank"
//               >
//                 Online Application Form - Nabil SSE Fellowship Program 2023{" "}
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/individual/atms">ATMs</NavDropdown.Item>
//               <NavDropdown.Item href="/individual/branches">
//                 Branches
//               </NavDropdown.Item>

//               <NavDropdown.Item href="/individual/branchless">
//                 Branchless Banking
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/individual/currency">
//                 Forex Rates
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/individual/interest-rate">
//                 Interest Rates
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/individual/news">News</NavDropdown.Item>
//               <NavDropdown.Item href="/individual/notices">
//                 Notices
//               </NavDropdown.Item>
//               <NavDropdown.Item
//                 href="https://siteadmin.nabilbank.com/assets/backend/uploads/Documents/Standard%20Charge%20Sheet-%202022.pdf"
//                 target="_blank"
//               >
//                 Standard Charge Sheet
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/individual/calculator">
//                 Calculator
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/individual/credit-card/eligibility">
//                 Credit Card Eligibility
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/individual/loan-eligibility">
//                 Nabil Loan Eligibility
//               </NavDropdown.Item>
//             </NavDropdown>

//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navigation_Bar;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
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

function Navigation_Bar() {
  return (
    <>
      {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              {" "}
              <img
                src="https://siteadmin.nabilbank.com/assets/backend/uploads/logo.png"
                alt="logo"
                class="img-fluid"
                width="150"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src="https://siteadmin.nabilbank.com/assets/backend/uploads/logo.png"
                    alt="logo"
                    class="img-fluid"
                    width="150"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="row">
                  <Nav className="col justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#home">Individual</Nav.Link>
                    <Nav.Link href="#link">Business</Nav.Link>
                    <Nav.Link href="#link">Service & Payments</Nav.Link>
                    <Nav.Link href="#link">nBank</Nav.Link>

                    <NavDropdown
                      title="Quick Links"
                      data-bs-theme="light"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item
                        href="https://forms.gle/pqH4Vw6UxHtYCnxG9"
                        target="_blank"
                      >
                        Online Application Form - Nabil SSE Fellowship Program
                        2023{" "}
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
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/individual/eng" target="_blank">
                        English
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/individual/npl">
                        Nepali
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>

                  <Nav className="col justify-content-end flex-grow-1 pe-3">
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
                          }}
                        >
                          <MDBContainer>
                            <MDBRow className="my-4">
                              <MDBCol md="6" lg="3" className="mb-3 mb-lg-0">
                                <MDBListGroup flush>
                                  <MDBListGroupItem
                                    className="text-uppercase font-weight-bold"
                                    tag="a"
                                    href="#"
                                    action
                                  >
                                    Lorem ipsum
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Dolor sit
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Amet consectetur
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Cras justo odio
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
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
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Saepe
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Vel alias
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Sunt doloribus
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
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
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Saepe
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Vel alias
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Sunt doloribus
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Cum dolores
                                  </MDBListGroupItem>
                                </MDBListGroup>
                              </MDBCol>
                              <MDBCol md="6" lg="3" class="dropdown-img-holder">
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
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Saepe
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Vel alias
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Sunt doloribus
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Cum dolores
                                  </MDBListGroupItem>
                                </MDBListGroup>
                              </MDBCol>
                              <MDBCol md="6" lg="3" class="dropdown-img-holder">
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
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Saepe
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Vel alias
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Sunt doloribus
                                  </MDBListGroupItem>
                                  <MDBListGroupItem tag="a" href="#" action>
                                    Cum dolores
                                  </MDBListGroupItem>
                                </MDBListGroup>
                              </MDBCol>
                            </MDBRow>
                            <MDBRow className="my-4">
                              <MDBCol md="6" lg="3" class="dropdown-img-holder">
                                <h4>
                                  Western Union- Account Payment Network (WU
                                  APN)
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

                    <Dropdown className="d-inline mx-2">
                      <Dropdown.Toggle id="dropdown-autoclose-true">
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

                    <Dropdown className="d-inline mx-2" variant="success">
                      <Dropdown.Toggle id="dropdown-autoclose-true">
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
                  </Nav>
                </div>
                {/* 
                <MDBContainer className="py-5 sidebar-search-wrapper">
                  <input
                    type="text"
                    className="search-hover"
                    placeholder="What are you looking for..."
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
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                          </MDBContainer> */}

                <form>
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
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </MDBContainer>
                </form>
                <button
                  className="btn btn-md text-success py-0 btnSearch  "
                  style={{ fontSize: "24px" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
                  </svg>
                </button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navigation_Bar;
