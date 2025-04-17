import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BrushIcon from '@mui/icons-material/Brush';

const SkillsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  minHeight: '100vh',
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: theme.spacing(4),
  width: '100%',
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  '& > svg': {
    fontSize: 'inherit',
  },
}));

const skillSets = [
  {
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Next.js', 'Material-UI', 'Tailwind CSS'],
    icon: <CodeIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs'],
    icon: <StorageIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'Linux'],
    icon: <CloudIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'UI/UX Design',
    skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Wireframing', 'Prototyping'],
    icon: <BrushIcon sx={{ fontSize: 'inherit' }} />,
  },
];

const Skills = () => {
  return (
    <SkillsContainer>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#fff', textAlign: 'center', mb: 6 }}>
        My Skills
      </Typography>
      <SkillsGrid>
        {skillSets.map((skillSet, index) => (
          <SkillCard key={index}>
            <SkillIcon>{skillSet.icon}</SkillIcon>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: '#fff' }}>
              {skillSet.title}
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              {skillSet.skills.map((skill, skillIndex) => (
                <Typography
                  key={skillIndex}
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 1,
                  }}
                >
                  {skill}
                </Typography>
              ))}
            </Box>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills; 