import React from "react";
import "../HomeSection/HomeSection.css";
import proImage from "../../Images/mine.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import { Animated } from "react-animated-css";






export default function Home() {
  return (
    <div>
      <div className="row d-flex  pt-5 text-dark">
        <div className="col">
          <div>
            <Slide triggerOnce>
              <h2 style={{ fontSize: "50px" }}>I'm Barnoyev Mehriddin</h2>
            </Slide>
          </div>
          <Fade duration={1500}>
            <h2 className="text-animation p-3">Full Stack Java developer</h2>
          </Fade>
          <div className="buttons">
            <>
              <Slide triggerOnce>
                <Animated
                  animationIn="fadeInLeftBig"
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  
                  <button className="btn btn-dark me-5">Hire me</button>
                  <button className="btn btn-dark">Let's talk</button>{" "}
                </Animated>
              </Slide>
            </>
          </div>
        </div>
        <div className="col">
          <Slide direction={"right"} triggerOnce>
            <img
              src={proImage}
              alt=""
              className="w-100 shadow"
              style={{ borderRadius: "20px" }}
            />
          </Slide>
        </div>
      </div>
    </div>
  );
}
