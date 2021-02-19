import React, { useState } from "react";
import Booms from "../Booms/Booms";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";

import studentsImage from "../../assets/images/students.png";
import enterpriseImage from "../../assets/images/buildings.png";

import {
  Announcements,
  GuestHomeWrapper,
  Container,
  StudentSection,
  Button,
  RightSection,
  LeftSection,
  ImageWrapper,
  EnterpriseSection,
  Toggles,
  Span,
  Section,
  H5
} from "./styles";

const GuestHome = () => {
  const [students, setStudents] = useState(true);

  return (
    <GuestHomeWrapper>
      <Announcements>
        <span>Lanzamos nuestra carrera parttime! 🚀</span>
      </Announcements>
      <Container>
        {
          students ? (
            <StudentSection>
              <LeftSection>
                <H5>¿Que ofrecemos?</H5>
                <Toggles>
                  <h6 onClick={() => setStudents(true)}>Para <Span active={students} >Estudiantes</Span></h6>
                  <h6 onClick={() => setStudents(false)}>Para <Span active={!students}>Empresas</Span></h6>
                </Toggles>
                <h1>Invertimos en tu educación.</h1>
                <h3>Comienza a estudiar programación.</h3>
                <p>Conviértete en un desarrollador de software en 4 meses o 8 meses a remoto. Y lo mejor, sólo nos pagas cuando consigues un trabajo.</p>
                <Button to="/login">Comienza a estudiar</Button>
              </LeftSection>
              <RightSection>
                <ImageWrapper>
                  <img src={studentsImage} alt={"Students"} />
                  <Dots />
                </ImageWrapper>
              </RightSection>
            </StudentSection>
          ) : (
              <EnterpriseSection>
                <LeftSection>
                  <H5>¿Que ofrecemos?</H5>
                  <Toggles>
                    <h6 onClick={() => setStudents(true)}>Para <Span active={students} >Estudiantes</Span></h6>
                    <h6 onClick={() => setStudents(false)}>Para <Span active={!students}>Empresas</Span></h6>
                  </Toggles>
                  <h1>Encuentra el mejor talento.</h1>
                  <h3>Busca el mejor talento para tu equipo.</h3>
                  <p>En nuestra bolsa de trabajo encontraras variedad de desarolladores con distintas áreas de expertise.</p>
                  <Button to="/register">Registrata tu empresa</Button>
                </LeftSection>
                <RightSection>
                  <ImageWrapper>
                    <img src={enterpriseImage} alt={"Students"} />
                    <Dots />
                  </ImageWrapper>
                </RightSection>
              </EnterpriseSection>
            )
        }
        <Booms />
        <Section>
          <h4>¿Listo para cambiar tu vida?</h4>
          <Button to="/login">Comienza a estudiar</Button>
        </Section>
      </Container>
    </GuestHomeWrapper>
  );
};
export default GuestHome;
