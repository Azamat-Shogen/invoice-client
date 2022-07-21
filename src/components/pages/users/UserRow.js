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

    const classes = useStyles();

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
           <TableCell align='center'>{user.status}</TableCell>

        </TableRow>
        <TableRow className={classes.row2}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box margin={1}>
                <Grid style={{paddingTop: 0, float: 'right'}}>
                    <Button 
                        className={''}
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