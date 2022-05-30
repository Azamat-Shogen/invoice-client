import { useState, useRef } from "react";
import Button from '@material-ui/core/Button';
import { NavLink, useNavigate, Link } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';






const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
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


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(state, stateFee, convFee, cost, count=1, edit="") {
  return { state, stateFee, convFee, cost, count, edit };
}

const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "lightblue",
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
      color: 'blue',
      fontWeight: 500
    }
  },
});


const CartDrawer = ({anchorEl, open, onclose , items}) => {

    console.log(items)
    const classes = useStyles();
    const navigate = useNavigate();

    const toInvoicePage = () => {
      navigate('/invoice')
    }

    return (

      <StyledMenu style={{padding: 0}}
        className={classes.menu}
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={onclose}>
        <TableContainer component={Paper} >
          <Table className={classes.table} size="small" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>State</StyledTableCell>
                <StyledTableCell align="right">State fee</StyledTableCell>
                <StyledTableCell align="right">Conv. fee</StyledTableCell>
                <StyledTableCell align="right">Cost</StyledTableCell>
                <StyledTableCell align="right">Count</StyledTableCell>
                <StyledTableCell align="right">...</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(item => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                     {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">${item.cost}</StyledTableCell>
                  <StyledTableCell align="center">${item.convenienceFee}</StyledTableCell>
                  <StyledTableCell align="center">${item.cost + item.convenienceFee}</StyledTableCell>
                  <StyledTableCell align="center">{item.count}</StyledTableCell>
                  <StyledTableCell align="center">{'+ -'}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter className={classes.footerCell}>
               <StyledTableRow >
               <StyledTableCell align="left">Service Fee: $25</StyledTableCell>
               <StyledTableCell align="center">{''}</StyledTableCell>
               <StyledTableCell color="secondary" align="center">Total (cost x service fee):</StyledTableCell>
               <StyledTableCell align="center">{'$45.00'}</StyledTableCell>
               <StyledTableCell align="right">
                  <Button variant="contained" 
                          style={{color: 'white'}}  
                          size="small" 
                          color="primary"
                          href="/invoice"
                          >
                          Invoice</Button>
               </StyledTableCell>

               <StyledTableCell align="center">{''}</StyledTableCell>
               </StyledTableRow>
            </TableFooter>
          </Table>
        </TableContainer>

      </StyledMenu>

    )
}

export default CartDrawer;