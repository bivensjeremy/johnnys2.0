import { Image } from "@heroui/image";
import { getAProduct } from "../../../../lib/getAProduct";
import RenderPrice from "../../../../components/RenderPrice";
import AddToCartButton from "../../../../components/AddToCartButton";


const Page = async ({ params }) => {
    const { permalink } = await params;
    const { shopItem } = await getAProduct(permalink);
    const { _id, name, imageUrl, description, price, color, quantity, slug, size, brand} = shopItem;

    return (
        <div key={permalink} className="p-6 md:p-16 lg:p-24 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
    
            {/* Image Section */}
            <div className="w-full md:w-1/2 sticky top-24 h-auto">
                <div className="relative aspect-square md:aspect-[3/4] w-full overflow-hidden rounded-xl shadow-md">
                    <Image
                        src={imageUrl}
                        alt="Product Image"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">{brand}</h2>
                    <h1 className="text-3xl md:text-5xl font-bold ">{name}</h1>
                    <p className="text-sm text-zinc-100">SKU: {slug}</p>
                </div>

                <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-success">
                        <RenderPrice {...{ price }} />
                    </h3>
                    <p className="text-md font-medium text-zinc-100">
                        {quantity > 0 ? `Quantity Available: ${quantity}` : <span className="italic text-red-500">Sold Out</span>}
                    </p>
                    <p className="text-sm text-zinc-400">Color: {color}</p>
                </div>

                <div className="pt-4">
                    <AddToCartButton {...{ name, _id, imageUrl, price }} />
                </div>

                <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-md font-semibold mb-2">Product Description</h4>
                    <p className="text-md leading-relaxed">{description}</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Page;