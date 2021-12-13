import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';


const TableComponent = (
    {
        data,
}) => {

    const columns = [
        { field: 'name', headerName: 'Restaurant Name', width: 300 },
        { field: 'phone', headerName: 'Phone', width: 300 },
        {
          field: 'price',
          headerName: 'Price',
          width: 300,
        },
        {
            field: 'rating',
            headerName: 'Rating',
            width: 300,
          },
    ]

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      );
}

export default TableComponent;