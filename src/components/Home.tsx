import React from 'react';
import { Box, Container, Typography, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: theme.spacing(3),
}));

const ProfileImage = styled('img')(({ theme }) => ({
  width: '300px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '50%',
  marginBottom: theme.spacing(4),
  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s ease-in-out',
  border: `4px solid ${theme.palette.primary.main}`,
  [theme.breakpoints.down('sm')]: {
    width: '250px',
    height: '250px',
  },
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const TagLine = styled(Typography)(({ theme }) => ({
  fontFamily: "'Dancing Script', cursive",
  fontSize: '2.5rem',
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
}));

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

const Home = () => {
  return (
    <Container>
      <HeroSection>
        <ProfileImage 
          src="/raviraj06.jpg"
          alt="Raviraj" 
        />
        <TagLine>
          Coding the Future Together
          <EmojiEmotionsIcon sx={{ fontSize: '2.5rem', color: '#FFD700' }} />
        </TagLine>
        <Typography variant="h6" color="textSecondary" sx={{ maxWidth: 600, mb: 4 }}>
          Full Stack Developer | React Specialist | UI/UX Enthusiast
        </Typography>
        <SocialLinks>
          <StyledLink 
            href="https://github.com/raviarj12" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHubIcon />}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 5,
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
                transition: 'transform 0.3s ease',
              }}
            >
              GitHub
            </Button>
          </StyledLink>
          <StyledLink 
            href="https://linkedin.com/in/Raviraj Jadav" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              sx={{
                px: 3,
                py: 1,
                borderRadius: 5,
                textTransform: 'none',
                fontSize: '1.1rem',
                '&:hover': {
                  transform: 'translateY(-2px)',
                },
                transition: 'transform 0.3s ease',
              }}
            >
              LinkedIn
            </Button>
          </StyledLink>
        </SocialLinks>
      </HeroSection>
    </Container>
  );
};

export default Home; 