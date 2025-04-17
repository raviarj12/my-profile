import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  fontFamily: "'Dancing Script', cursive",
  fontSize: '2rem',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const NavLinks = styled(Box)({
  display: 'flex',
  gap: '1rem',
});

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <StyledToolbar>
        <StyledLink to="/">
          <EmojiEmotionsIcon sx={{ fontSize: '2rem', color: '#FFD700' }} />
          Raviraj.io
        </StyledLink>
        <NavLinks>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/projects">Project</Button>
          <Button color="inherit" component={Link} to="/skills">Skills</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </NavLinks>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar; 