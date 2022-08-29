import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { style } from '@mui/system';
import { ClassNames } from '@emotion/react';

function createData(
    name: string,
    version: string,

) {
    return { name, version };
}

const rows = [
    createData('react', "18.2.0"),
    createData('redux', '4.2.0'),
    createData('react-redux', '8.0.2'),
    createData('react-router-dom', '6'),
    createData('redux-logger', '3.0.6'),
    createData('redux-promise', '0.6.0'),
    createData('redux-thunk', '2.4.1'),
    createData('@mui/material', '5.10.3'),


];
const Show = () => {
    let navgiate = useNavigate();
    return <>
        <h1>This is Dependencies Page</h1>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>VERSION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.version}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </TableContainer>
        <Button variant="contained" onClick={() => navgiate('/')} style={{ marginTop: '5%' }}>Go back to Home</Button>

    </>

};

export default Show;