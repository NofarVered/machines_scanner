import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import Accounts from './accounts/Accounts';
import RemovedAccounts from './removedAccounts/RemovedAccounts';

export default function AccountsWrapper() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Container maxWidth="xlg" sx={{ mt: 4, mb: 4 }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange}>
                        <Tab label="Current Accounts" value="1" />
                        <Tab label="Removed Accounts" value="2" />
                    </TabList>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <TabPanel value="1">
                                 <Accounts />
                            </TabPanel>
                            <TabPanel value="2">
                                <RemovedAccounts />
                            </TabPanel>     
                        </Paper>
                    </Grid>     
                </Grid>
            </TabContext>
        </Container>
    )
}

//ddd