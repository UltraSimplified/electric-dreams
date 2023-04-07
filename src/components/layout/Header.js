import { Link } from "gatsby"
import React, { useRef } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function Header() {
  const ref = useRef()

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/some-voices-logo.png" alt="Some Voices" />
      </Link>
      <MenuWrapper count={menuData.length} ref={ref}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton item={item} key={index} />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768) {
    top: 30px;
  }

  @media (max-width: 450) {
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`
