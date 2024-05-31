import React from "react";
import proImage from "../../Images/1D3A0076.jpg";
import AboutWrapper from "./AboutWrappper";
import { Button } from "@mui/material";

export default function About() {
  return (
    <AboutWrapper>
      <div
        style={{ textAlign: "center", paddingTop: "100px" }}
        className="about"
      >
        <h1 className="text-dark " style={{ fontSize: "50px" }}>
          About <span style={{ color: "#FF00EE" }}>Me</span>
        </h1>
        <div>
          <img src={proImage} alt="" className="about-img" />
          <div className="text-dark mt-5">
            <h2>Full stack Java developer</h2>
            <h6>
              My name is Mehriddin , my lastname is Barnoyev. I am from Xatirchi
              in Navoi. <br />
              My birthday is 06-08-2004 and I am 19 years old
            </h6>
          </div>
          <Button type="success">Read more</Button>
        </div>
      </div>
    </AboutWrapper>
  );
}
