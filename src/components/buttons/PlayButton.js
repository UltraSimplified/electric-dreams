import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

export default function PlayButton(props) {
  const { title, subtitle, track, picture } = props

  return (
    <Wrapper>
      <IconWrapper>
        <Icon src={picture} className="icon" />
      </IconWrapper>

      <TrackWrapper>
        <AudioPlayer
          src={track}
          onPlay={e => console.log("onPlay")}
          customVolumeControls={[]}
        />

        <TextWrapper>
          <Title>{title || "Song"}</Title>
          <Subtitle>{subtitle || "Artist"}</Subtitle>
        </TextWrapper>
      </TrackWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 410px;
  height: 160px;
  padding: 10px;
  margin: 20px 0;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 80px 300px;
  align-items: center;
  gap: 10px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`

const TrackWrapper = styled.div`
  display: grid;
  gap: 10px;
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: 100px, 300px;
  align-items: center;
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`

const Icon = styled.img`
  width: 90px;
  height: 88px;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`

const IconWrapper = styled.div`
  width: 100px;
  height: 137px;
  justify-content: center;
  align-content: top;
`
