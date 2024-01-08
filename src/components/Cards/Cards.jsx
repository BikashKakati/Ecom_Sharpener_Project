import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
const BASE_URL = "https://crudcrud.com/api/9bb3324531e044108ea0c2ede13a3a05/cartdetails";


function Cards({ products }) {
    const { cartProductsDetails, setCartProductsDetails } = useCartContext();

    async function handleAddToCart(productId) {
        let updateCartDetails = null;
        const isAlreadyExist = cartProductsDetails.some(product => product.id === productId);
        if (isAlreadyExist) {
            let updatedProductForApi;
            updateCartDetails = cartProductsDetails.map((cartProducts) => {
                if (cartProducts.id === productId) {
                    const updateProduct = {
                        ...cartProducts,
                        quantity: cartProducts.quantity + 1
                    }
                    
                    updatedProductForApi = updateProduct;
                    return updateProduct;

                } else {
                    return cartProducts;
                }
            })
            const idOfProduct = updatedProductForApi._id;
            await updateRequestHandler({ ...updatedProductForApi }, idOfProduct);
        } else {
            const updateProduct = { ...products, quantity: 1 };
            const res = await postRequestHandler(updateProduct);
            updateCartDetails = [...cartProductsDetails, res];
        }
        setCartProductsDetails(updateCartDetails);
    }

    async function postRequestHandler(cartProducts) {
        try {
            const { data } = await axios.post(BASE_URL, cartProducts);
            return data;
        } catch (err) {
            console.log("Error in post request");
        }
    }

    async function updateRequestHandler(cartProducts, id) {
        delete cartProducts._id;
        try {
            await axios.put(`${BASE_URL}/${id}`, cartProducts);
        } catch (err) {
            console.log("Error in put request");
        }
    }



    return (
        <Card className="w-72 m-6">
            <Link to={`/productdetails/${products.id}`}>
                <CardHeader floated={false} className="relative h-56">
                    <img
                        src={products.imageUrl}
                        alt="card-image"
                        className='object-cover object-center'
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {products.title}
                    </Typography>
                    <Typography as="span" className='font-bold'>
                        Price {products.price}
                    </Typography>
                </CardBody>
            </Link>
            <CardFooter className="pt-0">
                <Button type='button' fullWidth onClick={() => { handleAddToCart(products.id) }}>Add To Cart</Button>
            </CardFooter>
        </Card>
    )
}

export default Cards