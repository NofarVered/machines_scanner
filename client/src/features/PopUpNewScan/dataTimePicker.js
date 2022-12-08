import * as React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


export default function MaterialUIPickers() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} sx={{mt:2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
                
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            input:{color:'white'},
            'label':{color:'white'}
          }}
         >      
        <DateTimePicker 
               
          label="from"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
         
      </Stack>
      <Stack spacing={3} sx={{mt:4,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
                
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            input:{color:'white'},
            'label':{color:'white'}
          }}>      
        <DateTimePicker
          label="from"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
         
      </Stack>


    </LocalizationProvider>
  );
}
