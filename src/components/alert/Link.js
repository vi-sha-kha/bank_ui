import React from "react";
import { Nav } from "react-bootstrap";

const Link = ({ link, popup }) => {
  return (
    <>
      <Nav
        activeKey={link}
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href={link}>Read More</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href={popup}>Email the Details</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Link;
