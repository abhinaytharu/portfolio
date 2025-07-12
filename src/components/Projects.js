import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';

const ProjectsContainer = styled.div`
  color: white;
  max-width: 1200px;
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? 'linear-gradient(45deg, #ffd700, #ffed4e)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#333' : 'white'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.active ? 'linear-gradient(45deg, #ffd700, #ffed4e)' : 'rgba(255, 255, 255, 0.2)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ProjectIcon = styled.div`
  position: relative;
  z-index: 2;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffd700;
`;

const ProjectDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 15px;
  font-size: 0.8rem;
  color: #ffd700;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'BabyBot Voice Assistant',
      description: 'A smart voice-based AI assistant with learning and persistent memory capabilities. Features natural language processing, voice recognition, and adaptive learning algorithms.',
      category: 'ai',
      technologies: ['Python', 'AI/ML', 'Voice Recognition', 'Memory Systems', 'Natural Language'],
      github: 'https://github.com/abhinaytharu',
      live: 'https://github.com/abhinaytharu',
      icon: '🤖'
    },
    {
      id: 2,
      title: 'HTML Elements Showcase',
      description: 'An interactive class 11 project demonstrating all HTML tags and their real use cases. Educational tool for learning web development fundamentals.',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Education', 'Interactive'],
      github: 'https://github.com/abhinaytharu',
      live: 'https://github.com/abhinaytharu',
      icon: '📚'
    },
    {
      id: 3,
      title: 'Smart Audio-Only YouTube App',
      description: 'A wrapper for YouTube that streams only audio for personal use. Optimized for background listening and reduced bandwidth consumption.',
      category: 'desktop',
      technologies: ['Electron.js', 'TypeScript', 'YouTube API', 'Audio Processing', 'Desktop App'],
      github: 'https://github.com/abhinaytharu',
      live: 'https://github.com/abhinaytharu',
      icon: '🎵'
    },
    {
      id: 4,
      title: 'Custom Portfolio Site',
      description: 'Vibe-coded portfolio with storytelling, personal branding, and AI integration. Features smooth animations and modern design principles.',
      category: 'web',
      technologies: ['React', 'Styled Components', 'Anime.js', 'AI Integration', 'Storytelling'],
      github: 'https://github.com/abhinaytharu',
      live: 'https://github.com/abhinaytharu',
      icon: '🎨'
    },
    {
      id: 5,
      title: 'Physics & Math Learning Tools',
      description: 'Educational tools and resources for NEB level physics and mathematics, focusing on vectors, rotation, and electromagnetism concepts.',
      category: 'education',
      technologies: ['Mathematics', 'Physics', 'Education', 'Interactive Learning', 'NEB Level'],
      github: 'https://github.com/abhinaytharu',
      live: 'https://github.com/abhinaytharu',
      icon: '⚡'
    },
    {
      id: 6,
      title: 'YouTube Content Creation',
      description: 'Original YouTube content using AI, storytelling, and cinematics without showing face. Focus on educational and entertainment value.',
      category: 'content',
      technologies: ['AI', 'Storytelling', 'Cinematics', 'YouTube', 'Content Creation'],
      github: 'https://github.com/abhinaytharu',
      live: 'https://youtube.com/@eliteabhinay',
      icon: '📹'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & Bots' },
    { id: 'desktop', label: 'Desktop Apps' },
    { id: 'education', label: 'Education' },
    { id: 'content', label: 'Content Creation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsContainer>
      <SectionTitle data-animation="fadeIn">Featured Projects</SectionTitle>
      
      <FilterButtons>
        {filters.map(filter => (
          <FilterButton
            key={filter.id}
            active={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FilterButtons>
      
      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} data-animation="scaleIn">
            <ProjectImage>
              <ProjectIcon>{project.icon}</ProjectIcon>
            </ProjectImage>
            
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <ProjectTech>
                {project.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </ProjectTech>
              
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithubBrand} />
                  Code
                </ProjectLink>
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default Projects; 