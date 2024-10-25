// src/components/Dashboard.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for graph
const data = [
  { day: 'Mon', steps: 3000 },
  { day: 'Tue', steps: 5000 },
  { day: 'Wed', steps: 7000 },
  { day: 'Thu', steps: 2000 },
  { day: 'Fri', steps: 6000 },
  { day: 'Sat', steps: 4000 },
  { day: 'Sun', steps: 8000 },
];

function Dashboard() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Your Health Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Steps Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Steps</Typography>
              <DirectionsRunIcon fontSize="large" color="primary" />
              <Typography variant="h4">5,000</Typography>
              <Typography color="textSecondary">Today</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Water Intake Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Water Intake</Typography>
              <LocalDrinkIcon fontSize="large" color="primary" />
              <Typography variant="h4">1.5 L</Typography>
              <Typography color="textSecondary">Out of 2 L goal</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Sleep Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Sleep</Typography>
              <BedtimeIcon fontSize="large" color="primary" />
              <Typography variant="h4">7 hrs</Typography>
              <Typography color="textSecondary">Last night</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Trend Graph */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Steps Over the Week
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="steps" stroke="#4caf50" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default Dashboard;
