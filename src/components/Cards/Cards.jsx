import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useCartContext } from '../../context/CartContext';
import { makePostRequest } from '../../services/api';
import { Link } from 'react-router-dom';

function Cards({ products }) {
    const { cartProductsDetails, setCartProductsDetails } = useCartContext();
    async function handleAddToCart(productId) {
        let updateCartDetails = null;
        let isAlreadyExist = cartProductsDetails.some(product => product.id === productId);
        if (isAlreadyExist) {
            updateCartDetails = cartProductsDetails.map(async (cartProducts) => {
                if (cartProducts.id === productId) {
                    const updatedCartProduct = {
                        ...products,
                        quantity: cartProducts.quantity + 1
                    }
                    return updatedCartProduct;
                } else {
                    return cartProducts
                }
            })
        } else {
            updateCartDetails = [...cartProductsDetails, { ...products, quantity: 1 }]
        }

        setCartProductsDetails(updateCartDetails);
    }
    return (
        <Link to={`/productdetails/${products.id}`}>
            <Card className="w-72 m-6">
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
                <CardFooter className="pt-0">
                    <Button onClick={() => handleAddToCart(products.id)}>Add To Cart</Button>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default Cards