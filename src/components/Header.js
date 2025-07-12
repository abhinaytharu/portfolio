import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
  import anime from 'animejs';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  // import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
  import { faYoutube } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const Shape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 8s ease-in-out infinite;
  
  &:nth-child(1) {
    width: 80px;
    height: 80px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    width: 120px;
    height: 120px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    width: 60px;
    height: 60px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const Content = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`;

const Greeting = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(30px);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  opacity: 0;
  transform: translateY(30px);
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(30px);
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &.primary {
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    color: #333;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(255, 215, 0, 0.4);
    }
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(30px);
`;

const SocialLink = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.4s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px) scale(1.1);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 0.9rem;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background: white;
    animation: scroll 2.5s infinite;
  }
  
  @keyframes scroll {
    0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    50% { transform: translateX(-50%) translateY(10px); opacity: 0.3; }
  }
`;

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate header elements with increased duration
    anime({
      targets: '.greeting',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 600,
      duration: 1400,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.name',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 800,
      duration: 1400,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.title',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 1000,
      duration: 1400,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.description',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 1200,
      duration: 1400,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.cta-buttons',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 1400,
      duration: 1400,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.social-links',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 1600,
      duration: 1400,
      easing: 'easeOutExpo'
    });

    // Animate background shapes with increased duration
    anime({
      targets: '.shape',
      translateY: [0, -20],
      rotate: [0, 180],
      delay: anime.stagger(2500),
      duration: 8000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
  }, []);

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.offsetTop - 70;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    const duration = 1200;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutCubic = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    };

    requestAnimationFrame(animation);
  };

  const downloadResume = () => {
    // For now, create a text file until PDF is uploaded
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Abhinay - Self-Learner & Developer Resume

ABOUT ME:
I'm Abhinay, a curious and passionate self-learner who believes in learning through doing. I explore web development, C/C++ programming, desktop apps with Electron, AI chatbot development, and physics & mathematics.

SKILLS:
Programming Languages: C, C++, JavaScript, TypeScript, Python (basics)
Web Development: HTML, CSS, JavaScript, React, Tailwind CSS
Desktop Development: Electron.js + TypeScript
AI & Bots: Voice-enabled chatbot development, rule-based systems, memory features
Physics & Math: Strong understanding of NEB and entrance-level topics

PROJECTS:
- BabyBot Voice Assistant: Smart voice-based AI assistant with learning capabilities
- HTML Elements Showcase: Interactive educational project for web development
- Smart Audio-Only YouTube App: Desktop app for audio-only YouTube streaming
- Custom Portfolio Site: Vibe-coded portfolio with AI integration

CONTACT:
Email: abhinaytharu5@gmail.com
GitHub: github.com/abhinaytharu
YouTube: youtube.com/@eliteabhinay`);
    link.download = 'Abhinay_Resume.txt';
    link.click();
    
    // TODO: Replace with PDF download when file is uploaded
    // const link = document.createElement('a');
    // link.href = '/resume.pdf'; // Path to your uploaded PDF
    // link.download = 'Abhinay_Resume.pdf';
    // link.click();
  };

  return (
    <HeaderContainer ref={headerRef} id="header">
      <BackgroundShapes>
        <Shape className="shape" />
        <Shape className="shape" />
        <Shape className="shape" />
      </BackgroundShapes>
      
      <Content className="header-content">
        <Greeting className="greeting">Hello, I'm</Greeting>
        <Name className="name">Abhinay</Name>
        <Title className="title">Self-Learner & Developer</Title>
        <Description className="description">
          A curious and passionate self-learner who believes in learning through doing. 
          I explore web development, C/C++ programming, desktop apps, AI chatbots, and physics & mathematics. 
          I prioritize family, learning, and meaningful projects.
        </Description>
        
        <CTAButtons className="cta-buttons">
          <Button className="primary" onClick={downloadResume}>
            <FontAwesomeIcon icon={faDownload} />
            Download Resume
          </Button>
          <Button className="secondary" onClick={() => smoothScrollTo('about')}>
            Learn More
          </Button>
        </CTAButtons>
        
        <SocialLinks className="social-links">
          <SocialLink href="https://github.com/abhinaytharu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://youtube.com/@eliteabhinay" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </SocialLink>
          <SocialLink href="mailto:abhinaytharu5@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialLink>
        </SocialLinks>
      </Content>
      
      <ScrollIndicator onClick={() => smoothScrollTo('about')}>
        Scroll to explore
      </ScrollIndicator>
    </HeaderContainer>
  );
}

export default Header; 