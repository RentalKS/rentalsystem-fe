import { Container, Typography, Box, Tabs, Tab } from '@mui/material';
import React from 'react';
import SettingsRent from '../Rentals/SettingsRent';
import DailyPlanTable from '../plan/DailyPlanTable';
import Reservation from '../Rentals/Reservation';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import VehicleTimeline from '../plan/VehicleTimeline';
import { TimelineData } from '../plan/VehicleTimeline';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
const dailyPlanData = [
    { time: '10:00 AM', location: 'City Center', vehicle: 'Toyota Corolla', amount: '$50', actions: 'Edit / Delete' },
    { time: '02:30 PM', location: 'Airport', vehicle: 'Honda Civic', amount: '$45', actions: 'Edit / Delete' },

];
const vehicleTimelineData: TimelineData[] = [
    { date: '2023-08-15', category: 'Booking' },
    { date: '2023-08-16', category: 'Reserved' },
    { date: '2023-08-17', category: 'Rental' },

];


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DashboardRent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl" sx={{ marginTop: 2 }}>
            <Box sx={{ bgcolor: 'background.paper', borderRadius: '4px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '16px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
                    <Tab label="Settings" {...a11yProps(0)} />
                    <Tab icon={<BookmarkAddedOutlinedIcon />} label="Create Reservation" {...a11yProps(1)} />
                    <Tab icon={<DirectionsCarFilledOutlinedIcon />} label="Vehicle" {...a11yProps(2)} />
                    <Tab label="Plan" {...a11yProps(3)} />
                    <Tab label="Timeline" {...a11yProps(4)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={1}>
                <Reservation />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Typography>This is the Vehicle page.</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <DailyPlanTable data={dailyPlanData} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <VehicleTimeline data={vehicleTimelineData} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={0}>
                <SettingsRent />
            </CustomTabPanel>

        </Container>
    )
}
