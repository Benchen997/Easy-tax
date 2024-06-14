import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';

export default function InfoTable() {
    return (
        <TableContainer component={Card} className='info-table'>
          <Table aria-label="simple table" size={"medium"}>
            <TableHead>
              <TableRow>
                  <TableCell><strong>Taxable Income Level</strong></TableCell>
                <TableCell align="left"><strong>Description</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Class 1</TableCell>
                    <TableCell>Your taxable income is under minimum level</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Class 2</TableCell>
                    <TableCell>Your taxable income is between minimum and average</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Class 3</TableCell>
                    <TableCell>Your income is above average but lower than maximum </TableCell>
                </TableRow>
            </TableBody>
          </Table>
    </TableContainer>
    );
}