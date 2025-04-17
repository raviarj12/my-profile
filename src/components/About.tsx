import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
}));

const AboutGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: theme.spacing(4),
  width: '100%',
}));

const AboutCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.5)',
  },
}));

const AboutIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: '#2196F3',
  marginBottom: theme.spacing(2),
  '& > svg': {
    fontSize: 'inherit',
  },
}));

const aboutSections = [
  {
    title: 'About Me',
    content: 'I am a passionate developer with a strong focus on creating innovative solutions. My journey in technology has been driven by curiosity and a desire to build meaningful applications.',
    icon: <PersonIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'Education',
    content: 'Bachelor of Technology in Computer Science\nUniversity of Technology\nGraduated with honors in 2020',
    icon: <SchoolIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'Experience',
    content: 'Senior Developer at Tech Solutions (2021-Present)\nFull Stack Developer at WebWorks (2019-2021)\nJunior Developer at CodeCraft (2018-2019)',
    icon: <WorkIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'Interests',
    content: 'Web Development\nMachine Learning\nOpen Source Projects\nTechnical Writing\nUI/UX Design',
    icon: <InterestsIcon sx={{ fontSize: 'inherit' }} />,
  },
];

const About = () => {
  return (
    <AboutContainer>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#fff', textAlign: 'center', mb: 6 }}>
        About Me
      </Typography>
      <AboutGrid>
        {aboutSections.map((section, index) => (
          <AboutCard key={index}>
            <AboutIcon>{section.icon}</AboutIcon>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: '#fff' }}>
              {section.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                whiteSpace: 'pre-line',
                textAlign: 'center',
              }}
            >
              {section.content}
            </Typography>
          </AboutCard>
        ))}
      </AboutGrid>
    </AboutContainer>
  );
};

export default About; 