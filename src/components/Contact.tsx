import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import ContactMailIcon from '@mui/icons-material/ContactMail';

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

const ContactForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  maxWidth: 600,
  margin: '0 auto',
  backgroundColor: theme.palette.mode === 'dark' ? '#242424' : '#ffffff',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#404040' : '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#8bc34a',
  color: '#fff',
  padding: theme.spacing(1.5, 4),
  '&:hover': {
    backgroundColor: '#7cb342',
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container sx={{ py: 8 }}>
      <PageTitle>
        Contact
        <ContactMailIcon sx={{ fontSize: '3rem', color: '#FFD700' }} />
      </PageTitle>

      <ContactForm elevation={3}>
        <Box component="form" onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            variant="outlined"
            required
          />
          
          <StyledTextField
            fullWidth
            label="E-mail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your E-mail"
            variant="outlined"
            required
          />
          
          <StyledTextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            variant="outlined"
            multiline
            rows={6}
            required
          />
          
          <SubmitButton
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            fullWidth
          >
            Submit
          </SubmitButton>
        </Box>
      </ContactForm>
    </Container>
  );
};

export default Contact; 