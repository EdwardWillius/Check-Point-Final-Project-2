import React, { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../component/Navbar';

const HomePage = () => {
    const [products, setProducts] = useState([]);


    const getProducts = async () => {
      const config = {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      }
      
        try {
            const response = await axios.get('https://dummyjson.com/products', config)
            console.log(response.data);
            setProducts(response.data.products);
        
        } catch (error) {
            console.log(error);
        }
       

    }

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div>
        <Navbar />
      <h1>Home Page</h1>
      {
        !!products.length && products.map((product) => (
            <div key={product.id}>
                <div>
                    <img width={100} height={100} src={product?.images[0]} alt={product.title} />
                </div>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.availabilityStatus}</p>
                <p>{product.price}</p>
                <Link to={`/detail/${product.id}`}>Detail</Link>
            </div>
        ))
      }
    </div>
  );
};

export default HomePage;

