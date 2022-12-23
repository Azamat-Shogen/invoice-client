import { useState } from 'react';
import {Link, useNavigate } from "react-router-dom";
import { validateEmail } from '../../auth/helpers';
import { registerUser } from '../../api/actions';
import {Button, TextField} from '@mui/material';
import Loader from '../../loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Avatar,
    Card,
    Container,
    Grid,
    Typography,

} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ThemeProvider } from '@mui/material/styles';
import useStyles, { theme } from './authStyles';




const Register = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        buttonText: "Register"
    });


    const inputProps = {
        style: {
            width: 270,
        },
    }

 
    const {name, email, password, buttonText} = values;

    const handleChange = (name) => (event) => {
      setValues({...values, [name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)

        //TODO: if no error: call success function
        function onSuccses(){
            setTimeout(() => {
                setLoading(false);
                navigate('/login')
            }, 2000)        
        }

        //TODO: if no error: call error function
        function onError(){
            setLoading(false)
        }

        registerUser({ name, email, password }, onSuccses, onError)
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
            {/* <ToastContainer
                autoClose={4000}
                draggable
            /> */}
            <Avatar className={classes.avatar}>
                  <LockOutlinedIcon  />
              </Avatar>
              <Typography component="h2" variant="h5"
                    className={classes.header}>
                    Register
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <ThemeProvider theme={theme}>
                    <TextField
                        className={classes.input}
                        variant="standard"
                        margin="normal"
                        id="name"
                        required
                        label="name"
                        type="text"
                        inputProps={inputProps}
                        autoComplete="name"
                        autoFocus
                        onChange={handleChange('name')}
                        value={name}
     
                     />
                      <TextField
                        className={classes.input}
                        variant="standard"
                        margin="normal"
                        id="email"
                        required
                        label="email"
                        type="email"
                        inputProps={inputProps}
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange('email')}
                        value={email}
                        error={!validateEmail(email)}
                        helperText={validateEmail(email) ? "" : "not a valid email"}
                     />

                    <TextField
                        className={classes.input}
                        variant="standard"
                        margin="normal"
                        id="password"
                        required
                        label="Password"
                        type="password"
                        inputProps={inputProps}
                        autoComplete="current-password"
                        autoFocus
                        onChange={handleChange('password')}
                        value={password}
     
                     />
                    </ThemeProvider>
                    <Button
                        className={classes.submit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                         >
                        {buttonText}
                        {loading &&  <Loader /> }
                    </Button>
                    <Grid className={classes.link} >
                              <Link to="/login"  >
                                  Already have an account? Login
                              </Link>
                    </Grid>
                </form>
            </Card>
        </Container>
    )
};

export default Register;