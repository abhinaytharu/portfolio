import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ExperienceContainer = styled.div`
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

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  
  &:nth-child(odd) {
    flex-direction: row;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
    }
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const TimelineDot = styled.div`
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 20px;
    transform: translate(-50%, -50%);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ffd700;
`;

const CompanyName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobDescription = styled.p`
  line-height: 1.6;
  opacity: 0.9;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const SkillTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
  color: #ffd700;
`;

function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and AWS. Managed a team of 5 developers and implemented CI/CD pipelines.',
      skills: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client projects using modern web technologies. Collaborated with design team to implement responsive UI/UX.',
      skills: ['React', 'Python', 'PostgreSQL', 'Redis', 'GraphQL']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency ABC',
      location: 'Los Angeles, CA',
      period: '2019 - 2020',
      description: 'Developed interactive websites and web applications for various clients. Focused on creating engaging user experiences and optimizing performance.',
      skills: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Webpack']
    }
  ];

  return (
    <ExperienceContainer>
      <SectionTitle data-animation="fadeIn">Work Experience</SectionTitle>
      
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} data-animation={index % 2 === 0 ? 'slideInLeft' : 'slideInRight'}>
            <TimelineContent>
              <JobTitle>{exp.title}</JobTitle>
              <CompanyName>{exp.company}</CompanyName>
              
              <JobMeta>
                <MetaItem>
                  <FontAwesomeIcon icon={faCalendar} />
                  {exp.period}
                </MetaItem>
                <MetaItem>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {exp.location}
                </MetaItem>
              </JobMeta>
              
              <JobDescription>{exp.description}</JobDescription>
              
              <SkillsList>
                {exp.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex}>{skill}</SkillTag>
                ))}
              </SkillsList>
            </TimelineContent>
            
            <TimelineDot />
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
}

export default Experience; 