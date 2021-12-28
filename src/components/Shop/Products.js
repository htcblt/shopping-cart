import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS=[
  {
    id: 'p1',
    price: 6,
    title: 'Stefan Zweig -Chess Story ',
    description: 'An epic chess match on a transatlantic liner unearths a story of persecution and obsession.',
  },
  {
    id: 'p2',
    price: 5,
    title: 'Harry Potter and the Philosophers Stone - J. K. Rowling',
    description: 'The spellbinding first adventure in the Harry Potter series and Winner of Winners in the 2020 Blue Peter Book Awards',
  },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products)=>(
          <ProductItem
           key={products.id}
           id={products.id}
           title={products.title}
           price={products.price}
           description={products.description}
        />

        ))}
        
      </ul>
    </section>
  );
};

export default Products;