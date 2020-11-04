import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Grid, Card } from "@material-ui/core";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CloseIcon from '@material-ui/icons/Close';

import Spinner from "../../Shared/UIElements/Spinner";
import ProfileForm from "../Components/ProfileForm";
import { getUserListOrders } from "../../Store/Actions/orderActions";

import "./ProfilePage.css";
import Message from "../../Shared/UIElements/Message";
import Button from "../../Shared/UIElements/Button";


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
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});



const ProfilePage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const ordersListUser = useSelector((state) => state.ordersListUser);
  const { loading: loadingOrders, orders, error: errorOrders } = ordersListUser;

  console.log(orders);
  const userDetails = useSelector((state) => state.userDetails);

  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.email) {
        dispatch(getUserListOrders());
      }
    }
  }, [dispatch, history, userInfo, user]);

  console.log(typeof(orders))
  // console.log(loadingOrders)
  // console.log(orders)
  return (
    <div>
      <Grid container>
        <Grid item md={4} sm={12} xs={12}>
          <Card className="Profile__Form">
            <div className="Profile__Settings--Form"></div>
            <div className="view-header">Profile Settings</div>

            <ProfileForm />
          </Card>
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <div className="Orders">
            <div>
              <h2
                style={{
                  color: "#111",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                Orders{" "}
              </h2>
            </div>
            {loadingOrders ? <Spinner />: errorOrders ? <Message severity="error">{errorOrders}</Message>:(
                  <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Order ID</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                        <StyledTableCell align="center">Total&nbsp;(USD)</StyledTableCell>
                        <StyledTableCell align="center">Paid</StyledTableCell>
                        <StyledTableCell align="center">Delivered</StyledTableCell>
                        <StyledTableCell align="center">Order Details</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
          {orders.map((order) => (
            <StyledTableRow key={order._id}>
              <StyledTableCell component="th" scope="row">
              {order.id}
              </StyledTableCell>
              <StyledTableCell align="center">{order.createdAt.substring(0,10)}</StyledTableCell>
              <StyledTableCell align="center">{order.totalPrice}</StyledTableCell>
              <StyledTableCell align="center">{order.isPaid ? (order.paidAt.substring(0,10)): (<CloseIcon color="error" />)}</StyledTableCell>
              <StyledTableCell align="center">{order.isDelivered ? (order.deliveredAt.substring(0,10)): (<CloseIcon color="error" />)}</StyledTableCell>
              <StyledTableCell align="center"><Link to={`/order/${order._id}`}><Button style={{backgroundColor: "#111", border: "1px solid #111"}} >Order Details</Button></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            ) }
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfilePage;
