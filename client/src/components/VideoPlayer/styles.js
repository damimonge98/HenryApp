import styled from "styled-components";

export const VideoPlayerWrapper = styled.div`
  margin: 2rem;
  background: red;
  width: 100%;
  height: 100%;
  max-height: 480px;
  position: relative;
`;

export const TopControllers = styled.div`
  height: 10%;
  /* background: red; */
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const MiddleControllers = styled.div`
  height: 30%;
  background: red;
`;

export const BottomControllers = styled.div`
  height: 10%;
  background: red;
`;

export const Controllers = styled.div`
  background: rgba(0,0,0,0.6);
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InstructurInfo = styled.div`
  width: max-content;
  padding: 0 1rem;
  height: 100%;
  /* background: green; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border: 1px solid white;
  border-radius: 50%;
  margin-right: 10px;
  background: white;
`;

export const Span = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: white;
`;

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VideoName = styled.span`
  font-weight: 600;
  font-size: 28px;
  color: white;
`;

export const ModuleName = styled.span`
  font-weight: 300;
  font-size: 14px;
  color: white;
`;

export const VideoControllers = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  & svg {
    height: 25px;
    margin: 0.2rem;
  }
`;


