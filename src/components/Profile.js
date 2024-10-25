// src/components/Profile.js
import React from 'react';
import { Typography, Card, CardContent, Button } from '@mui/material';

function Profile() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          User Profile
        </Typography>
        <Typography>Name: Full Name</Typography>
        <Typography>Email: Example@example.com</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
}

export default Profile;
