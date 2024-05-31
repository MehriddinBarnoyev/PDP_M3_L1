import * as React from "react";
import Container from "@mui/material/Container";
import { Animated } from "react-animated-css";
import { JackInTheBox, Roll } from "react-awesome-reveal";
import HomeWrapper from "./HeaderTemplete";
import logo from "../../Images/photo_2024-05-30_20-41-46.svg";

const pages = ["Home", "About me", "Education", "Skills", "Contact me"];
const pageItems = pages.map((page, index) => (
  <h6 className=" " key={index}>
    {page}
  </h6>
));

function ResponsiveAppBar() {
  return (
    <HomeWrapper position="static bg-light ">
      <Container maxWidth="xl">
        <div className="row py-5 text-dark">
          <div className="col ">
            <JackInTheBox triggerOnce>
              <div
                className="d-flex"
                style={{ marginTop: "-50px", paddingLeft: "-50px" }}
              >
                <img src={logo} alt="" style={{ width: "150px" }} />

                <Animated
                  animationIn="bounceInLeft"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <h1 className="mt-5">Mehriddin</h1>
                </Animated>
              </div>
            </JackInTheBox>
          </div>
          <div className="col d-flex justify-content-between h5 ">
            <Roll triggerOnce>{pageItems}</Roll>
          </div>
        </div>
      </Container>
    </HomeWrapper>
  );
}
export default ResponsiveAppBar;
