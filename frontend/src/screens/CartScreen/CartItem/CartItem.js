import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import useStyles from './styles';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
const CartItem = ({item,removeFromCartHandler,addToCart}) => {
    const dispatch = useDispatch();

    const classes = useStyles();
return (
<Card className="cart-item">
     
         <CardMedia image={item.image} alt={item.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
        <Typography  variant="h4"> <Link to={`/product/${item.product}`}>{item.name} </Link></Typography>
        <Typography variant="h5">{item.price}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
        <select
            value={item.qty}
            onChange={(e) =>
            dispatch(
                addToCart(item.product, Number(e.target.value))
            )
            }
        >
            {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
                {x + 1}
            </option>
            ))}
        </select>
       
        </div>
        <Button variant="contained" type="button" color="secondary" 
         onClick={() => removeFromCartHandler(item.product)}>Remove</Button>
      </CardActions>
      </Card>
      )};
  


export default CartItem;



     



       



        
  
