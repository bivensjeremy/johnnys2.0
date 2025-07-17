import { client } from '@/sanity/client';
// import { useEffect } from 'react';
// import { useCallback } from 'react';
// import { useState } from 'react';

export async function getProducts( category, productPage, search, slice) {
    // const { page = 1, limit = 12 } = productPage;
    // const start = (page - 1) * limit;
    // const end = start + Number(limit);
    const filterByCategory = category ? `&& category->name == '${category}'` : '';
    const filterByQuery = search ? `&& (name match "*${search}*" || color match "*${search}*" || category->name match "*${search}*")` : ''

    
    const searchQuery = `*[_type == 'product' ${filterByCategory} ${filterByQuery}]
    |order(name asc)|order(category->name desc)
    {
        _id,
        price,
        name,
        'slug': slug.current,
        'categoryName': category->name,
        'imageUrl': image.asset->url,
        'size':size->name,
        brand,
        color,
        
    }`;



    let totalItems = null
    let shopItems = null
    let error = null;
    // let searchQuery = null 

    // if (!query) {
    //     searchQuery = undefined
    // } else { 
    //     searchQuery = query
    // }

    try {
        shopItems = await client.fetch(searchQuery)
        totalItems = await client.fetch(`count(${searchQuery})`);
        
    } catch (e) {
        error =  e.message
        console.log(e)
    }
    
    return { error, shopItems, totalItems }
};

// const useFetch = (url) => {
//     const [fetchedData, setFetchedData] = useState({
//         data: [],
//         isLoading: true,
//         error: false
//     })
//     const fetchData = useCallback(async() => {
//         try {
//             const data = await client.fetch(searchQuery)
//             if (data) {
//                 setFetchedData({
//                     data: data,
//                     isLoading: false,
//                     error: false,
//                 })
//             }
//         } catch (e) {
//             console.log('error occured', e)
//         }
//         setFetchedData({
//             data: [],
//             isLoading: false,
//             error: true
//         })
//     }, [url])

//     useEffect(()=> {
//         fetchData();

//     }, [url, fetchData])

//     const { data, isLoading, error } = fetchedData
//     return { data, isLoading, error };
// };

// export default useFetch;