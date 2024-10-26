import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Avatar, Grid, Snackbar, Alert } from '@mui/material';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'User name',
    email: 'user.email@example.com',
    bio: 'Passionate about health and wellbeing!',
    avatar: 'https://i.pravatar.cc/150?img=3',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle avatar upload
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUpdatedUser((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(updatedUser);
    setIsEditing(false);
    setSnackbarOpen(true); // Show snackbar notification
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: 'center' }}>
      <Avatar
        src={user.avatar}
        alt={user.name}
        sx={{ width: 100, height: 100, margin: '0 auto' }}
      />
      <Typography variant="h4" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {user.email}
      </Typography>
      <Typography variant="body2" paragraph>
        {user.bio}
      </Typography>

      {isEditing ? (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              value={updatedUser.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              value={updatedUser.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="bio"
              label="Bio"
              value={updatedUser.bio}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Avatar
              <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Button variant="contained" onClick={() => setIsEditing(true)}>
          Edit Profile
        </Button>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Profile updated successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Profile;
