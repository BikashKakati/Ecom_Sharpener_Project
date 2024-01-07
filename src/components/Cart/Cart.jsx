import { XMarkIcon } from '@heroicons/react/24/solid'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { useCartContext } from '../../context/CartContext'

function Cart({ openCart, setOpenCart }) {
    const { cartProductsDetails, setCartProductsDetails } = useCartContext();
    function handleProductRemove(productId){
        const updatedCartDetails = cartProductsDetails.filter((product) => product.id !== productId);
        setCartProductsDetails(updatedCartDetails);
    }
    return (
        <div className={`${openCart ? 'w-[500px]' : 'w-0'} h-[543px] bg-gray-300 fixed right-0 top-16 z-10 transition-all overflow-y-scroll py-6`}>
            <div className="flex flex-col">
                <XMarkIcon className="h-6 w-6 my-3 mx-10" strokeWidth={2} onClick={() => setOpenCart(!openCart)} />
                <div className="w-full p-5">
                    {
                        cartProductsDetails?.map((cartProducts) => {
                            const { id, title, price, quantity, imageUrl } = cartProducts;
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
                                            onClick={() => { handleProductRemove(id) }}>
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