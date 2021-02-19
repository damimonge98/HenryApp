import React from 'react';
import ReactPlayer from "react-player";
import { ReactComponent as VolumeIcon } from "../../assets/icons/volume.svg";
import { ReactComponent as FullScreen } from "../../assets/icons/fullscreen.svg";
import {
  VideoPlayerWrapper,
  Controllers,
  TopControllers,
  MiddleControllers,
  BottomControllers,
  InstructurInfo,
  Span,
  Avatar,
  VideoInfo,
  VideoName,
  ModuleName,
  VideoControllers
} from './styles';

const VideoPlayer = () => {
  return (
    <VideoPlayerWrapper>
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={"https://vimeo.com/88482835"}
        playing={true}
        muted={false}
      />
      <Controllers>
        <TopControllers>
          <InstructurInfo>
            <Avatar src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU"} />
            <Span>Alejo Gschwind</Span>
          </InstructurInfo>
          <VideoInfo>
            <VideoName>
              React & Redux
            </VideoName>
            <ModuleName>
              Lecutre 12 - Module 3
            </ModuleName>
          </VideoInfo>
          <VideoControllers>
            <VolumeIcon />
            <FullScreen />
          </VideoControllers>
        </TopControllers>
        <MiddleControllers>

        </MiddleControllers>
        <BottomControllers>

        </BottomControllers>
      </Controllers>
    </VideoPlayerWrapper>
  );
};

export default VideoPlayer;
