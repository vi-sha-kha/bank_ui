import { React, useCallback, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router";
import Link from "./Link";

const names = [
  "RFP Call for AML/CFT Expert or Consultant",

  "Account Freeze Notice for Dormant Account of 10 Years & Above",
  "Cyber Security Awareness Notice",
];

const Alert = () => {
  const [newName, setnewName] = useState("");
  const linkData = [
    { link: "/individual/rfp", popup: "" },
    { link: "/individual/freezeacc", popup: "" },

    { link: "/individual/cyber", popup: "" },
  ];

  //const [linkData, setLinkData] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 5000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <>
      <div class="alert alert-danger alert-dismissible">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <strong>{newName}</strong>

        <Link link={linkData.link} popup={linkData.popup} />
      </div>
    </>
  );
};

export default Alert;
