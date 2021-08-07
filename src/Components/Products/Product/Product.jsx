import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
// import {Topography} from '@material-ui/core'
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
const Item = ({ product, onAddToCart }) => {
  const classes = useStyles();
  console.log(product);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />

      <CardContent>
        <div className={classes.cardContent}>
          <div>
            {" "}
            <h2>{product.name}</h2>
          </div>
          <div>
            <h4>{product.price.formatted_with_symbol}</h4>
          </div>
        </div>

        <div className={classes.cardContent}>
          <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
          <CardActions className={classes.cardActions}>
            <IconButton
              arial-label="Add to cart"
              onClick={() => onAddToCart(product.id, 1)}
            >
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};
export default Item;
