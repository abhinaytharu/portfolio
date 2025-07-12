import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.div`
  color: white;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div``;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const PersonalInfo = styled.div``;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(10px);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #333;
  font-size: 1.2rem;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const SkillsSection = styled.div`
  margin-top: 3rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillPercentage = styled.span`
  font-size: 0.9rem;
  opacity: 0.7;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  border-radius: 4px;
  width: ${props => props.percentage}%;
  transform: translateX(-100%);
  transition: transform 1.5s ease-out;
  
  &.animate {
    transform: translateX(0);
  }
`;

const DownloadCV = styled.button`
  display: block;
  margin: 3rem auto 0;
  padding: 15px 30px;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #333;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
  }
`;

function About() {
  const skills = [
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Python', percentage: 75 },
    { name: 'UI/UX Design', percentage: 70 }
  ];

  return (
    <AboutContainer>
      <SectionTitle data-animation="fadeIn">About Me</SectionTitle>
      
      <ContentGrid>
        <AboutText data-animation="slideInLeft">
          <AboutParagraph>
            I'm Abhinay, a curious and passionate self-learner who believes in learning through doing. 
            I explore a wide range of fields including web development, C/C++ programming, desktop apps with Electron, 
            AI chatbot development, and physics & mathematics.
          </AboutParagraph>
          
          <AboutParagraph>
            I prioritize family, learning, and meaningful projects, and I constantly strive to push my boundaries 
            creatively and intellectually. My approach is hands-on - I learn best by building real projects and 
            solving actual problems rather than just theoretical study.
          </AboutParagraph>
          
          <AboutParagraph>
            Currently, I'm focused on mastering AI system development with fewer tokens and smarter human-like processing, 
            building original YouTube content using AI and storytelling, and continuing my journey as a self-taught developer 
            focusing on impactful tools and real-life problems.
          </AboutParagraph>
        </AboutText>
        
        <PersonalInfo data-animation="slideInRight">
          <InfoItem>
            <InfoIcon>
              <FontAwesomeIcon icon={faUser} />
            </InfoIcon>
            <InfoContent>
              <InfoLabel>Name</InfoLabel>
              <InfoValue>Abhinay</InfoValue>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </InfoIcon>
            <InfoContent>
              <InfoLabel>Focus Areas</InfoLabel>
              <InfoValue>Web Dev, C/C++, AI, Physics</InfoValue>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </InfoIcon>
            <InfoContent>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>abhinaytharu5@gmail.com</InfoValue>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FontAwesomeIcon icon={faPhone} />
            </InfoIcon>
            <InfoContent>
              <InfoLabel>Learning Style</InfoLabel>
              <InfoValue>Self-Taught & Hands-On</InfoValue>
            </InfoContent>
          </InfoItem>
        </PersonalInfo>
      </ContentGrid>
      
      <SkillsSection data-animation="fadeIn">
        <SkillsTitle>Key Skills</SkillsTitle>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillHeader>
              <SkillName>{skill.name}</SkillName>
              <SkillPercentage>{skill.percentage}%</SkillPercentage>
            </SkillHeader>
            <ProgressBar>
              <ProgressFill 
                percentage={skill.percentage} 
                className="progress-fill"
              />
            </ProgressBar>
          </SkillItem>
        ))}
      </SkillsSection>
      
      <DownloadCV onClick={() => {
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Abhinay - Self-Learner & Developer Resume\n\nABOUT ME:\nI\'m Abhinay, a curious and passionate self-learner who believes in learning through doing. I explore web development, C/C++ programming, desktop apps with Electron, AI chatbot development, and physics & mathematics.\n\nSKILLS:\nProgramming Languages: C, C++, JavaScript, TypeScript, Python (basics)\nWeb Development: HTML, CSS, JavaScript, React, Tailwind CSS\nDesktop Development: Electron.js + TypeScript\nAI & Bots: Voice-enabled chatbot development, rule-based systems, memory features\nPhysics & Math: Strong understanding of NEB and entrance-level topics\n\nPROJECTS:\n- BabyBot Voice Assistant: Smart voice-based AI assistant with learning capabilities\n- HTML Elements Showcase: Interactive educational project for web development\n- Smart Audio-Only YouTube App: Desktop app for audio-only YouTube streaming\n- Custom Portfolio Site: Vibe-coded portfolio with AI integration\n\nCONTACT:\nEmail: abhinaytharu5@gmail.com\nGitHub: github.com/abhinaytharu\nYouTube: youtube.com/@eliteabhinay');
        link.download = 'Abhinay_Resume.txt';
        link.click();
      }}>
        Download Full Resume
      </DownloadCV>
    </AboutContainer>
  );
}

export default About; 