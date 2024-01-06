import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {
    Card,
    Input,
    Button,
    Typography,
    CardFooter,
    CardBody,
    Alert,
} from "@material-tailwind/react";
import { useCartContext } from '../../context/CartContext';

function LoginForm() {
    const { signUpHandler, logInHandler, setUserToken, errMessage, setErrMessage, updatePasswordHandler, userToken } = useCartContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogIn, setIsLogIn] = useState(true);
    const [updatePasswordMode, setUpdatePasswordMode] = useState(false);
    useEffect(() => {
        if (errMessage) {
            const timer = setTimeout(() => {
                setErrMessage(null);
            }, 2000)

            return () => {
                clearTimeout(timer)
            }
        }
    }, [errMessage])

    async function submitHandler(e) {
        e.preventDefault();
        if(updatePasswordMode){
            await updatePasswordHandler(password);
            setUpdatePasswordMode(prev => !prev);
            return;
        }
        try {
            if (isLogIn) {
                const res = await logInHandler(email, password);
                setUserToken(res && res?.user?.accessToken);
                navigate("/store");
            } else {
                const res = await signUpHandler(email, password);
                setIsLogIn(prev => !prev);
                console.log(res);
            }
            setEmail("");
            setPassword("");
        } catch (err) {
            setErrMessage(err.message);
        }
    }
    return (
        <Card color="transparent" shadow={false} className="mt-10 max-w-96 w-full">
            <Typography variant="h4" color="blue-gray" className="text-center">
                {isLogIn ? "Log In" : "Sign Up"}
            </Typography>
            <CardBody>
                <form className="mt-2 mb-2 flex flex-col gap-6">
                    {
                        !updatePasswordMode &&
                        <>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </>
                    }

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Password
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="******"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="mt-6" fullWidth onClick={submitHandler}>
                        Submit
                    </Button>

                </form>
            </CardBody>
            <CardFooter className='p-1'>
                {errMessage && <Alert className='bg-red-500'>{errMessage}</Alert>}
                <Button variant='text' onClick={() => {
                    setIsLogIn(prev => !prev);
                    setUpdatePasswordMode(false)
                }} className='mx-auto my-0 block mb-3'>
                    {isLogIn ? "create an account" : "log in with existing account"}
                </Button>
                {userToken && !updatePasswordMode && <Button className='mx-auto my-0 block' onClick={()=>{setUpdatePasswordMode(prev => !prev)}}> Update password</Button>}
            </CardFooter>
        </Card>
    )
}

export default LoginForm