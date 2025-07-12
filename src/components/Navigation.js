import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
  
  &.scrolled {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffd700;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffd700;
    transition: width 0.4s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active::after {
    width: 100%;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #ffd700;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
  
  &.open {
    transform: translateY(0);
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 215, 0, 0.1);
    color: #ffd700;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      console.error('Section not found:', sectionId);
      return;
    }

    // Use native smooth scrolling for better reliability
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
    
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId) => {
    smoothScrollTo(sectionId);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <Nav className={`nav-item ${isScrolled ? 'scrolled' : ''}`}>
        <NavContainer>
          <Logo onClick={() => smoothScrollTo('header')}>Portfolio</Logo>
          
          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="nav-item"
              >
                {item.label}
              </NavLink>
            ))}
          </NavLinks>
          
          <HamburgerButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </HamburgerButton>
        </NavContainer>
      </Nav>
      
      <MobileMenu className={isMenuOpen ? 'open' : ''}>
        {navItems.map((item) => (
          <MobileNavLink
            key={item.id}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </MobileNavLink>
        ))}
      </MobileMenu>
    </>
  );
}

export default Navigation; 