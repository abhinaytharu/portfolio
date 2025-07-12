import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const CategoryIcon = styled.div`
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

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-weight: 500;
  flex: 1;
`;

const SkillLevel = styled.div`
  width: 100px;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const SkillFill = styled.div`
  height: 100%;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  border-radius: 4px;
  width: ${props => props.level}%;
  transform: translateX(-100%);
  transition: transform 2s ease-out;
  
  &.animate {
    transform: translateX(0);
  }
`;

const AdditionalSkills = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const AdditionalTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

const SkillTag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 25px;
  font-size: 0.9rem;
  color: #ffd700;
  transition: all 0.4s ease;
  
  &:hover {
    background: rgba(255, 215, 0, 0.3);
    transform: translateY(-3px);
  }
`;

function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: faCode,
      skills: [
        { name: 'C/C++', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Web Development',
      icon: faDatabase,
      skills: [
        { name: 'React', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Electron.js', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 95 }
      ]
    },
    {
      title: 'AI & Development',
      icon: faPalette,
      skills: [
        { name: 'Voice Chatbots', level: 80 },
        { name: 'Rule-based Systems', level: 85 },
        { name: 'Memory Features', level: 75 },
        { name: 'AI Integration', level: 80 },
        { name: 'System Design', level: 75 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: faTools,
      skills: [
        { name: 'Linux (Lubuntu)', level: 85 },
        { name: 'Windows Optimization', level: 90 },
        { name: 'Figma', level: 70 },
        { name: 'YouTube Content', level: 80 },
        { name: 'Hardware Engineering', level: 75 }
      ]
    }
  ];

  const additionalSkills = [
    'Physics & Mathematics', 'NEB Level Physics', 'Electromagnetism', 'Vectors & Rotation',
    'General Practitioner (GP)', 'Deep AI Systems', 'JARVIS-style Intelligence',
    'PC Building', 'Storytelling', 'Cinematic Tech', 'YouTube Shorts',
    'Self-Study', 'Problem Solving', 'Creative Thinking'
  ];

  useEffect(() => {
    // Animate skill bars when component mounts with increased delay
    const skillFills = document.querySelectorAll('.skill-fill');
    skillFills.forEach((fill, index) => {
      setTimeout(() => {
        fill.classList.add('animate');
      }, index * 150); // Increased delay for smoother animation
    });
  }, []);

  return (
    <SkillsContainer>
      <SectionTitle data-animation="fadeIn">Skills & Expertise</SectionTitle>
      
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} data-animation="scaleIn">
            <CategoryHeader>
              <CategoryIcon>
                <FontAwesomeIcon icon={category.icon} />
              </CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>
                    <SkillFill 
                      level={skill.level} 
                      className="skill-fill"
                    />
                  </SkillLevel>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
      
      <AdditionalSkills data-animation="fadeIn">
        <AdditionalTitle>Additional Skills & Technologies</AdditionalTitle>
        <SkillsTags>
          {additionalSkills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </SkillsTags>
      </AdditionalSkills>
    </SkillsContainer>
  );
}

export default Skills; 