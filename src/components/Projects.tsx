import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  minHeight: '100vh',
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(4),
  width: '100%',
}));

const ProjectCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ProjectImage = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '10px',
  marginBottom: '1rem',
});

const ProjectTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: '#fff',
  fontWeight: 600,
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: theme.spacing(2),
  flex: 1,
}));

const TechStack = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
}));

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    image: '/project1.jpg',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Social Media App',
    description: 'A social networking application with real-time chat, post sharing, and user interactions.',
    image: '/project2.jpg',
    techStack: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
  },
  {
    title: 'Task Management System',
    description: 'A collaborative task management tool with drag-and-drop interface and team features.',
    image: '/project3.jpg',
    techStack: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with interactive maps and detailed analytics.',
    image: '/project4.jpg',
    techStack: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
  },
];

const Projects = () => {
  return (
    <ProjectsContainer>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#fff', textAlign: 'center', mb: 6 }}>
        My Projects
      </Typography>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage
              src={project.image}
              alt={project.title}
            />
            <ProjectTitle variant="h5">
              {project.title}
            </ProjectTitle>
            <ProjectDescription>
              {project.description}
            </ProjectDescription>
            <TechStack variant="subtitle2">
              {project.techStack.join(' • ')}
            </TechStack>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects; 