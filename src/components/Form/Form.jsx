import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { makePostRequest } from "../../services/api";


function Form() {
    const formRef = useRef()
    const [contactInput, setContactInput] = useState({
        name: "",
        email: "",
        phone: ""
    });
    
    async function contactSubmitHandler(e) {
        e.preventDefault();
        await makePostRequest(contactInput,"contact.json");
        formRef.current.reset()
    }

    return (
        <Card color="transparent" shadow={false} className="mt-10 max-w-96 w-full">
            <Typography variant="h4" color="blue-gray" className="text-center">
                Contact Us
            </Typography>
            <form className="mt-8 mb-2" ref={formRef}>
                <div className="mb-1 flex flex-col gap-6">
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Name
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={(e) => setContactInput(prev => ({ ...prev, name: e.target.value }))}
                    />
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
                        onChange={(e) => setContactInput(prev => ({ ...prev, email: e.target.value }))}
                    />
                    <Typography variant="h6" color="blue-gray" className="-mb-3">
                        Phone
                    </Typography>
                    <Input
                        type="tel"
                        size="lg"
                        placeholder="+91-60045*****"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                        onChange={(e) => setContactInput(prev => ({ ...prev, phone: e.target.value }))}
                    />
                </div>
                <Button className="mt-6" fullWidth onClick={contactSubmitHandler}>
                    Submit
                </Button>
            </form>
        </Card>
    );
}

export default Form