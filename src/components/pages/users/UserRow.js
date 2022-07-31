import React, {useState} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import {Button, Radio, RadioGroup, Checkbox, FormLabel, FormControlLabel, Grid, FormControl} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import useStyles from './usersStyles'


const UserRow = React.memo(({ user }) => {
    const [open, setOpen] = useState(false);
    const [userStatus, setUserStatus] = useState(user.status);
    const classes = useStyles();

    const userStatusStyle = user.status === 'Active' ? 
                            classes.userStatusActive : (user.status === 'Pending' ? 
                            classes.userStatusPending: classes.userStatusRestricted)

   const [userStatusClass, setUserStatusClass] = useState(userStatusStyle)

   

    const handleChange = (e) => {
        const data = e.target.value
        setUserStatus(data)
        const tempStyle = data === 'Active' ? 
                         classes.userStatusActive : (data === 'Pending' ? 
                         classes.userStatusPending: classes.userStatusRestricted);
        setUserStatusClass(tempStyle);
    }


    return (
        <React.Fragment>
        <TableRow className={classes.rootSeen}>
           <TableCell>
             <IconButton area-label="expand row" size='small' onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
             </IconButton>
           </TableCell>
           <TableCell align='left'>{user.name}</TableCell>
           <TableCell align='center'>{user.email}</TableCell>
           <TableCell className={userStatusClass} align='center'>{user.status}</TableCell>

        </TableRow>
        <TableRow className={classes.row2}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={1}>
                <Grid className={classes.collapse}>
                    <FormControl>
                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                    <RadioGroup
                    row
                    aria-labelledby='demo-row-radio-buttons-group-label'
                    name='row-radio-buttons-group'
                    value={userStatus}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="Active" className={classes.checkbox_label} control={<Radio size='small' 
                         style={{color: 'green'}} />} label="Active"/>
                    <FormControlLabel value="Pending" className={classes.checkbox_label} control={<Radio size='small' 
                         style={{color: 'orange'}} />} label="Pending"/>
                     <FormControlLabel value="Restricted" className={classes.checkbox_label} control={<Radio size='small' 
                         style={{color: 'red'}} />} label="Restricted"/>

                    </RadioGroup>
                    </FormControl>
                    <Button 
                        style={{outline: 'none'}}
                        className={classes.delete_button}
                        variant="contained"
                        size="small"
                        color="secondary">
                        Delete
                    </Button>
                </Grid>
                </Box>
            </Collapse>
        </TableCell>
        </TableRow>
        </React.Fragment>
    )
});

export default UserRow;