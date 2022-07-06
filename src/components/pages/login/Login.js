import { useState, useEffect } from 'react';
import {Link, useNavigate, Navigate } from "react-router-dom";
import { loginUser } from '../../api/actions';
import { validateEmail } from '../../auth/helpers';
import {Button, CircularProgress, TextField} from '@material-ui/core';
import { isAuth } from '../../auth/helpers';
import {
    Avatar,
    Card,
    Container,
    Grid,
    Typography,

} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles, {theme} from './authStyles';
import {ThemeProvider} from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../auth/auth';





const Login = () => {
    const [user, setUser] = useState(null)
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

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
        
        // loginUser({email, password}, () => {
        //     setUser(isAuth())
        //     if(isAuth()){
        //         navigate('/profile')
        //     }          
        // });  
        auth.login(email, password)
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
                    Submit
                  </Button>

                  <Grid container className={classes.linkContainer}>
                    <Grid item xs className={classes.link} >
                          <Link to="#" onClick={() => alert('Please contact admin')}  >
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