import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm Laszlo. Nice to meet you.
      </SectionTitle>
      <SectionText>
        As a front end web developer I can help you building stunning websites.
      </SectionText>
      <Button onClick={() => window.location = "#about"}>Email me</Button>
    </LeftSection>
  </Section>
);

export default Hero;