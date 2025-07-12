import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin: 60px 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 32px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #ff6a00, #6a5cff);
  border-radius: 2px;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  background: #fff;
  border: 4px solid #ff6a00;
  border-radius: 50%;
  position: absolute;
  left: 24px;
  top: 0;
  z-index: 2;
`;

const DateLabel = styled.div`
  min-width: 120px;
  text-align: right;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 600;
  margin-right: 60px;
`;

const ContentBox = styled.div`
  background: rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 24px 32px;
  color: #fff;
  min-width: 300px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.12);
`;

const timelineData = [
  {
    date: 'June 2018',
    title: 'Good Design Award',
    description: 'Adam winning Good Design Award Australia',
    image: 'https://i.imgur.com/your-image.jpg', // Replace with your image or remove
  },
  {
    date: '2020',
    title: 'Started AI Chatbot',
    description: 'Began developing voice-enabled AI chatbots with memory.',
  },
  {
    date: '2022',
    title: 'Portfolio Launch',
    description: 'Launched my custom portfolio with advanced animations.',
  },
  {
    date: '2025',
    title: 'Learning & Building',
    description: 'Continuing to learn, build, and explore new tech.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const Timeline = () => (
  <TimelineContainer>
    <TimelineLine />
    {timelineData.map((item, idx) => (
      <TimelineItem
        key={idx}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: idx * 0.1 }}
        variants={itemVariants}
      >
        <Dot />
        <DateLabel>{item.date}</DateLabel>
        <ContentBox>
          <h3 style={{margin:0}}>{item.title}</h3>
          <p style={{margin:'8px 0 0 0'}}>{item.description}</p>
          {item.image && (
            <img src={item.image} alt="" style={{marginTop:16, borderRadius:8, maxWidth:180}} />
          )}
        </ContentBox>
      </TimelineItem>
    ))}
  </TimelineContainer>
);

export default Timeline;
