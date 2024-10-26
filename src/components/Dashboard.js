// src/components/Dashboard.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie ,Cell,Legend, BarChart, Bar} from 'recharts';

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
//sample for slepp cycle
const sleepData = [
  { day: 'Mon', sleep: 7 },
  { day: 'Tue', sleep: 6 },
  { day: 'Wed', sleep: 8 },
  { day: 'Thu', sleep: 9 },
  { day: 'Fri', sleep: 5 },
  { day: 'Sat', sleep: 7},
  { day: 'Sun', sleep: 9 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28',"red","green","yellow","gray"];

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
      <Box sx={{margin:"0"}}>
        <Typography variant='h5'>Sleep Cycle Over Week using pie chart</Typography>
        <ResponsiveContainer width="100%" height={250} >
        <PieChart width={200} height={100} >
  <Pie
    data={sleepData}
    cx={300}
    cy={100}
    outerRadius={80}
    fill="#8884d8"
    dataKey="sleep"
    nameKey="day"
    label={({ day, sleep }) => `${day} (${sleep})`}
  >
    {sleepData.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index]} />
    ))}
  </Pie>
  <Tooltip />
  <Legend />
</PieChart>
      </ResponsiveContainer>

        {/* adding bar chart alternative */}
        <Typography variant='h5' sx={{margin:"20px"}}> Sleep Bar Chart</Typography>
      <ResponsiveContainer width="100%" height={250} >
          <BarChart 
          width={200}
          height={300}
          data={data}
          
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day"/>
          <YAxis/>
          <Tooltip />
           <Legend />
            <Bar data={sleepData} dataKey="sleep" fill="#8884d8"

            />

          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export default Dashboard;
