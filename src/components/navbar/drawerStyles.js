import Menu from '@mui/material/Menu';
import { withStyles, makeStyles } from '@mui/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



export const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getcontentanchorel={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  
  export const StyledTableCell = withStyles((theme) => ({
    head: {
      // backgroundColor: theme.palette.common.black,
      // color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  export const StyledTableRow = withStyles((theme) => ({
    root: {
      // '&:nth-of-type(odd)': {
      //   backgroundColor: theme.palette.action.hover,
      // },
    },
  }))(TableRow);
  
 export function createData(state, stateFee, convFee, cost, count=1, edit="") {
    return { state, stateFee, convFee, cost, count, edit };
  }
  

  export const useStyles = makeStyles( (theme) => ({
      root: {
        '& > *': {
            borderBottom: 'unset',
        },
        
      },

    table: {
      minWidth: 600,
    },
    menu: {
      "& .MuiPaper-root": {
        backgroundColor: "#e5e9eb",
      },
      "& .MuiList-padding": {
        padding: 0,
        
  
      },
      "& .MuiMenu-paper": {
        marginTop: "20px",
      }
    },
  
    footerCell: {
      "& .MuiTableCell-root": {
        color: 'brown',
        fontWeight: "bold"
      }
    },

    icondRemoveStyle: {
        color: 'tomato',
        margin: "0px 10px",
        transition: '0.3s ease',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#75abc5',
            borderRadius: '5px',
            color: 'red',
            padding: "5px",
            transform: "scale(1.2)"
        }
    },

    icondAddStyle: {
        color: 'green',
        transition: '0.3s ease',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: '#75abc5',
            borderRadius: '5px',
            color: 'blue',
            padding: "5px",
            transform: "scale(1.2)"
        }
    },

  }));

