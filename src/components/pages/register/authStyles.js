import { createTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import { green } from '@mui/material/colors';

export const theme = createTheme({
    root: {
        '& label': {
            color: "orange",
            fontWeight: 700
        },
    },
    palette: {
        primary: green,
    },
    typography: {
        fontFamily: "Georgia, serif",
    },
});


export default makeStyles( theme => ({
    container: {

        marginTop: '10%'
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '5px',
        height: '100%',
        backgroundColor: "#fff",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)!important"
    },

    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    header: {
        textAlign: "center",
        color: "#5982b5",
        fontWeight: "bold!important",
        fontFamily: "'Tahoma', Helvetica, sans-serif!important",
    },

    avatar: {
        backgroundColor: "#cc2525!important",
        margin: "10px auto",

    },

    inputs: {
        width: '100%',
        '& label': {
            color: "grey",
            fontWeight: 600,
            fontSize: 14,
            fontFamily: "Tahoma"
        },
    },

    submit: {
        width: "270px!important",
        marginTop: 5
    },

    linkContainer: {
        width: "270px"
    },

    link: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: "12px"
    },

    // [theme.breakpoints.down('sm')]:{
    //     mainContainer: {
    //         flexDirection: "column-reverse"
    //     }
    // }
}))