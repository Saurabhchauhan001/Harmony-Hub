import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Container, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Activity from './components/Activity';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Health & Wellbeing App
            </Typography>

            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose} component={Link} to="/">
                Dashboard
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/activity">
                Activity
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activity" element={<Activity />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
