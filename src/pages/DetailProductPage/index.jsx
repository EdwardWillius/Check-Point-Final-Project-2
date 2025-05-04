import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../../component/Navbar";
import axios from "axios";


const DetailProductPage = () => {
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    const getProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        
            getProduct();
       
    }, []);

    
    return (
        <div>
            <Navbar />
            <h1>Detail Product Page</h1>
            <h1>{id}</h1>
            <h1>{product?.title}</h1>
            <h1>{product?.description}</h1>
            <h1>{product?.price}</h1>
            <h1>{product?.discountPercentage}</h1>
            <h1>{product?.rating}</h1>
            <h1>{product?.stock}</h1>
        </div>
    );
}

export default DetailProductPage;