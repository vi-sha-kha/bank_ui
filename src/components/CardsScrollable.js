import React from "react";
import Cards from "./Cards";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "../card.css";

const CardsScrollable = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;

  const cardData = [
    {
      path: "/individual/interest-rate",
      img: "https://siteadmin.nabilbank.com/assets/backend/uploads/Banner Menu/interest.png",
      title: "Interest Rate",
    },
    {
      path: "/individual/currency",
      img: "https://siteadmin.nabilbank.com/assets/backend/uploads/Banner Menu/Exchange rates.png",
      title: "Forex Rates",
    },
    {
      path: "/individual/calculator",
      img: "https://siteadmin.nabilbank.com/assets/backend/uploads/Banner Menu/budget.png",
      title: "Calculator",
    },
    {
      path: "/individual/grievance",
      img: "https://siteadmin.nabilbank.com/assets/backend/uploads/Banner Menu/Grievance.png",
      title: "Grievance",
    },
    {
      path: "/individual/calendar",
      img: "https://siteadmin.nabilbank.com/assets/backend/uploads/Banner Menu/WhatsApp Image 2023-04-12 at 15.36.11.jpg",
      title: "Calendar",
    },
    // Add more card data as needed
  ];
  return (
    <>
      <div class="card-pos container m-top">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-2  col-xs-6">
            <Nav.Link
              activeClassName="active-link"
              as={NavHashLink}
              className="style-navlink"
              smooth
              to={card.path}
              style={
                isActive(card.path)
                  ? {
                      fontWeight: "bold",
                      backgroundColor: "rgb(213, 41, 51)",
                    }
                  : {}
              }
            >
              <div className="">
                <Cards img={card.img} title={card.title} />
              </div>
            </Nav.Link>
          </div>
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default CardsScrollable;
