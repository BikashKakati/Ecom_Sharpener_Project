import { XMarkIcon } from '@heroicons/react/24/solid'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import Cards from '../Cards/Cards'

function Cart({ openCart, setOpenCart }) {
    return (
        <div className={`${openCart ? 'w-[500px]' : 'w-0'} h-[543px] bg-gray-300 fixed right-0 top-16 z-10 transition-all overflow-y-scroll py-6`}>
            <div className="flex flex-col">
                {/* <XMarkIcon className="h-6 w-6 my-3 mx-10" strokeWidth={2} onClick={() => setOpenCart(!openCart)} /> */}
                <div className="w-full p-5">
                    <Card className='w-full mb-5 flex-row'>
                        <CardHeader floated={false} className='w-24 m-0'>
                            <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt="cart1" />
                        </CardHeader>
                        <CardBody className='flex'>
                            <div className="mr-5">
                                <Typography as="p" variant='h6'>T-shirt</Typography>
                                <Typography as='span' className='text-sm'>Price 456</Typography>
                            </div>
                            <Typography as="span" variant='h6'>qty×5</Typography>
                        </CardBody>
                        <CardFooter>
                            <Button type="primary">Remove</Button>
                        </CardFooter>
                    </Card>
                    <Card className='w-full mb-5 flex-row'>
                        <CardHeader floated={false} className='w-24 m-0'>
                            <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt="cart1" />
                        </CardHeader>
                        <CardBody className='flex'>
                            <div className="mr-5">
                                <Typography as="p" variant='h6'>T-shirt</Typography>
                                <Typography as='span' className='text-sm'>Price 456</Typography>
                            </div>
                            <Typography as="span" variant='h6'>qty×5</Typography>
                        </CardBody>
                        <CardFooter>
                            <Button type="primary">Remove</Button>
                        </CardFooter>
                    </Card>
                    <Card className='w-full mb-5 flex-row'>
                        <CardHeader floated={false} className='w-24 m-0'>
                            <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt="cart1" />
                        </CardHeader>
                        <CardBody className='flex'>
                            <div className="mr-5">
                                <Typography as="p" variant='h6'>T-shirt</Typography>
                                <Typography as='span' className='text-sm'>Price 456</Typography>
                            </div>
                            <Typography as="span" variant='h6'>qty×5</Typography>
                        </CardBody>
                        <CardFooter>
                            <Button type="primary">Remove</Button>
                        </CardFooter>
                    </Card>
                    <Card className='w-full mb-5 flex-row'>
                        <CardHeader floated={false} className='w-24 m-0'>
                            <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt="cart1" />
                        </CardHeader>
                        <CardBody className='flex'>
                            <div className="mr-5">
                                <Typography as="p" variant='h6'>T-shirt</Typography>
                                <Typography as='span' className='text-sm'>Price 456</Typography>
                            </div>
                            <Typography as="span" variant='h6'>qty×5</Typography>
                        </CardBody>
                        <CardFooter>
                            <Button type="primary">Remove</Button>
                        </CardFooter>
                    </Card>
                    <Card className='w-full mb-5 flex-row'>
                        <CardHeader floated={false} className='w-24 m-0'>
                            <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt="cart1" />
                        </CardHeader>
                        <CardBody className='flex'>
                            <div className="mr-5">
                                <Typography as="p" variant='h6'>T-shirt</Typography>
                                <Typography as='span' className='text-sm'>Price 456</Typography>
                            </div>
                            <Typography as="span" variant='h6'>qty×5</Typography>
                        </CardBody>
                        <CardFooter>
                            <Button type="primary">Remove</Button>
                        </CardFooter>
                    </Card>
                    <Card className='w-full mb-5 flex-row'>
                        <CardHeader floated={false} className='w-24 m-0'>
                            <img src='https://prasadyash2411.github.io/ecom-website/img/Album%201.png' alt="cart1" />
                        </CardHeader>
                        <CardBody className='flex'>
                            <div className="mr-5">
                                <Typography as="p" variant='h6'>T-shirt</Typography>
                                <Typography as='span' className='text-sm'>Price 456</Typography>
                            </div>
                            <Typography as="span" variant='h6'>qty×5</Typography>
                        </CardBody>
                        <CardFooter>
                            <Button type="primary">Remove</Button>
                        </CardFooter>
                    </Card>

                </div>
                <Button className='w-60 mx-auto bg-red-500'>Buy</Button>
            </div>
        </div>
    )
}

export default Cart