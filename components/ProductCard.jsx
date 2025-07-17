'use client'

import { useState } from 'react'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { Image } from '@heroui/image';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import RenderPrice from './RenderPrice';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ imageUrl, name, price, slug, _id, brand }) => {

  return (
    <div className='mx-auto'>
      <Card className="py-4 bg-transparent w-full" shadow='none' radius='sm' as={Link} href={`/shop/item/${slug}`}>
      
        <CardBody className="overflow-visible py-2 items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-md"
            src={imageUrl}
            width={250}
            // height={200}
            sizes=''
          />
        </CardBody>

        <CardFooter className="pb-0 pt-0 flex-col items-center text-center">
          <h4 className="text-lg font-bold truncate w-full">
            {brand}
          </h4>
          <h4 className="text-md truncate w-full max-w-[180px]">
            {name}
          </h4>

          <p className="text-md uppercase">
            <RenderPrice {...{price}} />
          </p>
        </CardFooter>
      </Card>

        <div className="flex justify-center">
          <AddToCartButton {...{ name, _id, imageUrl, price }} />
        </div>
    </div>
  )
}

export default ProductCard;