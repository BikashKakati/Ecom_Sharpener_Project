import { XMarkIcon } from '@heroicons/react/24/solid'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { useCartContext } from '../../context/CartContext'
import axios from 'axios';

const BASE_URL = "https://crudcrud.com/api/9bb3324531e044108ea0c2ede13a3a05/cartdetails";

function Cart({ openCart, setOpenCart }) {
    const { cartProductsDetails, setCartProductsDetails } = useCartContext();
    async function handleProductRemove(productId,id){
        const updatedCartDetails = cartProductsDetails.filter((product) => product.id !== productId);
        setCartProductsDetails(updatedCartDetails);
        await deleteRequestHandler(id);
    }
    async function deleteRequestHandler(id){
        await axios.delete(`${BASE_URL}/${id}`);
    }
    return (
        <div className={`${openCart ? 'w-[500px]' : 'w-0'} h-[543px] bg-gray-300 fixed right-0 top-16 z-10 transition-all overflow-y-scroll py-6`}>
            <div className="flex flex-col">
                <XMarkIcon className="h-6 w-6 my-3 mx-10" strokeWidth={2} onClick={() => setOpenCart(!openCart)} />
                <div className="w-full p-5">
                    {!cartProductsDetails.length && <Typography as="p" variant='h4' className='text-center text-blue-gray-500'>Your cart is empty!</Typography>}
                    {
                        cartProductsDetails?.map((cartProducts) => {
                            const { id, title, price, quantity, imageUrl,_id} = cartProducts;
                            return (
                                <Card className='h-28 w-full mb-5 flex-row items-center' key={id}>
                                    <CardHeader floated={false} className='w-28 m-0'>
                                        <img src={imageUrl} alt="cart1" className='w-full object-cover object-center' />
                                    </CardHeader>
                                    <CardBody className='flex'>
                                        <div className="mr-5">
                                            <Typography as="p">{title}</Typography>
                                            <Typography as="span" className='text-sm' >Price {price}</Typography>
                                        </div>
                                        <Typography as="span" variant='h6'>qty×{quantity}</Typography>
                                    </CardBody>
                                    <CardFooter>
                                        <Button type="primary"
                                            onClick={() => { handleProductRemove(id,_id) }}>
                                            Remove
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }
                </div>
                <Button className='w-60 mx-auto bg-red-500'>Buy</Button>
            </div>
        </div>
    )
}

export default Cart