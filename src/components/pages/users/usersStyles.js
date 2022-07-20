import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
            padding: 13,
           backgroundColor: "#e3ebec",

        },

        
    },

    orderNumber: {
         //color: '#007bff',
         color: '#079641',
        fontWeight: 'bold',
      // color: '#de0752'
    },

    rootSeen: {
        '& > *': {
            borderBottom: 'unset',
            padding: 13,
            // "& .MuiCircularProgress-circle": {
            //     color: 'blue'
            //    }
        },
    },

    container: {
        maxHeight: 700,
        maxWidth: 900,
        margin: 'auto',
        marginTop: 20
    },

    linkButton: {
        backgroundColor: "#1976d2",
    },

    row: {
        backgroundColor: "#effafb"
    },

    row2: {
        backgroundColor: "#f7f8f8"
    },

    cell: {
        padding: 5,
        position: 'relative'
    },

    circle: {
        color: 'orange',
    },

    checkbox: {
        marginTop: -2,
        marginBottom: -4,
        marginLeft: 10,
        color: '#007bff'
    },

    checkboxLabel: {
        color: "#007bff",
    }

}));

export default useStyles;