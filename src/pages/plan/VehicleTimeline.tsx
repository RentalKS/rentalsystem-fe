import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Paper, Typography, Container } from '@mui/material';

export interface TimelineData {
  date: string;
  category: 'Booking' | 'Reserved' | 'Rental';
}


interface TimelineProps {
  data: TimelineData[];
}

const VehicleTimeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Vehicle Timeline
        </Typography>
        <Timeline>
          {data.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
              <TimelineDot color={getColorByCategory(item.category)} />
                {index !== data.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="subtitle2">{item.date}</Typography>
                  <Typography variant="body2">Category: {item.category}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>
    </Container>
  );
};

export default VehicleTimeline;
function getColorByCategory(category: 'Booking' | 'Reserved' | 'Rental'): 'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' {
    switch (category) {
      case 'Booking':
        return 'primary';
      case 'Reserved':
        return 'secondary';
      case 'Rental':
        return 'info';
      default:
        return 'grey';
    }
  }
