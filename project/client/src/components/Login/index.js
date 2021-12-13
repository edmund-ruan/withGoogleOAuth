import React, {useState, useEffect} from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router';
import { login } from '../../api';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./index.css"   



const theme = createTheme();

const Login = (
    {
        handleShowMessage,
        handleClearMessage,
        checkAuthStatus
}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");;
    const [password, setPassword] = useState("");


    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async () => {
        try {
            if (email !== "" && password !== "") {
                const data = await login(email, password);
                handleShowMessage("Succesfully logged in", "success");
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
            handleShowMessage(error.message, "error");
        }
    }

    const checkAuth = async () => {
        try {
            const auth = await checkAuthStatus();
            if (auth) {
                navigate("/dashboard")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])


    return (
        <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email} 
                  onChange={onChangeEmail}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={onChangePassword} 
                  value={password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
}

export default Login;