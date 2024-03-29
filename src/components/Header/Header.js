import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Img } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Img src="/images/logo21_white.png" /> 
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px", marginLeft: "12px"}}>
          <Span>Laszlo Somogyi</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>            
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/laszlosomogyimusic">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/laszlo-somogyi/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/channel/UCd8ylZMjL45PC57bpZjS8Pg">
        <AiFillYoutube size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
