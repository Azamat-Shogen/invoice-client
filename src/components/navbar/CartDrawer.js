import { useState, useRef } from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';



const CartDrawer = ({anchorEl, open, onclose }) => {



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


      const StyledMenuItem = withStyles((theme) => ({
        root: {
          '&:focus': {
            // backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
              color: theme.palette.common.white,
            },
          },
        },
      }))(MenuItem);

    return (

       <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={onclose}
       >
          <StyledMenuItem>
              I know what you did
          </StyledMenuItem>
          <StyledMenuItem>
              I know what you did
          </StyledMenuItem>
       </StyledMenu>
    )
}

export default CartDrawer;