
import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DeleteForeverSharp,AddShoppingCartSharp } from "@material-ui/icons";
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link className={classes.link} to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={6} md={4} lg={3}key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h6">Cart-total : {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} type="button" variant="contained" size="small"
          onClick={handleEmptyCart}> <DeleteForeverSharp 
          color="secondary"/>Clear cart
          </Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="small" type="button" variant="contained"> <AddShoppingCartSharp />Checkout
          </Button>
        </div>
      </div>
      <div className={classes.padding}></div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <div className={classes.title}>
         <h2>Your Shopping Cart</h2>
     </div>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;