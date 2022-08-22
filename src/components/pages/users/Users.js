import {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { ToastContainer } from 'react-toastify';
import { fetchAllUsers } from '../../api/actions';
import { getCookie } from '../../auth/helpers';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination, CircularProgress } from '@material-ui/core';
import useStyles from './usersStyles'
import UserRow from './UserRow';



const Users = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [rows, setRows] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const token = getCookie('token');


    const classes = useStyles();

    useEffect( () => {
        const fetchedData = fetchAllUsers(token)
        fetchedData.then(result => {
            const newData = [];
            result.data.forEach( el => {
                newData.push(
                    {id: el._id, 
                        name: el.name,
                        email: el.email,
                        status: el.status}
                )
            })
            
            setUsers(result.data)
            setLoading(false);
        }).catch(err => setLoading(true));

        return () => {
           console.log('users: unmount')
        }
      
    }, [loading, token, users.length])


    useEffect( () => {
        if(users.length > 0){
            setRows(users)
        }

    }, [users, users.length])


    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0)
    }

    return (
        <div>
           <TableContainer component={Paper} className={classes.container}>
           <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
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
                                <UserRow setLoading={setLoading} key={i} user={row}/>
                            ))}
                        </TableBody>
                   )}
              </Table>
              <TablePagination 
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
           </TableContainer>
        </div>
    )
}

export default Users