import { useState, useEffect } from 'react';
import {Link, NavLink, useNavigate } from "react-router-dom";
import { validateEmail } from '../../auth/helpers';
import {Button, CircularProgress, TextField} from '@material-ui/core';
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



const Register = () => {
    const classes = useStyles();
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
  
    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <Card className={classes.card}>
            <Avatar className={classes.avatar}>
                  <LockOutlinedIcon  />
              </Avatar>
              <Typography component="h2" variant="h5"
                    className={classes.header}>
                    Register
                </Typography>
                <form className={classes.form}>
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
                        {loading &&  <CircularProgress color='inherit'
                                                       size={30} style={{padding: 5, }}
                                                       value={5} thickness={5} /> }
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