import React from 'react';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
}));

const ContactGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: theme.spacing(4),
  width: '100%',
}));

const ContactCard = styled(Paper)(({ theme }) => ({
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

const ContactIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: '#2196F3',
  marginBottom: theme.spacing(2),
  '& > svg': {
    fontSize: 'inherit',
  },
}));

const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
  padding: theme.spacing(4),
  background: 'rgba(0, 0, 0, 0.3)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
}));

const contactInfo = [
  {
    title: 'Email',
    content: 'your.email@example.com',
    icon: <EmailIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'Phone',
    content: '+1 (123) 456-7890',
    icon: <PhoneIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'Location',
    content: 'New York, USA',
    icon: <LocationOnIcon sx={{ fontSize: 'inherit' }} />,
  },
  {
    title: 'Social',
    content: 'LinkedIn | GitHub',
    icon: <LinkedInIcon sx={{ fontSize: 'inherit' }} />,
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <ContactContainer>
      <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#fff', textAlign: 'center', mb: 6 }}>
        Contact Me
      </Typography>
      
      <ContactGrid>
        {contactInfo.map((info, index) => (
          <ContactCard key={index}>
            <ContactIcon>{info.icon}</ContactIcon>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2, color: '#fff' }}>
              {info.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textAlign: 'center',
              }}
            >
              {info.content}
            </Typography>
          </ContactCard>
        ))}
      </ContactGrid>

      <Box sx={{ mt: 6, maxWidth: '500px', mx: 'auto' }}>
        <ContactForm onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#fff',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              mt: 2,
              py: 1.5,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976D2 30%, #1E88E5 90%)',
              },
            }}
          >
            Send Message
          </Button>
        </ContactForm>
      </Box>
    </ContactContainer>
  );
};

export default Contact; 