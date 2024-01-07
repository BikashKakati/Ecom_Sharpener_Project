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
import { useAuthContext } from '../../context/AuthContext';

const LOCAL_STORAGE_KEY = "USER_TOKEN";

function LoginForm() {
    const { signUpHandler, logInHandler, setUserToken, errMessage, setErrMessage, updatePasswordHandler, userToken, setIsLoading, isLoading } = useAuthContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogIn, setIsLogIn] = useState(true); // we are in login mode but not logged in till now.

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
        setIsLoading(true);
        if (userToken) {
            // change password
            try {
                if (password.length < 6) {
                    throw new Error("Invalid Password");
                }
                await updatePasswordHandler(password);
                setUserToken("");
                localStorage.setItem(LOCAL_STORAGE_KEY, null);
                setPassword("");
            } catch (err) {
                setErrMessage(err.message)
            }
            setIsLoading(false);
            return;
        }
        try {
            // to login
            if (isLogIn) {
                const res = await logInHandler(email, password);
                const acsToken = res && res?.user?.accessToken;
                setUserToken(acsToken);
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(acsToken));
                navigate("/store");
            } else {
                // to sign up
                const res = await signUpHandler(email, password);
                setIsLogIn(prev => !prev);
            }
            setEmail("");
            setPassword("");
        } catch (err) {
            setErrMessage(err.message);
        }
        setIsLoading(false);
    }


    return (
        <Card color="transparent" shadow={false} className="mt-10 max-w-96 w-full">
            <Typography variant="h4" color="blue-gray" className="text-center">
                {userToken ? "Change Password" : isLogIn ? "Log In" : "Sign Up"}
            </Typography>
            <CardBody>
                <form className="mt-2 mb-2 flex flex-col gap-6">
                    {
                        !userToken &&
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </>
                    }

                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        {`${userToken ? "New":""} ${"Password"}`}
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="******"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="mt-6" fullWidth onClick={submitHandler}>
                        {isLoading ? "Loading..." : "Submit"}
                    </Button>

                </form>
            </CardBody>
            <CardFooter className='p-1'>
                {errMessage && <Alert className='bg-red-500'>{errMessage}</Alert>}
                {!userToken && <Button variant='text' onClick={() => {
                    setIsLogIn(prev => !prev);
                }} className='mx-auto my-0 block mb-3'>
                    {isLogIn ? "create an account" : "log in with existing account"}
                </Button>}
            </CardFooter>
        </Card>
    )
}

export default LoginForm