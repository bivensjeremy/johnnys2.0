import { client } from '@/sanity/client';

export async function getCategories() {
    let apparelCategories = null
    let error = null

    const search = `*[_type == 'category']{ name }`;

    try {
        apparelCategories = await client.fetch(search)
    } catch (e) {
        error = e.message
    }
    return { error, apparelCategories }
}