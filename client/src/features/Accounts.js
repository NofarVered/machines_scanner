import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


const accounts = [
    {
        'userName': 'matan',
        'groupName': 'admins',
        'privileged': 'yes',
        'password': '1234',
        'lastPasswordChange': '30-11-2022',
        'remoteMachine': 'Linux'
    }
]


function preventDefault(event) {
    event.preventDefault();
}


export default function Accounts() {
    return (
      <React.Fragment>
        <Title>Detected Accounts</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Group Name</TableCell>
              <TableCell>Privileged</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Last Password Change</TableCell>
              <TableCell align="right">Remote Machine</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.userName}>
                <TableCell>{account.userName}</TableCell>
                <TableCell>{account.groupName}</TableCell>
                <TableCell>{account.privileged}</TableCell>
                <TableCell>{account.password}</TableCell>
                <TableCell>{account.lastPasswordChange}</TableCell>
                <TableCell align="right">{`${account.remoteMachine}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
          See more accounts
        </Link>
      </React.Fragment>
    );
  }