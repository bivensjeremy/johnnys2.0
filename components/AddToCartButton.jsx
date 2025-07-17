'use client';

import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const AddToCartButton = ({ name, _id, imageUrl, price }) => {
    const { addItem, cartDetails } = useShoppingCart();
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        if(!cartDetails) return;
        const isInCart = Object.values(cartDetails).some((item) =>
            item.id === _id
        );
        setButtonDisabled(isInCart);
    }, [cartDetails, _id])

    const handleAddToCart = () => {
        const product = {
        name: name,
        id: _id,
        image: imageUrl,
        currency: 'USD',
        price: price,
        };
        addItem(product);
    };

    return (
        <Button
            onPress={handleAddToCart}
            // variant="bordered"
            isDisabled={buttonDisabled}
            color={buttonDisabled ? 'primary' : 'secondary'}
            className="w-[250px]"
            radius="sm"
        >
        {buttonDisabled ? 'Item in Cart' : 'Add to Cart'}
        </Button>
    );
};

export default AddToCartButton;