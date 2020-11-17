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

// import CloseIcon from "@material-ui/icons/Close";
// import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// import { usersList } from "../../Store/Actions/userActions";
import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";
// import Button from "../../../Shared/UIElements/Button";
import {
  listProducts,
  deleteProduct,
} from "../../../Store/Actions/productsActions";
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

const ProductListPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  //   const userDelete = useSelector((state) => state.userDelete);
  //   const { success: successDelete } = userDelete;

  console.log(products);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  // console.log(successDelete);
  // console.log(loadingDelete);
  // console.log(errorDelete);
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push("/");
    }
  }, [dispatch, userInfo, history, successDelete]);

  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
    console.log("Delete Product");
  };

  //   const handleCreateProduct = () => {
  //     return <Link to="/new-product" />
  // }

  return (
    <>
      <div className="productList">
        <div>
          <h2
            style={{
              color: "#111",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Products List
          </h2>
        </div>
        {loadingDelete && <Spinner />}
        {errorDelete && <Message severity="error">{errorDelete}</Message>}
        {loading ? (
          <Spinner />
        ) : error ? (
          <Message severity="error">{error}</Message>
        ) : (
          <>
            <Grid
              container
              direction="column"
              justify="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <Link
                  to="/add-product"
                  style={{
                    color: "inherit",
                    textDecoration: "inherit",
                    display: "inline-block",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#111",
                      color: "#fff",
                      border: "1px solid #111",
                      margin: "0 20px 20px 20px",
                    }}
                  >
                    Create Product
                  </Button>
                </Link>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table
                    className={classes.table}
                    aria-label="customized table"
                  >
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>No.</StyledTableCell>
                        <StyledTableCell align="center">Title</StyledTableCell>
                        <StyledTableCell align="center">
                          Description
                        </StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Sizes</StyledTableCell>
                        <StyledTableCell align="center">Colors</StyledTableCell>
                        <StyledTableCell align="center">
                          Product Image
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Category ID
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          Product Details
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products &&
                        products.map((product, index) => (
                          <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                              {`${index + 1}.`}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                              {product.Title}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {product.Description}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {product.Price}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {product.Sizes.map((size, index) => (
                                <span
                                  key={index}
                                  style={{
                                    border: "1px solid black",
                                    padding: "4px",
                                    margin: "3px",
                                    backgroundColor: "lightcyan",
                                  }}
                                >
                                  {size}
                                </span>
                              ))}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <span>
                                {product.Colors.map((color, index) => (
                                  <span
                                    key={index}
                                    style={{
                                      height: "25px",
                                      width: "25px",
                                      backgroundColor: color,
                                      borderRadius: "50%",
                                      display: "inline-block",
                                      margin: "5px 5px 5px 0",
                                      border: "1px solid #ccc",
                                    }}
                                  ></span>
                                ))}
                              </span>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <img
                                style={{ width: "40%", height: "30" }}
                                src={product.Images[0]}
                                alt={product.Title}
                              />
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {product.Category}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <Link to={`/admin/product/${product._id}/edit`}>
                                <Button size="small" variant="contained">
                                  <EditIcon style={{ color: "#111" }}>
                                    <Typography variant="srOnly">
                                      Edit Product
                                    </Typography>
                                  </EditIcon>
                                </Button>
                              </Link>
                              <Link to={"/admin/productslist"}>
                                <Button
                                  onClick={() =>
                                    deleteProductHandler(product._id)
                                  }
                                  size="small"
                                  variant="contained"
                                >
                                  <DeleteIcon style={{ color: "red" }}>
                                    <Typography variant="srOnly">
                                      Delete Product
                                    </Typography>
                                  </DeleteIcon>
                                </Button>
                              </Link>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default ProductListPage;
