import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Typography,
} from "@material-tailwind/react";

function Cards({products,index}) {
    return (
        <Card className="w-72 m-6" key={index}>
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
                <Button>Add To Cart</Button>
            </CardFooter>
        </Card>
    )
}

export default Cards