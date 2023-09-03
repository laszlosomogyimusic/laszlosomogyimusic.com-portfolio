import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:laszlosomogyimusic@proton.me">laszlosomogyimusic@proton.me</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Do the music, do the dance</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/laszlosomogyimusic">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/laszlo-somogyi/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/channel/UCd8ylZMjL45PC57bpZjS8Pg">
            <AiFillYoutube size="3rem"/>
          </SocialIcons>      
        </SocialContainer>    
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
