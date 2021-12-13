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
import { useNavigate } from 'react-router';
import ApartmentCards from '../ApartmentCards/index.js';
import DetailedView from '../DetailedView/index.js';
import { findApartments, fakeData, findRestaurants } from '../../api.js';

const theme = createTheme();

const Dashboard = (
    {
        handleShowMessage,
        handleClearMessage,
        checkAuthStatus
}) => {

    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [showDetailView, setShowDetailView] = useState(false);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [data, setData] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [address, setAddress] = useState("")
    const [bedrooms, setBedrooms] = useState("")
    const [daysOnMarket, setDaysOnMarket] = useState("")
    const [price, setPrice] = useState("")


    const searchForApartments = async () => {
        try {
            if (city !== "" && state !=="") {
                const apartments = await findApartments(city, state);
                setData(apartments);
                showDetailView(true);
            }
            else {
                handleShowMessage("Please fill out both city and state", "error")
            }
        } catch (error) {
            console.log(error);
            handleShowMessage(error.message ? error.message : "Unable to find apartments", "error")
        }
    }


    const handleApartmentClick = async (apartment) => {
        try {
            const formattedAddress = apartment['formattedAddress'];
            const restaurants = await findRestaurants(formattedAddress);
            setAddress(apartment['address']);
            setBedrooms(apartment['bedrooms']);
            setDaysOnMarket(apartment['daysOnMarket']);
            setPrice(apartment['price'])
            setRestaurants(restaurants);
            setShowDetailView(true);
        } catch (error) {
            console.log(error);   
        }
    }

    const handleBack = () => {
        setShowDetailView(false);
    }

    const checkAuth = async () => {
        try {
            const auth = await checkAuthStatus();
            if (!auth) {
                handleShowMessage("Please login again as your session has expired", 'error')
                navigate("/login")
            }
            setValidated(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])

    return (
        <div>
            {validated 
            && <h1>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <main>
                        {/* Hero unit */}
                        <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                        >
                        <Container maxWidth="sm">
                            <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                            >
                            Find your dream apartment
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                Search here for apartments in your city and state of choice
                            </Typography>
                            <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                            >
                            <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={e => setCity(e.target.value)}/>
                            <TextField id="outlined-basic" label="State" variant="outlined" value={state} onChange={e => setState(e.target.value)}/>
                            <Button variant="contained" onClick={searchForApartments}>Search</Button>
                            </Stack>
                        </Container>
                        </Box>
                        {showDetailView ? 
                        <DetailedView 
                            handleBack={handleBack}
                            restaurants={restaurants}
                            attributes={['name', 'price', 'rating', 'review_count']}
                        />
                        : 
                        <ApartmentCards 
                            data={data}
                            handleApartmentClick={handleApartmentClick}
                        />
                    }
                    </main>
                    </ThemeProvider>
                </h1>}
        </div>
    )
}

export default Dashboard