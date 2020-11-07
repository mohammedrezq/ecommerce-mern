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

import { catsList } from "../../Store/Actions/categoryActions";
import Spinner from "../../Shared/UIElements/Spinner";
import Message from "../../Shared/UIElements/Message";
import { deleteCategory } from "../../Store/Actions/categoryActions";
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

const CategoriesListPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const categoriesList = useSelector((state) => state.categoriesList);
  const { loading, error, cats } = categoriesList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const { success: successDeleteCategory } = categoryDelete;

  console.log(cats);
  console.log(successDeleteCategory);

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
      if(userInfo && userInfo.isAdmin) {
          dispatch(catsList());
      } else {
          history.push("/")
      }
  }, [dispatch, userInfo, history, successDeleteCategory]);

  const deleteCategoryHandler = (id) => {
    if(window.confirm("Are you sure you want to delete this category?")) {
        dispatch(deleteCategory(id))
      }
      console.log("Delete Category");
  }

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
                      <StyledTableCell>Category ID</StyledTableCell>
                      <StyledTableCell align="center">
                        Category Title
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Category Description
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Category Details
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cats.map((category, index) => (
                      <StyledTableRow key={category._id}>
                        <StyledTableCell component="th" scope="row">
                          {`${index+1}.`}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {category.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {category.categoryTitle}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {category.categoryTitle}
                        </StyledTableCell>



                        <StyledTableCell align="center">
                        <Button size="small" variant="contained">
                          <Link to={`/admin/category/${category._id}/edit`}>
                              <EditIcon style={{color: "#111"}}>
                              <Typography variant="srOnly">Edit Category</Typography>
                              </EditIcon>
                          </Link>
                          </Button>
                          <Button size="small" variant="contained">
                          <Link to={'/admin/categorieslist'}>

                              <DeleteIcon style={{color: "red"}} onClick={() => deleteCategoryHandler(category._id)}>
                              <Typography variant="srOnly">Delete Category</Typography>
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

export default CategoriesListPage;
