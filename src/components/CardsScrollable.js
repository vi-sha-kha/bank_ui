import React from "react";
import Cards from "./Cards";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const CardsScrollable = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <>
      <div class="d-flex flex-row flex-nowrap overflow-auto row-horizon">
        {/* <div className="row row-horizon"> */}
        <div className="col-xs-6">
          <Nav.Link
            activeClassName="active-link" // <-- define active classname
            as={HashLink} // <-- render NavHashLink component
            className="style-navlink"
            smooth
            to="/individual/interest-rate"
            style={
              isActive("/individual/interest-rate")
                ? {
                    fontWeight: "bold",
                    backgroundColor: "rgb(213, 41, 51)",
                  }
                : {}
            }
          >
            <Cards />
          </Nav.Link>
        </div>
        <div className="col-xs-6">
          <Nav.Link
            activeClassName="active-link" // <-- define active classname
            as={HashLink} // <-- render NavHashLink component
            className="style-navlink"
            smooth
            to="/individual/currency"
            style={
              isActive("/individual/currency")
                ? {
                    fontWeight: "bold",
                    backgroundColor: "rgb(213, 41, 51)",
                  }
                : {}
            }
          >
            <Cards />
          </Nav.Link>
        </div>
        <div className="col-xs-6">
          <Nav.Link
            activeClassName="active-link" // <-- define active classname
            as={HashLink} // <-- render NavHashLink component
            className="style-navlink"
            smooth
            to="/individual/calculator"
            style={
              isActive("/individual/calculator")
                ? {
                    fontWeight: "bold",
                    backgroundColor: "rgb(213, 41, 51)",
                  }
                : {}
            }
          >
            <Cards />
          </Nav.Link>
        </div>
        <div className="col-xs-6">
          <Nav.Link
            activeClassName="active-link" // <-- define active classname
            as={HashLink} // <-- render NavHashLink component
            className="style-navlink"
            smooth
            to="/individual/grievance-handling"
            style={
              isActive("/individual/grievance-handling")
                ? {
                    fontWeight: "bold",
                    backgroundColor: "rgb(213, 41, 51)",
                  }
                : {}
            }
          >
            <Cards />
          </Nav.Link>
        </div>
        <div className="col-xs-6">
          <Nav.Link
            activeClassName="active-link" // <-- define active classname
            as={HashLink} // <-- render NavHashLink component
            className="style-navlink"
            smooth
            to="/individual/calendar"
            style={
              isActive("/individual/calendar")
                ? {
                    fontWeight: "bold",
                    backgroundColor: "rgb(213, 41, 51)",
                  }
                : {}
            }
          >
            <Cards />
          </Nav.Link>
        </div>
        {/* </div> */}
      </div>

      {/* <div class="container-fluid">
        <div class="row">
          <div class="icon-tab col-xs-2 col-xs-offset-3 active">
            <span class="glyphicon glyphicon-music"></span>
            <span class="icon-label">Musics</span>
          </div>
          <div class="icon-tab col-xs-2 col-sm-2 ">
            <span class="glyphicon glyphicon-camera"></span>
            <span class="icon-label">Pictures</span>
          </div>
          <div class="icon-tab col-xs-2 col-sm-2">
            <span class="glyphicon glyphicon-facetime-video"></span>
            <span class="icon-label">Movies</span>
          </div>
        </div>
      </div> */}
      {/* 
      <Nav className="justify-content-start flex-grow-1 pe-3">
        <Nav.Link
          activeClassName="active-link" // <-- define active classname
          as={HashLink} // <-- render NavHashLink component
          className="style-navlink"
          smooth
          to="/individual/interest-rate"
          style={
            isActive("/individual/interest-rate")
              ? {
                  fontWeight: "bold",
                  backgroundColor: "rgb(213, 41, 51)",
                }
              : {}
          }
        >
          Interest Rate
        </Nav.Link>
        <Nav.Link
          activeClassName="active-link" // <-- define active classname
          as={HashLink} // <-- render NavHashLink component
          className="style-navlink"
          smooth
          to="/individual/currency"
          style={
            isActive("/individual/currency")
              ? {
                  fontWeight: "bold",
                  backgroundColor: "rgb(213, 41, 51)",
                }
              : {}
          }
        >
          Forex Rates
        </Nav.Link>
        <Nav.Link
          activeClassName="active-link" // <-- define active classname
          as={HashLink} // <-- render NavHashLink component
          className="style-navlink"
          smooth
          to="/individual/calendar"
          style={
            isActive("/individual/calculator")
              ? {
                  fontWeight: "bold",
                  backgroundColor: "rgb(213, 41, 51)",
                }
              : {}
          }
        >
          Calculator
        </Nav.Link>
        <Nav.Link
          activeClassName="active-link" // <-- define active classname
          as={HashLink} // <-- render NavHashLink component
          className="style-navlink"
          smooth
          to="/individual/grievance-handling"
          style={
            isActive("/individual/calculator")
              ? {
                  fontWeight: "bold",
                  backgroundColor: "rgb(213, 41, 51)",
                }
              : {}
          }
        >
          Calculator
        </Nav.Link>
        <Nav.Link href="https://siteadmin.nabilbank.com/assets/backend/uploads/Calendar/Nabil-Calendar-2080.pdf">
          Calendar
        </Nav.Link>
      </Nav> */}
    </>
  );
};

export default CardsScrollable;
