'use client'

import { fontHeader } from "@/config/fonts";
import { Accordion, AccordionItem } from "@heroui/accordion";
import clsx from "clsx";

const FAQ = () => {
    return (
        <section className="flex flex-col items-center py-12 px-6">
            <div>
                <h2 className={clsx(fontHeader.className, 'text-4xl mb-3')}>
                    Frequently Asked Questions
                </h2>
            </div>
            <Accordion className="max-w-2xl">
                {faqData.map(({ id, question, answer }) => (
                    <AccordionItem key={id} title={question}>
                        {answer}
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}

export default FAQ;

const faqData = [
    {
        id: 1,
        question: "Aren't you a web developer? Is this a real store?",
        answer: "This is a sample project of an e-commerce website. It showcases all of the standard features needed in a web store."
    },
    {
        id: 2,
        question: "How much would a website like this cost to build?",
        answer: "E-Commerce sites start at $2,499. Ask if any specials are available."
    },
    {
        id: 3,
        question: "Can I make a suggestion?",
        answer: "Sure. The Contact Form will not send, but if you reach out to me directly, I will be happy to receive your feedback."
    },
    {
        id: 4,
        question: "How long does it take to build a website like this?",
        answer: "Typical turnaround time is 3-4 weeks. Factors depend on approvals, images, and setup."
    },
    {
        id: 5,
        question: "Can I get a website like this for my business?",
        answer: "Yes. You can get a custom built site with all the features displayed here. Contact me today."
    },
    // {
    //     id: 6,
    //     question: "Is my card information secure?",
    //     answer: "Yes. On my production site I utilize Stripe to manage the checkout process. I never see, nor have access to, your personal card information."
    // },
    // {
    //     id: 7,
    //     question: "I am local. Can we meet in person?",
    //     answer: "Possibly."
    // },
    // {
    //     id: 8,
    //     question: "How can I request additional sizes?",
    //     answer: "You can't."
    // },
    // {
    //     id: 9,
    //     question: "What is your return policy?",
    //     answer: "Can't return something you never get."
    // },
    // {
    //     id: 10,
    //     question: "What about cancellations?",
    //     answer: "If you purchase from the production site, I will take into consideration the need to cancel and will proceed accordingly."
    // },
    // {
    //     id: 11,
    //     question: "How long is shipping?",
    //     answer: "As long as it takes."
    // },
    // {
    //     id: 12,
    //     question: "Can you list my items?",
    //     answer: "No. I can, however, build you a website and allow you to sell your own.  I am not in the business of reselling. Check out my main website, where you can contact me to build you a custom website of your own!"
    // },
    // {
    //     id: 13,
    //     question: "Are prices negotiable?",
    //     answer: "No."
    // },
    // {
    //     id: 14,
    //     question: "I have a suggestion. How can I get in touch with you?",
    //     answer: "Go to bivensblueprint.com I have contact information there."
    // },
    // {
    //     id: 15,
    //     question: "Do you offer bundle discounts?",
    //     answer: "Not at this time. I was working on it but decided to table it for later."
    // }
]