
import React from 'react';
import { Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Rating from '../Rating';

import useStyles from './styles';

const Product = (props) => {
  const classes = useStyles();
  const { product } = props;

  return (
    <Card className={classes.root}>
    <Link to={`/product/${product._id}`}>
      <CardMedia className={classes.media} image={product.image} title={product.name} />
      </Link>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
        <Rating 
          rating={product.rating}
          numReviews={product.numReviews}
         ></Rating>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
   
      </CardContent>
   
    </Card>
  );
};
export default Product;


