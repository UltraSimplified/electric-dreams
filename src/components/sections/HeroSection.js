import React from "react"
import styled, { keyframes } from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1 } from "../styles/TextStyles"
import WaveBackground from "../backgrounds/WaveBackground"
import Tracks from "./Tracks"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            <span>ALTO A2s</span>
            <br />
            Together in <br />
            <span>
              Electric <br />
              Dreams
            </span>
          </Title>
          <Tracks />
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`

const TextWrapper = styled.div`
  max-width: 450px;
  display: grid;
  gap: 30px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }

    :nth-child(2) {
      animation-delay: 0.2s;
    }

    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #fff 0%, rgba(202, 44, 140, 1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  span {
    background: linear-gradient(
      180deg,
      rgba(170, 220, 250, 1) 0%,
      rgba(18, 112, 167, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    text-fill-color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
  }
`
