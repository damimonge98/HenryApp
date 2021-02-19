import styled from "styled-components";

export const JobCardWrapper = styled.div`
  max-width: 350px;
  height: 450px;
  padding: 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Row = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 1rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const EnterpriseName = styled.h3`
  font-size: 16px;
  font-weight: 400;
  `;

export const Location = styled.h3`
  padding: 0.2rem 0;
  font-size: 18px;
  font-weight: 400;
`;

export const Remote = styled.div`
  padding: 0.2rem  0.5rem;
  background: black;
  color: white;
  font-weight: 600;
  `;

export const Title = styled.h1`
  margin-right: 1rem;
  font-weight: 500;
  font-size: 24px;
`;

export const Description = styled.p`
  width: 100%;
  height: 40%;
  overflow: hidden;
  font-weight: 400;
  font-size: 16px;
  color: #5C5C5C;
`;

export const Button = styled.a`
  height: 40px;
  padding: 0.5rem 2rem;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #0b66c3;
  color: white;
  font-weight: 500;
  font-size: 18px;
  backdrop-filter: blur(250px);
  border: none;
  margin: 1rem auto;
  cursor: pointer;
`;

export const Type = styled.span`
  font-weight: normal;
  font-size: 12px;
`;