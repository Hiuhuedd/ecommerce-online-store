import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { Delete, Add, Remove } from "@material-ui/icons";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <div>
          {" "}
          <h2>{item.name}</h2>
        </div>
        <div>
          <h4>{item.price.formatted_with_symbol}</h4>
        </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            <Remove />
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            <Add />
          </Button>
        </div>
        <div className={classes.delete}>
          <Button
            variant="contained"
            type="button"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            {" "}
            <Delete color="secondary" />
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
