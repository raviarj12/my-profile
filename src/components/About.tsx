import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PersonIcon from '@mui/icons-material/Person';

const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Dancing Script', cursive",
  fontSize: '3rem',
  marginBottom: theme.spacing(6),
  color: theme.palette.primary.main,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
}));

const AboutContent = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.mode === 'dark' ? '#242424' : '#ffffff',
  borderRadius: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
}));

const AboutText = styled(Typography)(({ theme }) => ({
  lineHeight: 1.8,
  textAlign: 'justify',
  marginBottom: theme.spacing(4),
  color: theme.palette.mode === 'dark' ? '#e0e0e0' : '#333333',
}));

const HourglassIcon = styled(HourglassEmptyIcon)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  fontSize: '3rem',
  color: '#FFD700',
  animation: 'rotate 2s infinite linear',
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <PageTitle>
        About Me
        <PersonIcon sx={{ fontSize: '3rem', color: '#FFD700' }} />
      </PageTitle>

      <AboutContent elevation={3}>
        <AboutText variant="body1">
          Are you prepared for a thrilling exploration of the world of web development? My name is Raviraj, 
          and as a passionate web developer, I am dedicated to utilizing the latest web technologies and 
          best practices to create practical and impactful web applications that effectively address 
          real-world challenges.
        </AboutText>

        <AboutText variant="body1">
          Keeping pace with the rapid advancements in technology may seem overwhelming, but I am committed 
          to continuous learning and staying up-to-date to overcome any obstacles that may arise. I take 
          great satisfaction in my ability to adapt and my strong enthusiasm for staying informed about 
          the latest technologies and best practices in the field.
        </AboutText>

        <AboutText variant="body1">
          What distinguishes me from others is my capacity to enter flow state in which I am fully 
          engrossed, entirely focused, and completely in tune with the task at hand. This state allows 
          me to tap into my greatest creativity and productivity, ultimately leading to exceptional results.
        </AboutText>

        <AboutText variant="body1">
          I am not only an individual contributor but also a dedicated team player who firmly believes 
          in the power of perseverance and collaboration, knowing that together, we can accomplish anything. 
          I work diligently to not only meet the current objectives but also exceed expectations and 
          deliver exceptional outcomes.
        </AboutText>

        <AboutText variant="body1">
          I value the collective potential of a team to achieve remarkable feats and I understand the 
          significance of time as a valuable resource. I am determined to maximize every moment spent 
          on my work to produce the most practical and outstanding results imaginable.
        </AboutText>

        <AboutText variant="body1" sx={{ mb: 0 }}>
          So, let's embark on this remarkable journey together, where the only limit we have is Time.
        </AboutText>

        <HourglassIcon />
      </AboutContent>
    </Container>
  );
};

export default About; 