import Image from "next/image";
import Banner from "../../components/Banner";
import { FaTemperatureHalf } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";

const page = () => {
    return (
        <main>
            <Banner title={'About This Website'} />

            <div>
                <div className="flex flex-col md:flex-row">
                    <section className="w-full md:w-2/5 mt-4 flex flex-col items-center justify-center gap-4 px-4 text-center">
                        <div>
                            <h3 className="text-lg font-bold mb-2">
                                The Website
                            </h3>
                            <p className='max-w-md'>
                                If you need an e-commerce website, I've got you covered. The inventory is made up of real clothes I own, but the payment system is set to a test environment that will not charge.
                            </p>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold mb-2">
                                The Project
                            </h3>
                            <p className='max-w-md'>
                                As a web developer, this site showcases the various functions an e-commerce store will need. From inventory management, payment processing, contact forms, and styling, this website displays it all. Primary systems include NextJS, Stripe and Sanity. 
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-2">
                                The Inventory
                            </h3>
                            <p className='max-w-md'>
                                Where did all these clothes and items come from, you ask? In my college days, between 2006-2012, I worked in a clothing store. As you may remember, the 2000s were a crazy time for urban wear.  We liked our clothes with extra breathing room! Most of these items are extremely lightly worn, but some were favorites.
                            </p>
                        </div>
                    </section>

                    <section className="w-3/5 relative">
                        <div className="w-full min-h-full absolute ">
                        <Image
                            src='/info.jpg'
                            alt="Worker image"
                            fill
                            className="object-cover overflow-hidden rounded-bl-medium"
                        />
                        </div>
                        
                    </section>
                </div>
            </div>

            <div className="container mx-auto flex flex-row justify-evenly gap-12 py-24">
                <div className="text-center items-center flex flex-col">
                    <FaShippingFast className="w-16 mb-2 h-auto" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                    </p>
                </div>

                <div className="text-center items-center flex flex-col">
                    <FaTemperatureHalf className="w-16 mb-2 h-auto" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                    </p>
                </div>

                <div className="text-center items-center flex flex-col">
                    <MdSupportAgent className="w-16 mb-2 h-auto" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
                    </p>
                </div>
            </div>

        </main>
    );
}

export default page;