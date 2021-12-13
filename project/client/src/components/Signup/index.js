import React, {useState, useEffect} from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registration } from '../../api';
import { useNavigate } from 'react-router';
import { login } from '../../api';
import Avatar from '@mui/material/Avatar';
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


const Signup = (
    {
        handleShowMessage,
        handleClearMessage,
        checkAuthStatus
}) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");;
    const [email, setEmail] = useState("");;
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSignup = async () => {
        try {
            if (name !== "" && email !== "" && password !== "" && confirmPassword !== "") {
                const data = await registration(name, email, password);
                handleShowMessage("Successfully signed up", "success");
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
                Register
              </Typography>
              <Box noValidate sx={{ mt: 1 }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name} 
                  onChange={onChangeName}
                />
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={onChangeConfirmPassword} 
                  value={confirmPassword}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSignup}
                >
                  Register
                </Button>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Already have an account? Log in"}
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

export default Signup