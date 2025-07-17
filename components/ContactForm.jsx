'use client'
import { Button } from "@heroui/button";
import {Form} from "@heroui/form";
import {Input} from "@heroui/input";
import {Textarea} from "@heroui/input";
import {Select, SelectItem} from "@heroui/select";
import { addToast } from "@heroui/toast";
import { useState } from "react";

const ContactForm = () => {
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const subjectItems = [
        {key: "question", label: "Ask Me a Question"},
        {key: "employment", label: "Give Me a Job"},
        {key: "bug", label: "Report a Bug"},
        {key: "feedback", label: "Send Feedback"},
        {key: "other", label: "Something Else"},
    ]
    return (
        <Form 
            className="flex max-w-xl mx-auto  md:flex-nowrap md:gap-4"
            onReset={() => setSubmitStatus(null)}
            onSubmit={async(e) => {
                e.preventDefault();
                addToast({
                    title: "Form Submission",
                    description: "This form takes no action.",
                });
            }}
        >
            <div className="grid sm:grid-cols-2 w-full gap-2">
                <Input 
                    name="firstName"
                    label="First Name" 
                    type="text" 
                />
                <Input 
                    name="lastName"
                    label="Last Name" 
                    type="text" 
                />
            </div>
        
            <Input 
                name="email"
                label="Email" 
                type="email"
            />
            <Select 
                label="Subject" 
                name="subject" 
            >
                {subjectItems.map(({ label }) => (
                    <SelectItem key={label}>{label}</SelectItem>
                    ))}
            </Select>
            <Textarea 
                label="Message"
                name="message"
            />

            <div className="flex flex-col-reverse sm:flex-row w-full gap-2 justify-between">
                <Button size="lg" color="primary" variant="bordered" type="reset">
                    Reset
                </Button>
                <Button 
                    size='lg' 
                    type="submit" 
                    color="primary"
                >
                    Send
                </Button>
            </div>
        </Form>
    );
}

export default ContactForm;