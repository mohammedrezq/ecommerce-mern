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

import { getOrdersList } from "../../../Store/Actions/orderActions";
import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";
// import { deleteUser } from "../../Store/Actions/userActions";
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

const OrdersListPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const ordersList = useSelector((state) => state.ordersList);
  const { loading, error, orders } = ordersList;


  console.log(orders);

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
      if(userInfo && userInfo.isAdmin) {
          dispatch(getOrdersList());
      } else {
          history.push("/")
      }
  }, [dispatch, userInfo, history]);


  return (
    <>
      <div className="orderList">
        <div>
          <h2
            style={{
              color: "#111",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Orders List
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
                      <StyledTableCell align="center">No.</StyledTableCell>
                      <StyledTableCell align="center">Orders ID</StyledTableCell>
                      <StyledTableCell align="center">User ID</StyledTableCell>
                      <StyledTableCell align="center">Items Price</StyledTableCell>
                      <StyledTableCell align="center">Created At</StyledTableCell>
                      <StyledTableCell align="center">Total Price</StyledTableCell>
                      <StyledTableCell align="center">Paid</StyledTableCell>
                      <StyledTableCell align="center">Delivered</StyledTableCell>
                      <StyledTableCell align="center">Order</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order, index) => (
                      <StyledTableRow key={order._id}>
                        <StyledTableCell component="th" scope="row">
                          {`${index+1}.`}
                        </StyledTableCell>
                        <StyledTableCell component="th" scope="row">
                          {order.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {order.user}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {order.itemsPrice}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {order.createdAt.substring(0,10)}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {order.totalPrice}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {order.isPaid ? (
                            order.paidAt.substring(0,10)
                          ) : (
                            <CloseIcon color="error" />
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {order.isDelivered ? (
                            order.deliveredAt.substring(0,10)
                          ) : (
                            <CloseIcon color="error" />
                          )}
                        </StyledTableCell>

                        <StyledTableCell align="center">
                        <Button size="small" variant="contained">
                          <Link to={`/order/${order._id}`}>
                              <Typography>Order Details</Typography>
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

export default OrdersListPage;
