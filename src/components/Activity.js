// src/components/Activity.js
import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

function Activity() {
  const activities = [
    { id: 1, description: 'Walked 5000 steps', date: 'Today' },
    { id: 2, description: 'Burned 200 calories', date: 'Yesterday' },
    { id: 3, description: 'Slept 7 hours', date: '2 days ago' },
  ];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity) => (
          <div key={activity.id}>
            <ListItem>
              <ListItemText
                primary={activity.description}
                secondary={activity.date}
              />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

export default Activity;
