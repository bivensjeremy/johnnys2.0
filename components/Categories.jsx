import { Image } from '@heroui/image';
import { Card, CardHeader } from '@heroui/card'
import { Link } from '@heroui/link';
import clsx from 'clsx';
import { fontHeader } from '@/config/fonts';
import { getCategories } from "@/lib/getCategories"

const Categories = async () => {
    const { apparelCategories } = await getCategories();

    return (
        <section className="min-h-96 grid grid-cols-2 md:flex flex-row justify-evenly">
            {apparelCategories.map(({ name }) => (
                <Card key={name} className="w-full h-96 relative overflow-hidden" as={Link} href={`/shop/${name}`} radius='none'>
                    <CardHeader className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                        <h4 className={clsx(fontHeader.className, "text-white text-5xl ")}>
                            {name}
                        </h4>
                    </CardHeader>

                    <Image
                        removeWrapper
                        radius='none'
                        alt="Card background"
                        className="z-0 w-full h-full object-cover "
                        src={`${name}.jpg`}
                    />
                </Card>
            ))}
        </section>
    );
}

export default Categories;