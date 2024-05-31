// App.js
import React, { useEffect, useRef } from "react";
import {
  SkillsSection,
  Title,
  Wrapper,
  SkillContent,
  SkillTitle,
  SkillBox,
  SingleSkill,
  Topic,
  BarSide,
  Bar,
} from "../Skills/SkillsWrapper";
import { Animated } from "react-animated-css";
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsRef.current;
    const contactSection = contactRef.current;
    if (skillsSection) {
      skillsSection.classList.add("start-animation");
    }
    if (contactSection) {
      contactSection.classList.add("start-animation");
    }
  }, []);

  return (
    <>
      <SkillsSection
        className="skills text-dark mt-5"
        id="skills"
        ref={skillsRef}
      >
        <Title className="title">
          My <span>Skills</span>
        </Title>
        <Wrapper className="wrapper">
          <SkillContent className="skill-content">
            <SkillTitle className="skill-title">
              <Animated
                animationIn="fadeInLeftBig"
                animationOut="fadeOut"
                isVisible={true}
              >
                Language
              </Animated>
            </SkillTitle>
            <SkillBox className="skill-box skill-box1">
              <SingleSkill className="single-skill">
                <Topic className="topic">Java core</Topic>
                <Topic className="topic">90%</Topic>
              </SingleSkill>
              <Animated
                animationIn="tada"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Slide direction={"left"} triggerOnce>
                  <BarSide className="bar-side">
                    <Bar className="bar bar-3" width="90%" />
                  </BarSide>
                </Slide>
              </Animated>
              <SingleSkill className="single-skill">
                <Topic className="topic">Spring Boot</Topic>
                <Topic className="topic">70%</Topic>
              </SingleSkill>
              <Animated
                animationIn="tada"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Slide triggerOnce>
                  <BarSide className="bar-side">
                    <Bar className="bar bar-3" width="70%" />
                  </BarSide>
                </Slide>
              </Animated>
              <SingleSkill className="single-skill">
                <Topic className="topic">React js</Topic>
                <Topic className="topic">80%</Topic>
              </SingleSkill>
              <Animated
                animationIn="tada"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Slide triggerOnce>
                  <BarSide className="bar-side">
                    <Bar className="bar bar-3" width="80%" />
                  </BarSide>
                </Slide>
              </Animated>
            </SkillBox>
          </SkillContent>
          <SkillContent className="skill-content pt-5">
            <SkillBox className="skill-box skill-box2">
              <SingleSkill className="single-skill">
                <Topic className="topic">HTML</Topic>
                <Topic className="topic">80%</Topic>
              </SingleSkill>
              <Animated
                animationIn="tada"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Slide direction={"right"} triggerOnce>
                  <BarSide className="bar-side">
                    <Bar className="bar bar-3" width="80%" />
                  </BarSide>
                </Slide>
              </Animated>
              <SingleSkill className="single-skill">
                <Topic className="topic">CSS</Topic>
                <Topic className="topic">70%</Topic>
              </SingleSkill>
              <Animated
                animationIn="tada"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Slide direction={"right"} triggerOnce>
                  <BarSide className="bar-side">
                    <Bar className="bar bar-3" width="70%" />
                  </BarSide>
                </Slide>
              </Animated>
              <SingleSkill className="single-skill">
                <Topic className="topic">OOP</Topic>
                <Topic className="topic">70%</Topic>
              </SingleSkill>
              <Animated
                animationIn="tada"
                animationOut="fadeOut"
                isVisible={true}
              >
                <Slide direction={"right"} triggerOnce>
                  <BarSide className="bar-side">
                    <Bar className="bar bar-3" width="70%" />
                  </BarSide>
                </Slide>
              </Animated>
            </SkillBox>
          </SkillContent>
        </Wrapper>
      </SkillsSection>
    </>
  );
};

export default Skills;
