import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

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

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  backgroundColor: theme.palette.mode === 'dark' ? '#242424' : '#ffffff',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const skillSets = [
  {
    title: 'Frontend Development',
    icon: <WebIcon sx={{ fontSize: '3rem' }} />,
    skills: ['React.js', 'Next.js', 'TypeScript', 'HTML5/CSS3', 'Material-UI', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: <StorageIcon sx={{ fontSize: '3rem' }} />,
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs', 'GraphQL'],
  },
  {
    title: 'Programming Languages',
    icon: <CodeIcon sx={{ fontSize: '3rem' }} />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    title: 'Tools & Technologies',
    icon: <BuildIcon sx={{ fontSize: '3rem' }} />,
    skills: ['Git', 'Docker', 'AWS', 'Firebase', 'MongoDB', 'PostgreSQL'],
  },
];

const Skills = () => {
  return (
    <Container sx={{ py: 8 }}>
      <PageTitle>
        My Skills
        <EmojiObjectsIcon sx={{ fontSize: '3rem', color: '#FFD700' }} />
      </PageTitle>
      
      <Grid container spacing={4}>
        {skillSets.map((skillSet, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <SkillCard elevation={3}>
              <SkillIcon>{skillSet.icon}</SkillIcon>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                {skillSet.title}
              </Typography>
              <Grid container spacing={1}>
                {skillSet.skills.map((skill, skillIndex) => (
                  <Grid item xs={6} key={skillIndex}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      {skill}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills; 