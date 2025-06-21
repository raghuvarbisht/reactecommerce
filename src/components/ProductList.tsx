import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productThunk';
import { addToCart } from '../features/cart/cartSlice';
import type { RootState, AppDispatch } from '../app/store';

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {items.map((product : any) => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10, width: 200 }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <h4>{product.title.slice(0, 30)}...</h4>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
