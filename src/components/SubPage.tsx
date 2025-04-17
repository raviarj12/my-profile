import React from 'react';
import { Box, Typography, Container, Paper, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, rgba(15, 12, 41, 0.95) 0%, rgba(48, 43, 99, 0.95) 50%, rgba(36, 36, 62, 0.95) 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
    zIndex: 0,
  },
}));

const ContentPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #00ff9d, #00b8ff, #ff00ff)',
    borderRadius: '2px',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: '#fff',
  fontWeight: 700,
  marginBottom: theme.spacing(4),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: 0,
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #00ff9d, #00b8ff)',
    borderRadius: '2px',
  },
}));

const ContentText = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  lineHeight: 1.8,
  marginBottom: theme.spacing(3),
}));

const SubPage = () => {
  const theme = useTheme();

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ContentPaper elevation={0}>
            <Title>
              About Me
            </Title>
            <ContentText variant="body1">
              I am a passionate developer with expertise in modern web technologies.
              My journey in software development has been driven by a constant desire
              to learn and create innovative solutions.
            </ContentText>
            <ContentText variant="body1">
              With experience in React, TypeScript, and various other technologies,
              I strive to build applications that are not only functional but also
              provide an exceptional user experience.
            </ContentText>
          </ContentPaper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ContentPaper elevation={0}>
            <Title>
              Skills
            </Title>
            <ContentText variant="body1">
              • Frontend Development: React, TypeScript, Next.js
              <br />
              • Backend Development: Node.js, Express
              <br />
              • Database: MongoDB, PostgreSQL
              <br />
              • DevOps: Docker, AWS, CI/CD
            </ContentText>
          </ContentPaper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContentPaper elevation={0}>
            <Title>
              Experience
            </Title>
            <ContentText variant="body1">
              • Senior Developer at Tech Company (2020 - Present)
              <br />
              • Full Stack Developer at Startup (2018 - 2020)
              <br />
              • Junior Developer at Software Firm (2016 - 2018)
            </ContentText>
          </ContentPaper>
        </motion.div>
      </Container>
    </PageContainer>
  );
};

export default SubPage; 