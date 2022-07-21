import {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import { Grid, TablePagination, CircularProgress, Button} from '@material-ui/core';
import useStyles from './usersStyles'
import UserRow from './UserRow';


const initData = [
    {name: 'steve', email: 'jhsdfsdf@gmail.com', status: 'active'},
    {name: 'steve', email: 'jhsdfsdf@gmail.com', status: 'restricted'},
    {name: 'steve', email: 'jhsdfsdf@gmail.com', status: 'active'},
    {name: 'steve', email: 'jhsdfsdf@gmail.com', status: 'restricted'},
    {name: 'steve', email: 'jhsdfsdf@gmail.com', status: 'pending'},
    {name: 'steve', email: 'jhsdfsdf@gmail.com', status: 'active'},
    {name: 'steve', email: 'jhsdfsdf@gmail.com', status: 'pending'}
]

function generateUsersData(arr){
    let newArr = [];

    // try{
    //   if(arr.length > 0){
    //     newArr.push(

    //     )
    //   }

    // }catch(err){

    // }

    // return newArr
}


const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [rows, setRows] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const classes = useStyles();

    useEffect( () => {
        // api call here
        setUsers(initData);
       if(users.length > 0){
        setLoading(false)
       }
        
    }, [users])

    useEffect( () => {
        if(users.length > 0){
            setRows(users)
        }
    }, [users])


    const handleChangePage = (newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0)
    }

    return (
        <div>
           <TableContainer component={Paper} className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
              <TableHead>
                       <TableRow>
                           <TableCell />
                           <TableCell align="left">User</TableCell>
                           <TableCell align="center">Email</TableCell>
                           <TableCell align="center">Status</TableCell>
                       </TableRow>
                   </TableHead>

                   {loading ? (
                        <TableBody>
                            <TableRow>
                                <TableCell className={classes.cell}>
                                    <CircularProgress className={classes.circle} />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                   ): (
                        <TableBody>
                            {rows.slice( page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, i) => (
                                <UserRow  key={i} user={row}/>
                            ))}
                        </TableBody>
                   )}
              </Table>
           </TableContainer>
        </div>
    )
}

export default Users