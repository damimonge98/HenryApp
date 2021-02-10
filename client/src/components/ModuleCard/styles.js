import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModuleCardWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
`;

export const TopWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin: 0.1rem 0.5rem;
  font-size: 22px;
  color: #323232;
`;

export const Description = styled.h3`
  width: 500px;
  margin: 0.1rem 0.5rem;
  color: gray;
  line-height: 1.5rem;
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const LectureList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled(Link)`
  height: 50px;
  width: 250px;
  margin: 1rem auto;
  padding: 1rem 4rem;
  background: black;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisabledButton = styled.div`
  height: 50px;
  width: 250px;
  margin: 1rem auto;
  padding: 1rem 4rem;
  background: #b3b3b3;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
`;