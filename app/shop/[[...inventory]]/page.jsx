
import Banner from "../../../components/Banner";
import { connection } from 'next/server'
import { getProducts } from "../../../lib/StoreFunctions";
import ProductCard from "../../../components/ProductCard";
import SearchBar from "../../../components/SearchBar";
import FilterBy from "../../../components/Filter";
import PaginationComp from '../../../components/PaginationComp';
import { getCategories } from "../../../lib/getCategories";
import {groupByCategory} from "../../../lib/groupByCategory";

const page = async ({ params, searchParams }) => {

    await connection();
    let category;
    let productPage
    let slice

    const { inventory } = await params;
    const { page, search } = await searchParams;
    
    inventory ? category = inventory[0] : ''
    page ? productPage = page : 1
    
    const { shopItems, error, totalItems } = await getProducts(
        category, 
        productPage, 
        search,
        slice
    );
    const { apparelCategories } = await getCategories();
    const groupedItems = groupByCategory(shopItems);
    if (error) return <div className="text-center">{error}!</div>

    return (
        <main>
            <Banner title='Shop Our Swag' />

            <div className="grid grid-cols-1 items-center sm:grid-cols-3 justify-items-center pt-3 w-2/3 md:w-full gap-4 mx-auto">
                <FilterBy {...{category, apparelCategories}} />
                <SearchBar storeNotAvailable={!shopItems} />
                <div className="hidden sm:block">
                    <p className="italic text-xs text-secondary font-semibold">Showing:</p>
                    <p className="font-semibold text-2xl">{category ? category : 'All Products'}</p>
                </div>
            </div>
            
            <div className="px-6">
                {Object.entries(groupedItems).map(([categoryName, products]) => (
                    <div key={categoryName}>
                        <h2 className="text-2xl max-w-4xl font-bold text-center bg-primary mx-auto rounded-full mt-12">
                            ~ {categoryName} ~
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                            <div key={product._id}>
                                <ProductCard {...product} />
                            </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="flex flex-wrap justify-center gap-0 sm:gap-2">
                {shopItems.map((product) => (
                    
                    <div key={product._id}>
                        <ProductCard {...product} />
                    </div>
                    
                ))}
            </div> */}

            {/* Did not get Pagination working. Omitting it altogether */}
            {/* <PaginationComp 
                paginationData={totalItems}
            /> */}
        </main>
    );
}

export default page;