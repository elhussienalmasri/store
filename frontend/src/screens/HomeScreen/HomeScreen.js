
import React,{ useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Product from '../../components/Product/Product';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';
import useStyles from './styles';

 export default function HomeScreen() {
  const classes = useStyles();
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

   useEffect(() => {
     dispatch(listProducts());
   }, [dispatch]);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
            
            {loading ? (
         <LoadingBox></LoadingBox>
       ) : error ? (
         <MessageBox variant="danger">{error}</MessageBox>
       ) : (
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product}  />
          </Grid>
        ))}
      </Grid>
         )} 
      
    </main>
  );
};


