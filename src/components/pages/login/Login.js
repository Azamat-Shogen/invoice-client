import { useState } from 'react';
import { Link } from "react-router-dom";
import { validateEmail } from '../../auth/helpers';
import {Button, TextField} from '@mui/material';
import Loader from '../../loader/Loader';
import {
    Avatar,
    Card,
    Container,
    Grid,
    Typography,

} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { ThemeProvider } from '@mui/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../auth/auth';
import useStyles, {theme} from './authStyles';



const Login = () => {
    const [loading, setLoading] = useState(false)
    const auth = useAuth();
   
    const classes = useStyles();
    const [values, setValues] = useState({
        email: "",
        password: "",
        buttonText: "Login"
    });

    const inputProps = {
        style: {
            width: 270,
          },
    }

    const handleChange = (name) => (event) => {
        setValues({...values, [name]: event.target.value})
    }

   
    const { email, password, buttonText} = values;


    const clickSubmit = (event) => {
        event.preventDefault();
        function onFailure(){
            setLoading(false)
        }

        setLoading(true)
        auth.login(email, password, onFailure)
    }

   
  
    return (
            <Container component="main" maxWidth="xs" className={classes.container}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <Card className={classes.card}>
           
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h2" variant="h5" className={classes.header}>
                    Login
                </Typography>
                <form className={classes.form} onSubmit={clickSubmit}>

                <ThemeProvider theme={theme}>
                <TextField
                      className={classes.input}
                      variant="standard"
                      required
                      type="email"
                      margin="normal"
                      id="email"
                      label="Email"
                      inputProps={inputProps}
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={email}
                      onChange={handleChange('email')}
                      error={!validateEmail(email)}
                      helperText={validateEmail(email) ? "" : "not a valid email"}
                    //   onError={alert('do something')}
                     />

                    <TextField
                      className={classes.input}
                      variant="standard"
                      type="password"
                      margin="normal"
                      color="primary"
                      name="password"
                      required
                      label="Password"
                      id="password"
                      inputProps={inputProps}
                      autoComplete="current-password"
                      value={password}
                      onChange={handleChange('password')}
                    //   error={text === "" || text === 'shit'}
                    //   onError={alert('do something')}
                    //   helperText={text === "" ? "Empty!" : " "}
                     />
                </ThemeProvider>
                  <Button
                    className={classes.submit}
                    type="submit"
                    fullWidth={true}
                    variant="contained"
                    color="primary"
                    >
                    {buttonText}
                   { loading && <Loader /> }
                  </Button>

                  <Grid container className={classes.linkContainer}>
                    <Grid item xs className={classes.link} >
                          <Link to="#" onClick={() => alert('contact admin: baki47hanma@gmail.com')}  >
                              Forgot Password?
                          </Link>
                      </Grid>
                      <Grid item xs className={classes.link} >
                            <Link to="/register"  >
                                Don't have an account ? Register
                            </Link>
                        </Grid>
                  </Grid>
 
                </form>
                </Card>
        </Container>
       
    )
};

export default Login;