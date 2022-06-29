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





const Login = () => {
    
    const [text, setText] = useState("");
    const navigate = useNavigate();

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


    const clickSubmit = (event) => {
        event.preventDefault();
        // setValues({...values});
        // api login
        navigate('/register')
        
    }

    const { email, password, buttonText} = values;
    
  
    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
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
                      label="Password *"
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