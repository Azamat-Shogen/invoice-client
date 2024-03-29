import React, { useState, useEffect, memo, useRef } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { changeUserStatus } from '../../api/actions';
import { getCookie } from '../../auth/helpers';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import DeleteUserModal from './DeleteUserModal';
import {Button, Radio, RadioGroup, FormControlLabel, Grid, FormControl} from '@mui/material';
import useStyles from './usersStyles'


function generateStatusClass(statusValue){
    if(!statusValue) return "";
    return statusValue.toLowerCase().concat("-status")
}


const UserRow = React.memo(({ user, setLoading }) => {
    const [open, setOpen] = useState(false);
    const [userStatus, setUserStatus] = useState(user.status);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const token = getCookie('token');
    const classes = useStyles();
    const statusClass = generateStatusClass(userStatus)


    
const handleChange = (e) => {
        const data = e.target.value
        setUserStatus(data)
    }

    const submitStatus = (e) => {
        e.preventDefault();
        changeUserStatus ({ 
            token: token, 
            status: userStatus, 
            userId: user._id
        });

        setTimeout(() => {
            setOpen(!open)
        }, 2000)
    
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
           <TableCell className={statusClass} align='center'>{userStatus}</TableCell>

        </TableRow>
        <TableRow className={classes.row2}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={1}>
                <Grid className={classes.collapse}>
                    <form onSubmit={submitStatus}>
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
                         style={{color: 'green'}} />}  label="Active"/>
                    <FormControlLabel value="Pending" className={classes.checkbox_label} control={<Radio size='small' 
                         style={{color: 'orange'}} />} label="Pending"/>
                     <FormControlLabel value="Restricted" className={classes.checkbox_label} control={<Radio size='small' 
                         style={{color: 'red'}} />} label="Restricted"/>

                    </RadioGroup>
                    <Button
                     style={{outline: 'none'}}
                      type='submit'
                      variant="contained"
                      color="primary"
                      size="small"
                      disabled={user.role === 'admin'}
                        >
                        Change
                    </Button>
                    </FormControl>
                    </form>
                    <Button 
                        style={{outline: 'none'}}
                        className={classes.delete_button}
                        variant="contained"
                        size="small"
                        disabled={user.role === 'admin'}
                        color="error"
                        onClick={toggle}
                        >
                        Delete
                    </Button>
                  
                    <DeleteUserModal setLoading={setLoading} modal={modal} toggle={toggle} token={token} userId={user._id} />
                   
                </Grid>
                </Box>
            </Collapse>
        </TableCell>
        </TableRow>
        </React.Fragment>
    )
});

export default memo(UserRow);