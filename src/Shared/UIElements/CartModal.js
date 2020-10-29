import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from './Fade';


const useStyles = makeStyles(() => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ProductToCartModal: {
        backgroundColor: "#fff",
        padding: "20px 30px"
    }
  }));

const CartModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={props.show}>{props.CartBtn}</div>
      <Modal
        aria-labelledby={props.ariaLabelledBy}
        aria-describedby={props.ariaDescribedBy}
        className={classes.modal}
        open={open}
        onClose={props.hide}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.ProductToCartModal}>
            <div id="add-to-cart-modal">{props.title}</div>
            <div id="add-to-cart-description-modal">{props.description}</div>
            <img id="add-to-cart-image-modal" src={props.image} />
            <div id="add-to-cart-price-modal">{props.price}</div>
            <div id="add-to-cart-size-modal">{props.size}</div>
            <div id="add-to-cart-qty-modal">{props.qty}</div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CartModal;