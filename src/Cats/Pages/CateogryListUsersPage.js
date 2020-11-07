import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useHistory } from "react-router-dom";

import { Grid, Typography, Button } from "@material-ui/core";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import CloseIcon from "@material-ui/icons/Close";
// import CheckIcon from "@material-ui/icons/Check";
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';

import { catsListUsers } from "../../Store/Actions/categoryActions";
import Spinner from "../../Shared/UIElements/Spinner";
import Message from "../../Shared/UIElements/Message";
import { deleteCategory } from "../../Store/Actions/categoryActions";
import { Link } from "react-router-dom";
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

const CategoryListUsersPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const categoryListUsers = useSelector((state) => state.categoryListUsers);
  const { loading, error, cats } = categoryListUsers;


  console.log(cats);
//   console.log(loading);
//   console.log(error);


  useEffect(() => {
          dispatch(catsListUsers());
  }, [dispatch]);


  return (
    <>
      <div className="catsList">
        <div>
          <h2
            style={{
              color: "#111",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Categories List
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
                      {/* <StyledTableCell>Category ID</StyledTableCell> */}
                      <StyledTableCell align="center">
                        Category Title
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Category Description
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cats.map((category, index) => (
                      <StyledTableRow key={category._id}>
                        <StyledTableCell component="th" scope="row">
                          {`${index+1}.`}
                        </StyledTableCell>
                        {/* <StyledTableCell component="th" scope="row">
                          {category.id}
                        </StyledTableCell> */}
                        <StyledTableCell align="center">
                          <Link to={`/category/${category.id}`} >{category.categoryTitle}</Link>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {category.categoryDescription}
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

export default CategoryListUsersPage;
