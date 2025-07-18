import { fontHeader } from '@/config/fonts';
import { Button } from '@heroui/button';
// import { Image } from '@heroui/image'
import { Link } from '@heroui/link';
import clsx from 'clsx';
import Image from 'next/image';

const Featured = () => {
    return (
        <section id="About">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2  my-auto  h-[50vh] flex flex-col items-center justify-center ">
                    <p className={clsx(fontHeader.className, 'text-4xl pb-4 text-center')}>
                        Shop the Collection
                    </p>

                    <Button
                        as={Link}
                        color="secondary"
                        size="lg"
                        href="/shop"
                        variant="bordered"
                        // className="text-white"
                        >
                        Shop Now
                    </Button>
                </div>

                <div className="w-full h-[50vh] md:w-1/2 relative">
                    <div className="w-full h-[50vh] absolute ">
                        <Image
                            src='/featured.jpg'
                            alt="Worker image"
                            fill
                            className="object-cover overflow-hidden rounded-tl-medium"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;