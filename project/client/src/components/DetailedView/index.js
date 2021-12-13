import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import TableComponent from '../TableComponent/index.js'

const DetailedView = ({
  restaurants,
  handleBack
}) => {
    
  return (
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid>
                    <h3>Restaurants near this address</h3>
                    <Button onClick={handleBack}>Back</Button>
              </Grid>
              {/* Restaurants */}
              <Grid item xs={12}>
                  <TableComponent 
                        data={restaurants}
                  />
              </Grid>
            </Grid>
          </Container>
  );
}

export default DetailedView;