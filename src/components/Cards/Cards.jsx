import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

function Cards({ products }) {
    const { cartProductsDetails, setCartProductsDetails } = useCartContext();
    
    function handleAddToCart(productId) {
        let updateCartDetails = null;
        let isAlreadyExist = cartProductsDetails.some(product => product.id === productId);
        if (isAlreadyExist) {
            updateCartDetails = cartProductsDetails.map((cartProducts) => {
                if (cartProducts.id === productId) {
                    return {
                        ...cartProducts,
                        quantity: cartProducts.quantity + 1
                    }
                } else {
                    return cartProducts;
                }
            })
        } else {
            updateCartDetails = [...cartProductsDetails, { ...products, quantity: 1 }]
        }
        setCartProductsDetails(updateCartDetails);
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