import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';

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

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  backgroundColor: theme.palette.mode === 'dark' ? '#242424' : '#ffffff',
}));

const ProjectImage = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

const projects = [
  {
    title: 'YelpCamp',
    description: 'A comprehensive Express app that allows users to post, review, and discover campgrounds, featuring robust CRUD operations and interactive Mapbox integration.',
    image: '/project-images/yelpcamp.jpg',
    demoLink: 'https://yelpcamp-demo.com',
    githubLink: 'https://github.com/yourusername/yelpcamp',
  },
  {
    title: 'Netflix Clone',
    description: 'A Netflix-inspired streaming platform built with React and Firebase, featuring user authentication and real-time database.',
    image: '/project-images/netflix.jpg',
    demoLink: 'https://netflix-clone-demo.com',
    githubLink: 'https://github.com/yourusername/netflix-clone',
  },
  {
    title: 'Coffee Shop Finder',
    description: 'An interactive map-based application to discover and review local coffee shops, built with Next.js and MongoDB.',
    image: '/project-images/coffee-finder.jpg',
    demoLink: 'https://coffee-finder-demo.com',
    githubLink: 'https://github.com/yourusername/coffee-finder',
  },
  {
    title: 'Tindog',
    description: 'A fun and interactive platform for dog lovers to connect and arrange playdates for their pets.',
    image: '/project-images/tindog.jpg',
    demoLink: 'https://tindog-demo.com',
    githubLink: 'https://github.com/yourusername/tindog',
  },
  {
    title: 'Meal Delivery App',
    description: 'A full-stack food delivery application with real-time order tracking and payment integration.',
    image: '/project-images/meal-delivery.jpg',
    demoLink: 'https://meal-delivery-demo.com',
    githubLink: 'https://github.com/yourusername/meal-delivery',
  },
  {
    title: 'Todo List',
    description: 'A JavaScript-based todo list application with local storage and drag-and-drop functionality.',
    image: '/project-images/todo-list.jpg',
    demoLink: 'https://todo-list-demo.com',
    githubLink: 'https://github.com/yourusername/todo-list',
  },
];

const Projects = () => {
  return (
    <Container sx={{ py: 8 }}>
      <PageTitle>
        Projects
        <GitHubIcon sx={{ fontSize: '3rem', color: '#FFD700' }} />
      </PageTitle>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <ProjectCard elevation={3}>
              <ProjectImage
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto', p: 2 }}>
                <Button 
                  size="small" 
                  color="primary" 
                  startIcon={<GitHubIcon />}
                  href={project.githubLink}
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button 
                  size="small" 
                  color="primary" 
                  startIcon={<LaunchIcon />}
                  href={project.demoLink}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 