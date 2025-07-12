import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import styled from 'styled-components';
import Header from './components/Header';
import Timeline from './components/Timeline';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 80px 0;
  position: relative;
  
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.05);
  }
`;

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Smooth scrolling function
    const smoothScrollTo = (target, duration = 1000) => {
      const targetElement = typeof target === 'string' ? document.querySelector(target) : target;
      if (!targetElement) return;

      const targetPosition = targetElement.offsetTop - 70; // Account for fixed navbar
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      // Easing function for smooth animation
      const easeInOutCubic = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      };

      requestAnimationFrame(animation);
    };

    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"], button[onclick*="scroll"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href') || link.getAttribute('data-target');
        if (target) {
          smoothScrollTo(target);
        }
      });
    });

    // Initial page load animation with increased duration
    anime({
      targets: '.header-content',
      opacity: [0, 1],
      translateY: [50, 0],
      delay: 300,
      duration: 1200,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.nav-item',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(150),
      duration: 1200,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.section-content',
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(250),
      duration: 1200,
      easing: 'easeOutExpo'
    });

    // Scroll-triggered animations with increased duration
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.dataset.animation || 'fadeIn';
          
          switch (animationType) {
            case 'slideInLeft':
              anime({
                targets: element,
                translateX: [50, 0],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutExpo'
              });
              break;
            case 'slideInRight':
              anime({
                targets: element,
                translateX: [-50, 0],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutExpo'
              });
              break;
            case 'scaleIn':
              anime({
                targets: element,
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutExpo'
              });
              break;
            default:
              anime({
                targets: element,
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 1200,
                easing: 'easeOutExpo'
              });
          }
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
      // Clean up event listeners
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <AppContainer ref={appRef}>
      <Navigation />
      <ContentWrapper>
        <Header />
        <Section id="timeline">
          <Timeline />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </ContentWrapper>
    </AppContainer>
  );
}

export default App; 