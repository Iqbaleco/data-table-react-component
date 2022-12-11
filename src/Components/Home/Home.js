import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import allData from '../Data/data.json';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'ipAddress', headerName: 'IP Address', width: 130 },
    { field: 'airportCode', headerName: 'Airport Code', width: 130 },
    { field: 'time', headerName: 'Time', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'mobile', headerName: 'Mobile', width: 130 },
    { field: 'area', headerName: 'Area', width: 130 },
    { field: 'show', headerName: 'Show', width: 130 },
    { field: 'edit', headerName: 'Edit', width: 130 },
];

const Home = () => {

    return (
        <div style={{ height: 900, width: '100%' }}>
            <DataGrid
                getRowClassName={(params) => {
                    return params.row.show === true ? { color: '#f0f0f0' } : { color: '#303030' };
                }}
                rows={allData}
                columns={columns}
                pageSize={100}
                rowsPerPageOptions={[100]}
                checkboxSelection
            />
        </div>
    );
};


export default Home;