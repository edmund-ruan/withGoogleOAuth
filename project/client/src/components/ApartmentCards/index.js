import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DetailedView from '../DetailedView/index';


const ApartmentCards = ({
    data,
    handleApartmentClick
}) => {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
            {data.map((apartment) => (
            <Grid item key={apartment['id']} xs={12} sm={6} md={4}>
                <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {apartment['addressLine1']}
                    </Typography>
                    <Typography>
                        County: {apartment['county']}
                    </Typography>
                    <Typography>
                        City: {apartment['city']}
                    </Typography>
                    <Typography>
                        State: {apartment['state']}
                    </Typography>
                    <Typography>
                    Price <span><strong>${apartment['price']}</strong></span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleApartmentClick(apartment)}>View More</Button>
                </CardActions>
                </Card>
            </Grid>
            ))}
        </Grid>
    </Container>
    )
}



export default ApartmentCards;