import { useState } from "react";
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import { useAuth } from "../auth/auth";
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import { useStyles, StyledMenu, StyledTableCell, StyledTableRow } from "./drawerStyles";




const CartDrawer = ({anchorEl, open, onclose , items}) => {
    const user = useAuth();
   
    const classes = useStyles();

    const itemCounts = items.length > 0 ? items.map( el => el.count).reduce((a, b) => parseInt(a) + parseInt(b)) : 0

    const handleAddIcon = (itemId) => {
        user.increaseStateCount(itemId)
    }

    const handleRemoveIcon = (itemId) => {
      user.deleteFromCart(itemId)
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
                <StyledTableCell align="center">Conv. fee</StyledTableCell>
                <StyledTableCell align="right">Cost</StyledTableCell>
                <StyledTableCell align="right">Count</StyledTableCell>
                <StyledTableCell align="right">
                  <MoreVertIcon />
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map(item => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                     {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">${item.stateFee}</StyledTableCell>
                  <StyledTableCell align="center">${item.convenienceFee}</StyledTableCell>
                  <StyledTableCell align="right">${item.cost}</StyledTableCell>
                  <StyledTableCell align="center">{item.count}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div>
                      <RemoveIcon className={classes.icondRemoveStyle}
                        onClick={() => handleRemoveIcon(item.id)}
                      />
                      <AddIcon color="action" 
                            className={classes.icondAddStyle} 
                              onClick={() => handleAddIcon(item.id)}
                            />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter className={classes.footerCell}>
               <StyledTableRow >
               <StyledTableCell align="left">Service Fee: ${user.serviceFee} x {itemCounts}</StyledTableCell>
               <StyledTableCell align="center">{''}</StyledTableCell>
               <StyledTableCell color="secondary" align="center">Total: {user.total}</StyledTableCell>
               <StyledTableCell align="center">Grand total: {user.grandTotal}</StyledTableCell>
               <StyledTableCell align="center">{''} </StyledTableCell>
               <StyledTableCell align="right">
                  <Button variant="contained" 
                          style={{color: 'white'}}  
                          size="small" 
                          color="primary"
                          href="/invoice"
                          >
                          Invoice</Button>
               </StyledTableCell>

               {/* <StyledTableCell align="center">{''} </StyledTableCell> */}
               </StyledTableRow>
            </TableFooter>
          </Table>
        </TableContainer>

      </StyledMenu>

    )
}

export default CartDrawer;