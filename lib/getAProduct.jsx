
import { client } from '@/sanity/client';

export async function getAProduct(slug) {
    let shopItem
    
    const search = `*[_type == 'product' && slug.current == '${slug}'][0]{
    price,
    color,
    name,
    quantity,
    'categoryName': category->name,
    'size':size->name,
    "slug": slug.current,
    'imageUrl': image.asset->url,
    brand,
    description
}`;

    try {
        shopItem = await client.fetch(search)
    } catch (e) {
        console.log(e)
    }

    return { shopItem }
};