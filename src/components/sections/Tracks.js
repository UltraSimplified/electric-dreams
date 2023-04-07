import React from "react"
import styled from "styled-components"
import PlayButton from "../buttons/PlayButton"

export default function Tracks() {
  return (
    <Wrapper>
      <div>
        <PlayButton
          title="A little respect"
          subtitle="Erasure"
          track="audio/alto-a2/a-little-respect.mp3"
          picture="images/artists/erasure.png"
        />
      </div>

      <div>
        <PlayButton
          title="Together in Electric Dreams"
          subtitle="Philip Oakey &amp; Giorgio Moroder"
          track="audio/alto-a2/together-in-electric-dreams.mp3"
          picture="images/artists/oakey-moroder.jpg"
        />
      </div>

      <div>
        <PlayButton
          title="I Wanna Dance with Somebody"
          subtitle="Whitney Houston"
          track="audio/alto-a2/i-wanna-dance-with-somebody.mp3"
          picture="images/artists/whitney.png"
        />
      </div>

      <div>
        <PlayButton
          title="Use it Up and Wear it Out"
          subtitle="Odyssey"
          track="audio/alto-a2/use-it-up-and-wear-it-out.mp3"
          picture="images/artists/odyssey.jpg"
        />
      </div>

      <div>
        <PlayButton
          title="You Can Call Me Al"
          subtitle="Paul Simon"
          track="audio/alto-a2/you-can-call-me-al.mp3"
          picture="images/artists/paul-simon.jpg"
        />
      </div>

      <div>
        <PlayButton
          title="Mad World"
          subtitle="Tears for Fears"
          track="audio/alto-a2/mad-world.mp3"
          picture="images/artists/tears-for-fears.jpg"
        />
      </div>

      <div>
        <PlayButton
          title="I think We're Alone Now"
          subtitle="Tiffany"
          track="audio/alto-a2/i-think-were-alone-now.mp3"
          picture="images/artists/tiffany.jpg"
        />
      </div>

      <div>
        <PlayButton
          title="Let's Dance"
          subtitle="David Bowie"
          track="audio/alto-a2/lets-dance.mp3"
          picture="images/artists/david-bowie.jpg"
        />
      </div>
      <div>
        <PlayButton
          title="Everywhere"
          subtitle="Fleetwood Mac"
          track="audio/alto-a2/everywhere.mp3"
          picture="images/artists/fleetwood-mac.jpg"
        />
      </div>
      <div>
        <PlayButton
          title="1999"
          subtitle="Prince"
          track="audio/alto-a2/1999.mp3"
          picture="images/artists/prince.png"
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.4);
  }

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`
