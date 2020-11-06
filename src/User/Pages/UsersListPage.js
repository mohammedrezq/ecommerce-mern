import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { usersList } from "../../Store/Actions/userActions";
import Spinner from "../../Shared/UIElements/Spinner";
import Message from "../../Shared/UIElements/Message";
import { deleteUser } from "../../Store/Actions/userActions";
// import Button from "../../Shared/UIElements/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UsersListPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const theUsersList = useSelector((state) => state.usersList);
  const { loading, error, users } = theUsersList;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  console.log(users);

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
      if(userInfo && userInfo.isAdmin) {
          dispatch(usersList());
      } else {
          history.push("/")
      }
  }, [dispatch, userInfo, history, successDelete]);

  const deleteUserHandler = (id) => {
    if(window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id))
    }
      console.log("Delete User")
  }

  return (
    <>
      <div className="usersList">
        <div>
          <h2
            style={{
              color: "#111",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Users List
          </h2>
        </div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Message severity="error">{error}</Message>
        ) : (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>No.</StyledTableCell>
                      <StyledTableCell>User ID</StyledTableCell>
                      <StyledTableCell align="center">
                        First Name
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Last Name
                      </StyledTableCell>
                      <StyledTableCell align="center">Email</StyledTableCell>
                      <StyledTableCell align="center">Gender</StyledTableCell>
                      <StyledTableCell align="center">Country</StyledTableCell>
                      <StyledTableCell align="center">Avatar</StyledTableCell>
                      <StyledTableCell align="center">DOB</StyledTableCell>
                      <StyledTableCell align="center">Admin</StyledTableCell>
                      <StyledTableCell align="center">
                        Users Details
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => (
                      <StyledTableRow key={user._id}>
                        <StyledTableCell component="th" scope="row">
                          {`${index+1}.`}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {user.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.firstName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.lastName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <a style={{color: "inherit"}} href={`mailto:${user.email}`} >{user.email}</a>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.Gender}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.Country}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <img style={{width: "40%", height: "30"}} src={user.Avatar} alt={user.firstName} />
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.DateOfBirth.substring(0,10)}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {user.isAdmin ? (
                            <CheckIcon style={{ color: "green" }} />
                          ) : (
                            <CloseIcon color="error" />
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                        <Button size="small" variant="contained">
                          <Link to={`/admin/user/${user._id}/edit`}>
                              <EditIcon style={{color: "#111"}}>
                              <Typography variant="srOnly">Edit User</Typography>
                              </EditIcon>
                          </Link>
                          </Button>
                          <Button size="small" variant="contained">
                          <Link to={'/admin/userlist'}>

                              <DeleteIcon style={{color: "red"}} onClick={() => deleteUserHandler(user._id)}>
                              <Typography variant="srOnly">Delete User</Typography>
                              </DeleteIcon>
                          </Link>
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
};

export default UsersListPage;
