import Banner from "../../../components/Banner";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { GiCheckMark } from "react-icons/gi";

const page = () => {
    return (
        <main>
            <Banner title='Checkout' />

            <section className="min-h-screen bg-zinc-50 text-black">
                <div className="min-h-96 my-auto text-center flex flex-col justify-center">
                    <GiCheckMark className="mx-auto" size={64} />

                    <h1 className={`text-2xl py-8 font-bold`}>
                        Payment Success!
                    </h1>

                    <p>Thank you for your purchase!</p>

                    <p className="font-semibold py-4">Have a great day!</p>

                    <div>
                        <Button
                            as={Link}
                            color="primary"
                            radius="sm"
                            href="/"
                            variant="solid"
                        >
                            Return Home
                        </Button>
                    </div>
                    
                </div>
            </section>
        </main>
    );
}

export default page;