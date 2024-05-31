// App.js
import React, { useEffect, useRef } from "react";
import {
  Section,
  Row,
  Column,
  Box,
  EducationContent,
  Content,
} from "../Education/EducationWrapper";

const App = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      section.classList.add("start-animation");
    }
  }, []);

  return (
    <Section className="education text-dark" id="education" ref={sectionRef}>
      <h2 className="title">
        My <span>Education</span>
      </h2>
      <Row className="row">
        <Column className="column">
          <h2>Education</h2>
          <Box className="box">
            <EducationContent className="education-content">
              <Content className="content">
                <div className="year">
                  2011-2020<i className="bx bxs-calendar"></i>
                </div>
                <h3>Degree school</h3>
                <p>School subjects</p>
              </Content>
            </EducationContent>
            <EducationContent className="education-content">
              <Content className="content">
                <div className="year">
                  2020-22<i className="bx bxs-calendar"></i>
                </div>
                <h3>Degree Lycycum</h3>
                <p>
                  Ichki ishlar vazirligi Navoiy akademik litseyi
                  (Ijtimoiy-humanitar fanlar)
                </p>
              </Content>
            </EducationContent>
            <EducationContent className="education-content">
              <Content className="content">
                <div className="year">
                  2023-24<i className="bx bxs-calendar"></i>
                </div>
                <h3>Degree Junior</h3>
                <p>Mohirdev Full stack Java course</p>
              </Content>
            </EducationContent>
            <EducationContent className="education-content">
              <Content className="content">
                <div className="year">
                  2023-24<i className="bx bxs-calendar"></i>
                </div>
                <h3>Degree Academy</h3>
                <p>PDP Academy frontend ReactJs</p>
              </Content>
            </EducationContent>
          </Box>
        </Column>
      </Row>
    </Section>
  );
};

export default App;
